import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Camera, Code2, ExternalLink, Github } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { SEOHead } from '@/components/seo/SEOHead';
import { getProjectBySlug } from '@/data/projects';

/**
 * Project detail page with title, description, and demo/GitHub links.
 * No image gallery.
 */
export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  return (
    <>
      <SEOHead
        title={project.title}
        description={project.description}
        image={project.coverImage}
        type="article"
      />
      
      <div className="min-h-screen">
        {/* Hero Image - 70vh */}
      <motion.div
        className="relative w-full h-[70vh] overflow-hidden bg-muted"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={project.coverImage}
          alt={project.title}
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
      </motion.div>

      {/* Project Info Section */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 py-12 md:py-16">
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Title */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide">
              {project.title}
            </h1>
            {project.location && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground font-light">
                <MapPin className="size-4" />
                <span>{project.location}</span>
              </div>
            )}
          </div>

          <Separator />

          {/* Demo & GitHub Links */}
          {(project.demoUrl || project.githubUrl) && (
            <div className="flex flex-wrap gap-3">
              {project.demoUrl && (
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex">
                  <Button variant="default" size="lg" className="gap-2">
                    <ExternalLink className="size-4" />
                    View Demo
                  </Button>
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex">
                  <Button variant="outline" size="lg" className="gap-2">
                    <Github className="size-4" />
                    GitHub
                  </Button>
                </a>
              )}
            </div>
          )}

          {/* Description — bullet points if available, else paragraph */}
          <div className="space-y-4">
            {project.descriptionBullets && project.descriptionBullets.length > 0 ? (
              <ul className="space-y-2 text-lg font-light leading-relaxed text-foreground list-disc list-inside pl-2">
                {project.descriptionBullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            ) : (
              <p className="text-lg md:text-xl font-light leading-relaxed text-foreground">
                {project.description}
              </p>
            )}
          </div>

          {/* Project-specific visuals: Sovereign Sentinel dashboard */}
          {project.slug === 'sovereign-sentinel' && (
            <div className="space-y-8 pt-4">
              <div className="space-y-3">
                <h2 className="text-2xl font-light tracking-wide">Dashboard</h2>
                <p className="text-muted-foreground font-light text-sm">
                  InstaControl Observability Surface — edge dashboard (React) from ADK event trace + local metrics.
                </p>
                <div className="rounded-md overflow-hidden border border-border bg-muted">
                  <img
                    src="/projects/sovereign-sentinel-dashboard.png"
                    alt="Sovereign Sentinel Facility Intelligence System dashboard"
                    className="w-full h-auto object-contain bg-background"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Project-specific visuals from GitHub READMEs */}
          {project.slug === 'farm-sage' && (
            <div className="space-y-8 pt-4">
              <div className="space-y-3">
                <h2 className="text-2xl font-light tracking-wide">Dashboard Preview</h2>
                <div className="rounded-md overflow-hidden border border-border bg-muted">
                  <img
                    src="https://raw.githubusercontent.com/Aditii2112/FarmSage/main/assets/Dashboard.png"
                    alt="Farm Sage dashboard showing composite KPI and scenario builder"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <h2 className="text-2xl font-light tracking-wide">Workflow Graph</h2>
                <div className="rounded-md overflow-hidden border border-border bg-muted">
                  <img
                    src="https://raw.githubusercontent.com/Aditii2112/FarmSage/main/assets/workflow_graph.png"
                    alt="Farm Sage multi-agent workflow graph"
                    className="w-full h-auto object-contain bg-background"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Technical Details */}
          <div className="grid md:grid-cols-2 gap-6 pt-4">
            {project.camera && (
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm font-light tracking-wide uppercase text-muted-foreground">
                  <Camera className="size-4" />
                  <span>Camera</span>
                </div>
                <p className="font-light text-foreground">{project.camera}</p>
              </div>
            )}
            {project.skills && (
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm font-light tracking-wide uppercase text-muted-foreground">
                  <Code2 className="size-4" />
                  <span>Skills</span>
                </div>
                <p className="font-light text-foreground">{project.skills}</p>
              </div>
            )}
          </div>
        </motion.div>
      </section>
      </div>
    </>
  );
}
