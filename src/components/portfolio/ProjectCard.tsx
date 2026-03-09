import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import type { Project } from '@/types';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  project: Project;
  aspectRatio?: 'portrait' | 'landscape' | 'square';
  showCategory?: boolean;
  index?: number;
}

/**
 * Project card component with image, hover overlay, and smooth animations
 * Used in homepage featured projects and portfolio grid
 */
export function ProjectCard({ 
  project, 
  aspectRatio, 
  showCategory = true,
  index = 0 
}: ProjectCardProps) {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const ratio = aspectRatio || 'landscape';
  
  const aspectRatioClasses = {
    portrait: 'aspect-[3/4]',
    // Make landscape cards shorter so images don't dominate the grid
    landscape: 'aspect-[3/1]',
    square: 'aspect-square'
  };

  const oneLiner =
    project.shortDescription ||
    (project.description.includes('.') ? project.description.split('.')[0].trim() + '.' : project.description);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="space-y-3"
    >
      <div className="group block relative">
        <Link
          to={`/project/${project.slug}`}
          className="block rounded-sm"
        >
          {/* Image Container - smaller aspect ratio */}
          <div className={cn('relative overflow-hidden rounded-sm bg-muted', aspectRatioClasses[ratio])}>
            {!isLoaded && (
              <div className="absolute inset-0 bg-muted" />
            )}
            <motion.img
              src={project.coverImage}
              alt={project.title}
              className={cn(
                'absolute inset-0 w-full h-full object-cover transition-all duration-700',
                isLoaded ? 'opacity-100' : 'opacity-0',
                'group-hover:scale-105'
              )}
              loading={index < 6 ? 'eager' : 'lazy'}
              onLoad={() => setIsLoaded(true)}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white text-lg font-light tracking-wide">
                  {project.title}
                </h3>
              </div>
            </div>
          </div>
        </Link>
        {/* Always visible: project name, one-line description, GitHub link */}
        <div className="px-0 pt-2 space-y-2 flex items-start justify-between gap-3">
          <Link
            to={`/project/${project.slug}`}
            className="min-w-0 flex-1 space-y-1"
          >
            <h3 className="text-lg font-medium tracking-wide text-foreground hover:underline underline-offset-2">
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground font-light leading-snug line-clamp-2">
              {oneLiner}
            </p>
            <div className="pt-1">
              <span className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline underline-offset-2">
                Read more
                <span aria-hidden>→</span>
              </span>
            </div>
          </Link>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-2 px-3 py-2 rounded-md bg-muted hover:bg-muted/80 text-foreground font-medium text-sm transition-colors border border-border"
              aria-label="View on GitHub"
            >
              <Github className="size-6" />
              <span>GitHub</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
