#!/usr/bin/env node

/**
 * Bootstrap Script
 * Automatically sets up the development environment
 * - Checks Node version
 * - Installs dependencies
 * - Sets up environment variables
 * - Validates configuration
 */

import { exec } from 'child_process';
import { promisify } from 'util';
import { existsSync, readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const execAsync = promisify(exec);
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

// ANSI colors
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function logStep(step, message) {
  log(`\n[${step}] ${message}`, 'cyan');
}

function logSuccess(message) {
  log(`✓ ${message}`, 'green');
}

function logWarning(message) {
  log(`⚠ ${message}`, 'yellow');
}

function logError(message) {
  log(`✗ ${message}`, 'red');
}

async function checkNodeVersion() {
  logStep('1/5', 'Checking Node.js version...');
  
  const nodeVersion = process.version;
  const majorVersion = parseInt(nodeVersion.slice(1).split('.')[0]);
  const requiredVersion = 18;

  log(`Current Node version: ${nodeVersion}`);

  if (majorVersion < requiredVersion) {
    logError(`Node.js ${requiredVersion}+ is required. You are using ${nodeVersion}`);
    log('Please upgrade Node.js: https://nodejs.org/', 'yellow');
    process.exit(1);
  }

  logSuccess(`Node.js version is compatible (${nodeVersion})`);
}

async function installDependencies() {
  logStep('2/5', 'Installing dependencies...');

  try {
    log('Running npm install...');
    const { stdout } = await execAsync('npm install', { cwd: rootDir });
    logSuccess('Dependencies installed successfully');
  } catch (error) {
    logError('Failed to install dependencies');
    console.error(error.message);
    process.exit(1);
  }
}

function setupEnvironment() {
  logStep('3/5', 'Setting up environment variables...');

  const envLocalPath = join(rootDir, '.env.local');

  if (existsSync(envLocalPath)) {
    logWarning('.env.local already exists, skipping...');
    return;
  }

  const envExamplePath = join(rootDir, '.env.example');
  
  if (!existsSync(envExamplePath)) {
    logWarning('.env.example not found, creating default .env.local');
    const defaultEnv = `# Mock mode for development
VITE_USE_MOCK=true

# Uncomment and fill in when using Supabase
# VITE_SUPABASE_URL=
# VITE_SUPABASE_ANON_KEY=
`;
    writeFileSync(envLocalPath, defaultEnv, 'utf-8');
    logSuccess('Created .env.local with default values');
    return;
  }

  try {
    const envExample = readFileSync(envExamplePath, 'utf-8');
    writeFileSync(envLocalPath, envExample, 'utf-8');
    logSuccess('Created .env.local from .env.example');
    log('Please update .env.local with your actual values if needed', 'yellow');
  } catch (error) {
    logError('Failed to create .env.local');
    console.error(error.message);
  }
}

async function validateConfiguration() {
  logStep('4/5', 'Validating configuration...');

  const requiredFiles = [
    'package.json',
    'tsconfig.json',
    'vite.config.ts',
    'tailwind.config.js',
    'src/main.tsx',
  ];

  let allValid = true;

  for (const file of requiredFiles) {
    const filePath = join(rootDir, file);
    if (existsSync(filePath)) {
      log(`✓ ${file}`, 'green');
    } else {
      log(`✗ ${file} (missing)`, 'red');
      allValid = false;
    }
  }

  if (!allValid) {
    logError('Some required files are missing');
    process.exit(1);
  }

  logSuccess('All required files present');
}

async function showNextSteps() {
  logStep('5/5', 'Setup complete! 🎉');

  log('\n' + '='.repeat(60), 'cyan');
  log('Next steps:', 'bright');
  log('='.repeat(60), 'cyan');

  log('\n1. Review and update your environment variables:', 'yellow');
  log('   Edit .env.local with your configuration');

  log('\n2. Customize your portfolio:', 'yellow');
  log('   - Update personal info in src/components/ and src/pages/');
  log('   - Add your projects in src/data/mockData.ts');
  log('   - Update colors in tailwind.config.js');

  log('\n3. Start the development server:', 'yellow');
  log('   npm run dev', 'green');
  log('   (or)');
  log('   npm run dev:mock', 'green');

  log('\n4. Build for production:', 'yellow');
  log('   npm run build', 'green');

  log('\n5. Deploy to GitHub Pages:', 'yellow');
  log('   Follow the instructions in README.md', 'green');

  log('\n' + '='.repeat(60), 'cyan');
  log('\nFor more information, see README.md', 'blue');
  log('='.repeat(60) + '\n', 'cyan');
}

async function main() {
  log('\n' + '='.repeat(60), 'bright');
  log('🚀 Portfolio Bootstrap Script', 'bright');
  log('='.repeat(60) + '\n', 'bright');

  try {
    await checkNodeVersion();
    await installDependencies();
    setupEnvironment();
    await validateConfiguration();
    await showNextSteps();
  } catch (error) {
    logError('Bootstrap failed');
    console.error(error);
    process.exit(1);
  }
}

main();

