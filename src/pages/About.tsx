import { motion } from 'framer-motion';
import { Instagram, Linkedin, Github, FileText, ExternalLink } from 'lucide-react';
import { photographerInfo } from '@/data/photographer';
import { education } from '@/data/education';
import { research } from '@/data/research';
import { professionalDevelopment } from '@/data/professionalDevelopment';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { SEOHead } from '@/components/seo/SEOHead';

/**
 * About page with photographer biography and professional information
 * Features split layout with portrait video and comprehensive biography
 */
export default function About() {
  return (
    <>
      <SEOHead
        title="About"
        description={`Learn about ${photographerInfo.name}, ${photographerInfo.tagline}. ${photographerInfo.biography.split('\n\n')[0]}`}
        image={photographerInfo.portraitImage}
      />
      
      <div className="min-h-screen">
        {/* Hero Section */}
      <section className="py-24 md:py-32 px-6 lg:px-8 border-b border-border">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <motion.div
            initial={{ opacity: 0.8, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-wide mb-4">
              About
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-light tracking-wide">
              {photographerInfo.tagline}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portrait and Biography - Split Layout */}
      <section className="py-16 md:py-24 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Portrait Image */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0.8, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <div className="aspect-[3/4] relative overflow-hidden rounded-sm bg-muted">
                <img
                  src={photographerInfo.portraitImage}
                  alt={photographerInfo.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              
              {/* Social Links */}
              <div className="flex items-center gap-4">
                {photographerInfo.socialLinks.instagram && (
                  <a
                    href={photographerInfo.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 border border-border rounded-sm hover:bg-accent transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="size-5" />
                  </a>
                )}
                {photographerInfo.socialLinks.linkedin && (
                  <a
                    href={photographerInfo.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 border border-border rounded-sm hover:bg-accent transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="size-5" />
                  </a>
                )}
                {photographerInfo.socialLinks.github && (
                  <a
                    href={photographerInfo.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 border border-border rounded-sm hover:bg-accent transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="size-5" />
                  </a>
                )}
                {photographerInfo.socialLinks.behance && (
                  <a
                    href={photographerInfo.socialLinks.behance}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 border border-border rounded-sm hover:bg-accent transition-colors"
                    aria-label="Behance"
                  >
                    <svg
                      className="size-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 8h6a3 3 0 0 1 0 6H3V8z" />
                      <path d="M3 14h7a3 3 0 0 1 0 6H3v-6z" />
                      <path d="M14 7h7" />
                      <path d="M17 8a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
                    </svg>
                  </a>
                )}
              </div>
            </motion.div>

            {/* Biography and Info */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0.8, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              {/* Name and Tagline */}
              <div className="space-y-3">
                <h2 className="text-4xl md:text-5xl font-light tracking-wide">
                  {photographerInfo.name}
                </h2>
                <p className="text-xl text-muted-foreground font-light tracking-wide">
                  {photographerInfo.tagline}
                </p>
              </div>

              <Separator />

              {/* Biography */}
              <div className="space-y-4">
                {photographerInfo.biography.split('\n\n').map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-base md:text-lg font-light leading-relaxed text-muted-foreground"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Contact Info */}
              <div className="pt-4 space-y-2">
                <div className="text-sm font-light tracking-wide">
                  <span className="text-muted-foreground">Email: </span>
                  <a
                    href={`mailto:${photographerInfo.email}`}
                    className="text-foreground hover:text-muted-foreground transition-colors"
                  >
                    {photographerInfo.email}
                  </a>
                </div>
                <div className="text-sm font-light tracking-wide">
                  <span className="text-muted-foreground">Location: </span>
                  <span className="text-foreground">{photographerInfo.location}</span>
                </div>
              </div>

              {/* Highlighted Resume CTA */}
              {photographerInfo.resumeUrl && (
                <div className="pt-6">
                  <a
                    href={photographerInfo.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex"
                  >
                    <Button variant="default" size="lg" className="gap-2">
                      <FileText className="size-5" />
                      Download Resume
                    </Button>
                  </a>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-16 md:py-24 px-6 lg:px-8 border-t border-border bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-light tracking-wide mb-12"
            initial={{ opacity: 0.8, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Education
          </motion.h2>
          <div className="space-y-8">
            {education.map((item, index) => (
              <motion.div
                key={item.id}
                className="flex flex-wrap items-start gap-4 border-b border-border pb-8 last:border-0 last:pb-0"
                initial={{ opacity: 0.8, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                {item.logoUrl && (
                  <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-md overflow-hidden bg-background border border-border flex items-center justify-center">
                    <img
                      src={item.logoUrl}
                      alt=""
                      className="w-full h-full object-contain p-1"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                )}
                <div className="min-w-0 flex-1 space-y-1">
                  <h3 className="text-xl font-medium tracking-wide text-foreground">
                    {item.degree}
                  </h3>
                  <p className="text-muted-foreground font-light">{item.institution}</p>
                  <p className="text-sm text-muted-foreground/80">{item.location}</p>
                  <p className="text-sm text-muted-foreground/80">{item.duration}</p>
                  <p className="text-sm font-medium text-foreground/90">{item.grade}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research & Publications */}
      <section className="py-16 md:py-24 px-6 lg:px-8 border-t border-border bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-light tracking-wide mb-12"
            initial={{ opacity: 0.8, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Research & Publications
          </motion.h2>
          <div className="space-y-10">
            {research.map((item, index) => (
              <motion.div
                key={item.id}
                className="border border-border rounded-sm p-6 md:p-8 bg-background"
                initial={{ opacity: 0.8, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="space-y-2 mb-4">
                  <h3 className="text-xl font-medium tracking-wide text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.journal}</p>
                  <p className="text-sm text-muted-foreground/80">{item.date}</p>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-muted-foreground font-light leading-relaxed mb-4">
                  {item.description}
                </p>
                {item.paperUrl && (
                  <a
                    href={item.paperUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-light text-foreground hover:text-muted-foreground"
                  >
                    <ExternalLink className="size-4" />
                    View Paper
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Development */}
      <section className="py-16 md:py-24 px-6 lg:px-8 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-light tracking-wide mb-12"
            initial={{ opacity: 0.8, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Professional Development
          </motion.h2>
          <div className="space-y-8">
            {professionalDevelopment.map((item, index) => (
              <motion.div
                key={item.id}
                className="border-b border-border pb-8 last:border-0 last:pb-0"
                initial={{ opacity: 0.8, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="flex flex-wrap items-start gap-4 mb-3">
                  {item.logoUrl && (
                    <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-md overflow-hidden bg-muted border border-border flex items-center justify-center">
                      <img
                        src={item.logoUrl}
                        alt=""
                        className="w-full h-full object-contain p-1"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>
                  )}
                  <div className="space-y-1 min-w-0 flex-1">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="text-xl font-medium tracking-wide text-foreground">
                        {item.title}
                      </h3>
                      <span className="text-sm text-muted-foreground">{item.date}</span>
                    </div>
                    <p className="text-muted-foreground font-light">{item.organization}</p>
                  </div>
                </div>
                <ul className="space-y-2 list-disc list-inside text-muted-foreground font-light leading-relaxed mb-3">
                  {item.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
                {item.certificateUrl && (
                  <a
                    href={item.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-light text-foreground hover:text-muted-foreground"
                  >
                    <ExternalLink className="size-4" />
                    Certificate
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
