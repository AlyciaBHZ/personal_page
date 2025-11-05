import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import type { Project } from '@/lib/types';
import { getProjectBySlug } from '@/lib/api';
import { Button } from '@/components/ui/button';

export function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      loadProject(slug);
    }
  }, [slug]);

  const loadProject = async (projectSlug: string) => {
    setLoading(true);
    const response = await getProjectBySlug(projectSlug);
    if (response.success && response.data) {
      setProject(response.data);
    }
    setLoading(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background-light dark:bg-background-dark">
        <div className="text-gray-500 dark:text-gray-400">Loading project...</div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background-light dark:bg-background-dark gap-4">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Project not found</h1>
        <Button asChild>
          <Link to="/projects">Back to Projects</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto flex flex-col gap-10">
          {/* Breadcrumbs */}
          <div className="flex flex-wrap gap-2">
            <Link
              to="/projects"
              className="text-gray-500 dark:text-gray-400 text-base font-medium hover:text-primary dark:hover:text-primary transition-colors"
            >
              Projects
            </Link>
            <span className="text-gray-500 dark:text-gray-400">/</span>
            <span className="text-gray-900 dark:text-white font-medium">{project.name}</span>
          </div>

          {/* Hero Section */}
          <section className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight text-gray-900 dark:text-white">
                {project.name}
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400">{project.description}</p>
            </div>

            {/* Tags */}
            <div className="flex gap-3 flex-wrap">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="h-8 px-4 flex items-center justify-center rounded-full bg-primary/10 dark:bg-gray-800 text-primary dark:text-white text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              {project.websiteUrl && (
                <Button asChild size="lg">
                  <a href={project.websiteUrl} target="_blank" rel="noopener noreferrer">
                    <span className="material-symbols-outlined mr-2">open_in_new</span>
                    View Live Demo
                  </a>
                </Button>
              )}
              {project.githubUrl && (
                <Button asChild variant="secondary" size="lg">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <span className="material-symbols-outlined mr-2">code</span>
                    View on GitHub
                  </a>
                </Button>
              )}
            </div>
          </section>

          {/* Project Image */}
          {project.imageUrl && (
            <section>
              <div className="w-full aspect-video rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-800 border border-gray-200 dark:border-gray-800">
                <img
                  src={project.imageUrl}
                  alt={`Screenshot of ${project.name}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </section>
          )}

          {/* Content */}
          <section className="grid md:grid-cols-3 gap-10">
            <div className="md:col-span-2 flex flex-col gap-6">
              {project.longDescription && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    Project Overview
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {project.longDescription}
                  </p>
                </div>
              )}
              {project.outcomes && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    Outcomes & Lessons Learned
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {project.outcomes}
                  </p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="md:col-span-1">
              <div className="sticky top-28 bg-gray-100 dark:bg-[#1a1a2b] p-6 rounded-xl border border-gray-200 dark:border-gray-800">
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                  Project Details
                </h4>
                <div className="space-y-4">
                  {project.role && (
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        My Role
                      </p>
                      <p className="text-base font-medium text-gray-800 dark:text-gray-200">
                        {project.role}
                      </p>
                    </div>
                  )}
                  {project.client && (
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Client</p>
                      <p className="text-base font-medium text-gray-800 dark:text-gray-200">
                        {project.client}
                      </p>
                    </div>
                  )}
                  {project.timeline && (
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Timeline
                      </p>
                      <p className="text-base font-medium text-gray-800 dark:text-gray-200">
                        {project.timeline}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </aside>
          </section>

          {/* Tech Stack */}
          {project.techStack && project.techStack.length > 0 && (
            <section>
              <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
                Technology Stack
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {project.techStack.map((tech) => (
                  <div
                    key={tech}
                    className="flex flex-col items-center justify-center p-4 bg-gray-100 dark:bg-gray-800 rounded-lg h-28"
                  >
                    <p className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                      {tech}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Navigation */}
          <section className="border-t border-gray-200 dark:border-gray-800 pt-8 flex justify-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/projects">
                <span className="material-symbols-outlined mr-2">arrow_back</span>
                Back to Projects
              </Link>
            </Button>
          </section>
        </div>
      </div>
    </div>
  );
}


