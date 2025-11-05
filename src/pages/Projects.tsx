import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import type { Project } from '@/lib/types';
import { getProjects } from '@/lib/api';
import { Button } from '@/components/ui/button';
import { setupScrollAnimations } from '@/lib/animations';

export function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);

  const categories = ['All', 'Web App', 'Mobile', 'UI/UX'];

  useEffect(() => {
    loadProjects();
    const cleanup = setupScrollAnimations();
    return cleanup;
  }, []);

  const loadProjects = async () => {
    setLoading(true);
    const response = await getProjects();
    if (response.success && response.data) {
      setProjects(response.data);
    }
    setLoading(false);
  };

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <div className="container mx-auto px-4 py-16">
        {/* Page Header */}
        <div className="flex flex-wrap justify-between gap-6 mb-12 animate-on-scroll">
          <div className="flex min-w-[300px] flex-col gap-3">
            <h1 className="text-4xl font-black leading-tight tracking-tight text-gray-900 dark:text-white">
              My Work & Projects
            </h1>
            <p className="text-base leading-normal text-gray-600 dark:text-gray-400">
              A collection of my recent work, showcasing my skills in development and design.
            </p>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex gap-2 flex-wrap mb-12 animate-on-scroll">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`h-10 px-6 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-white hover:bg-primary/20 dark:hover:bg-primary/30'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="text-gray-500 dark:text-gray-400">Loading projects...</div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <Link
                key={project.id}
                to={`/projects/${project.slug}`}
                className="group flex flex-col gap-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1C1C2E] p-4 transition-all hover:shadow-lg hover:border-primary/50 dark:hover:border-primary/50 hover:-translate-y-1 animate-on-scroll"
              >
                {/* Project Image */}
                <div className="overflow-hidden rounded-lg">
                  <div
                    className="w-full h-48 bg-center bg-no-repeat bg-cover transition-transform duration-300 group-hover:scale-105"
                    style={{
                      backgroundImage: `url(${project.imageUrl || 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80'})`,
                    }}
                  ></div>
                </div>

                {/* Project Info */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-base font-bold text-gray-900 dark:text-white">
                    {project.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium text-primary bg-primary/20 px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-20 py-16 text-center animate-on-scroll">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Interested in working together?
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's connect and discuss how I can help bring your ideas to life.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">Contact Me</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}


