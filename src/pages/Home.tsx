import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Eyes } from '@/components/Eyes';
import { curtainReveal, fadeInUp } from '@/lib/animations';

export function Home() {
  useEffect(() => {
    // Trigger curtain animation on mount
    curtainReveal({
      onComplete: () => {
        // Fade in content after curtain reveal
        fadeInUp('.hero-content', { delay: 0.2 });
        fadeInUp('.hero-buttons', { delay: 0.4 });
        fadeInUp('.eyes-container', { delay: 0.6 });
      },
    });
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Animated Curtain Overlay */}
      <div className="fixed inset-0 z-50 flex pointer-events-none">
        <div className="curtain-left curtain-panel h-full w-1/2 bg-gray-900 dark:bg-[#081424]"></div>
        <div className="curtain-right curtain-panel h-full w-1/2 bg-gray-900 dark:bg-[#081424]"></div>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 flex min-h-screen w-full flex-col items-center justify-center p-4 gap-12">
        {/* Background Gradient */}
        <div
          className="absolute inset-0 z-0 opacity-10 dark:opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle at center, #1313ec 2%, transparent 40%)',
          }}
        ></div>

        {/* Hero Content */}
        <div className="hero-content z-10 mx-auto flex max-w-4xl flex-col items-center justify-center text-center opacity-0">
          <h1 className="font-display text-6xl font-bold leading-tight tracking-tighter text-slate-100 sm:text-7xl md:text-8xl mb-6">
            Welcome to Lexa's Page
          </h1>
          <p className="mt-4 max-w-xl text-xl leading-relaxed text-slate-400">
            Creative developer & designer crafting beautiful digital experiences
          </p>

          <div className="hero-buttons mt-10 flex flex-col items-center gap-4 sm:flex-row opacity-0">
            <Button asChild variant="default" size="lg">
              <Link to="/projects">View Projects</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/thoughts">Read Thoughts</Link>
            </Button>
            <Button asChild variant="accent" size="lg">
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>

        {/* Eyes Animation */}
        <div className="eyes-container z-10 opacity-0">
          <Eyes />
        </div>
      </div>
    </div>
  );
}

