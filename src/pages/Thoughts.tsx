import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import type { Thought } from '@/lib/types';
import { getThoughts } from '@/lib/api';
import { formatDate } from '@/lib/utils';
import { setupScrollAnimations } from '@/lib/animations';

export function Thoughts() {
  const [thoughts, setThoughts] = useState<Thought[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadThoughts();
    const cleanup = setupScrollAnimations();
    return cleanup;
  }, []);

  const loadThoughts = async () => {
    setLoading(true);
    const response = await getThoughts();
    if (response.success && response.data) {
      setThoughts(response.data);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Page Header */}
        <div className="flex flex-col gap-3 mb-12 animate-on-scroll">
          <h1 className="text-4xl sm:text-5xl font-black leading-tight tracking-tight text-gray-900 dark:text-white">
            My Musings
          </h1>
          <p className="text-base text-gray-500 dark:text-gray-400">
            A collection of thoughts on technology, design, and development.
          </p>
        </div>

        {/* Thoughts List */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="text-gray-500 dark:text-gray-400">Loading thoughts...</div>
          </div>
        ) : (
          <div className="flex flex-col gap-10">
            {thoughts.map((thought) => (
              <article
                key={thought.id}
                className="flex flex-col md:flex-row items-stretch justify-between gap-6 p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800/20 transition-colors group animate-on-scroll"
              >
                <div className="flex flex-[2_2_0px] flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {formatDate(thought.date)}
                      {thought.readTime && ` • ${thought.readTime} min read`}
                    </p>
                    <h2 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-primary dark:group-hover:text-primary transition-colors">
                      <Link to={`/thoughts/${thought.slug}`} className="stretched-link">
                        {thought.title}
                      </Link>
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      {thought.excerpt}
                    </p>
                  </div>
                  {thought.tags && thought.tags.length > 0 && (
                    <div className="flex gap-2 flex-wrap">
                      {thought.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="flex items-center gap-2 text-primary text-sm font-medium">
                    <span>Read More</span>
                    <span className="material-symbols-outlined text-base transition-transform group-hover:translate-x-1">
                      arrow_forward
                    </span>
                  </div>
                </div>
                {thought.coverImage && (
                  <div
                    className="w-full h-48 md:h-auto md:w-auto bg-center bg-no-repeat bg-cover rounded-lg flex-1 min-w-[200px]"
                    style={{ backgroundImage: `url(${thought.coverImage})` }}
                  ></div>
                )}
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}


