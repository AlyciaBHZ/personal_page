import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { submitContactMessage } from '@/lib/api';
import type { ContactMessage } from '@/lib/types';

export function Contact() {
  const [formData, setFormData] = useState<Omit<ContactMessage, 'id' | 'createdAt'>>({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    const response = await submitContactMessage(formData);

    if (response.success) {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } else {
      setStatus('error');
      setErrorMessage(response.error || 'Failed to send message');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <div className="container mx-auto px-4 py-16 max-w-2xl">
        {/* Page Header */}
        <div className="flex flex-col items-center gap-4 text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-black leading-tight tracking-tight text-gray-900 dark:text-white">
            Get in Touch
          </h1>
          <p className="text-base text-gray-600 dark:text-gray-400 max-w-lg">
            Feel free to reach out for collaborations or job opportunities. I'm always open to
            discussing new projects and creative ideas.
          </p>
        </div>

        {/* Contact Form */}
        <div className="w-full bg-white dark:bg-black/20 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* Name & Email Row */}
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex flex-col gap-2 flex-1">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={status === 'loading'}
                />
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={status === 'loading'}
                />
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="How can I help you?"
                value={formData.message}
                onChange={handleChange}
                required
                disabled={status === 'loading'}
                rows={6}
              />
            </div>

            {/* Status Messages */}
            {status === 'success' && (
              <div className="p-4 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-lg text-sm">
                Message sent successfully! I'll get back to you soon.
              </div>
            )}
            {status === 'error' && (
              <div className="p-4 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 rounded-lg text-sm">
                {errorMessage}
              </div>
            )}

            {/* Submit Button */}
            <Button type="submit" disabled={status === 'loading'} size="lg" className="self-start">
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </div>

        {/* Social Links */}
        <div className="flex flex-col items-center gap-6 w-full mt-12">
          <div className="w-full flex items-center gap-4">
            <hr className="flex-grow border-gray-200 dark:border-gray-800" />
            <p className="text-gray-500 dark:text-gray-400 text-sm">Or find me elsewhere</p>
            <hr className="flex-grow border-gray-200 dark:border-gray-800" />
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/wenlin-zhang-4978891b3/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 bg-gray-100 hover:bg-gray-200 dark:bg-white/5 dark:hover:bg-white/10 rounded-full transition-colors text-gray-600 dark:text-gray-300"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16.32 14.9h-1.61v-4.52c0-1.28-.56-1.92-1.6-1.92-.96 0-1.36.72-1.36 1.68v4.76h-1.6v-5.52c0-2.08 1.04-3.12 2.96-3.12 1.6 0 2.4.96 2.56 2.4h.08v-2.16h1.6v9.44z" />
              </svg>
            </a>
            <a
              href="https://github.com/AlyciaBHZ"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 bg-gray-100 hover:bg-gray-200 dark:bg-white/5 dark:hover:bg-white/10 rounded-full transition-colors text-gray-600 dark:text-gray-300"
              aria-label="GitHub"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.033c-3.338.724-4.043-1.61-4.043-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.302-5.467-1.332-5.467-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.807 5.624-5.479 5.922.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.565 21.796 24 17.3 24 12 24 5.373 18.627 0 12 0z" />
              </svg>
            </a>
            <a
              href="mailto:lexa@lexaverse.dev"
              className="flex items-center gap-2 h-12 px-5 bg-gray-100 hover:bg-gray-200 dark:bg-white/5 dark:hover:bg-white/10 rounded-full transition-colors text-gray-600 dark:text-gray-300"
            >
              <span className="material-symbols-outlined text-xl">mail</span>
              <span className="text-sm font-medium">lexa@lexaverse.dev</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}


