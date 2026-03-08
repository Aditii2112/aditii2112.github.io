import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { photographerInfo } from '@/data/photographer';
import { getFeaturedProjects } from '@/data/projects';
import { education } from '@/data/education';
import { experience } from '@/data/experience';
import { skillCategories } from '@/data/skills';
import { research } from '@/data/research';
import { professionalDevelopment } from '@/data/professionalDevelopment';
import { ProjectCard } from '@/components/portfolio/ProjectCard';
import { ScrollIndicator } from '@/components/ui/ScrollIndicator';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SEOHead } from '@/components/seo/SEOHead';
import { ArrowRight, Github, Linkedin, FileText, Mail, MapPin, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { ContactForm } from '@/components/forms/ContactForm';

const MAPMYVISITORS_SCRIPT_URL =
  'https://mapmyvisitors.com/map.js?cl=0e1633&w=a&t=n&d=com1W8U51qThmXjGaivgzobZsac2agr2A12iWlaAm_k&co=0b4975&ct=cdd4d9&cmo=3acc3a&cmn=ff5353';

/**
 * Single-page homepage: Hero, About, Education, Experience, Projects, Contact.
 * Nav bar anchor links scroll to each section.
 */
export default function Home() {
  const featuredProjects = getFeaturedProjects();
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Scroll to hash when landing on /#section (e.g. from nav on /projects)
  useEffect(() => {
    const hash = (location.hash || window.location.hash).slice(1);
    if (!hash) return;
    const el = document.getElementById(hash);
    if (el) {
      const t = setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
      return () => clearTimeout(t);
    }
  }, [location.pathname, location.hash]);

  // Map script only in Contact section
  useEffect(() => {
    const container = mapContainerRef.current;
    if (!container) return;
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.id = 'mapmyvisitors';
    script.src = MAPMYVISITORS_SCRIPT_URL;
    script.async = true;
    container.appendChild(script);
    return () => {
      script.remove();
      const iframe = document.querySelector('iframe[src*="mapmyvisitors"]');
      if (iframe) iframe.remove();
      const widget = document.getElementById('mmv-map');
      if (widget) widget.remove();
    };
  }, []);

  return (
    <>
      <SEOHead />

      <div className="min-h-screen">
        {/* Hero — dark AI & Automation background */}
        <section id="home" className="relative h-screen w-full overflow-hidden bg-black">
          <div className="absolute inset-0">
            <img
              src="/hero-bg-dark.png"
              alt=""
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/75" />
          </div>
          <div className="relative h-full flex flex-col items-center justify-center px-6">
            <motion.div
              className="text-center space-y-6 max-w-4xl w-full"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <div className="rounded-2xl bg-black/60 backdrop-blur-md border border-white/10 px-8 py-10 md:px-12 md:py-14 max-w-3xl mx-auto space-y-6">
                <motion.h1
                className="text-6xl md:text-8xl lg:text-9xl font-extralight tracking-widest text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                {photographerInfo.name.toUpperCase()}
              </motion.h1>
              <motion.p
                className="text-xl md:text-2xl font-light tracking-wide text-white/90"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                {photographerInfo.tagline}
              </motion.p>
              <motion.p
                className="text-base md:text-lg font-light leading-relaxed text-white/80 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                {photographerInfo.heroIntroduction}
              </motion.p>
              <motion.div
                className="flex flex-wrap items-center justify-center gap-4 pt-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                {photographerInfo.socialLinks.github && (
                  <a
                    href={photographerInfo.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center size-11 rounded-full border border-white/40 text-white hover:bg-white/10 transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="size-5" />
                  </a>
                )}
                {photographerInfo.socialLinks.linkedin && (
                  <a
                    href={photographerInfo.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center size-11 rounded-full border border-white/40 text-white hover:bg-white/10 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="size-5" />
                  </a>
                )}
                {photographerInfo.resumeUrl && (
                  <a
                    href={photographerInfo.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-white/40 text-white hover:bg-white/10 transition-colors text-sm font-light"
                    aria-label="Resume"
                  >
                    <FileText className="size-4" />
                    Resume
                  </a>
                )}
              </motion.div>
              </div>
            </motion.div>
            <motion.div
              className="absolute bottom-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <ScrollIndicator />
            </motion.div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-24 md:py-32 px-6 lg:px-8 bg-background border-t border-border">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-light tracking-wide mb-4">About Me</h2>
                <p className="text-lg text-foreground font-light">{photographerInfo.tagline}</p>
              </div>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
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
              </motion.div>
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0.8, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <h3 className="text-2xl font-light tracking-wide">{photographerInfo.name}</h3>
                <div className="space-y-4">
                  {photographerInfo.biography.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-base md:text-lg font-light leading-relaxed text-foreground">
                      {paragraph}
                    </p>
                  ))}
                </div>
                <Separator />
                <div className="space-y-2">
                  <div className="text-base font-light tracking-wide">
                    <span className="text-foreground">Email: </span>
                    <a href={`mailto:${photographerInfo.email}`} className="text-foreground hover:opacity-80 transition-colors">
                      {photographerInfo.email}
                    </a>
                  </div>
                  <div className="text-base font-light tracking-wide">
                    <span className="text-foreground">Location: </span>
                    <span className="text-foreground">{photographerInfo.location}</span>
                  </div>
                </div>
                {photographerInfo.resumeUrl && (
                  <a href={photographerInfo.resumeUrl} target="_blank" rel="noopener noreferrer" className="inline-flex">
                    <Button variant="default" size="lg" className="gap-2">
                      <FileText className="size-5" />
                      Download Resume
                    </Button>
                  </a>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Education */}
        <section id="education" className="py-24 md:py-32 px-6 lg:px-8 border-t border-border bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-light tracking-wide mb-12">Education</h2>
            </ScrollReveal>
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
                    <h3 className="text-2xl font-medium tracking-wide text-foreground">{item.degree}</h3>
                    <p className="text-lg text-foreground font-light">{item.institution}</p>
                    <p className="text-base text-foreground/80">{item.location}</p>
                    <p className="text-base text-foreground/80">{item.duration}</p>
                    <p className="text-base font-medium text-foreground/90">{item.grade}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="py-24 md:py-32 px-6 lg:px-8 border-t border-border">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-light tracking-wide mb-12">Experience</h2>
            </ScrollReveal>
            <div className="space-y-10">
              {experience.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="border-b border-border pb-10 last:border-0 last:pb-0"
                  initial={{ opacity: 0.8, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="flex flex-wrap items-start gap-4 mb-4">
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
                      <h3 className="text-2xl font-medium tracking-wide text-foreground">{item.title}</h3>
                      <p className="text-lg text-foreground font-light">{item.institution}</p>
                      <p className="text-base text-foreground/80">{item.duration}</p>
                    </div>
                  </div>
                  <ul className="space-y-2 list-disc list-inside text-base md:text-lg text-foreground font-light leading-relaxed">
                    {item.bullets.map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-24 md:py-32 border-t border-border">
          <ScrollReveal>
            <div className="text-center mb-16 space-y-4 px-6">
              <h2 className="text-4xl md:text-5xl font-light tracking-wide">Projects</h2>
              <p className="text-lg text-foreground font-light tracking-wide">A selection of recent work</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                aspectRatio="landscape"
                showCategory={true}
                index={index}
              />
            ))}
          </div>
          <ScrollReveal delay={0.4}>
            <div className="flex justify-center mt-16 px-6">
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 text-lg font-light tracking-wide text-foreground hover:opacity-80 transition-colors"
              >
                <span>View All Projects</span>
                <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>
        </section>

        {/* Research & Publications */}
        <section className="py-16 md:py-24 px-6 lg:px-8 border-t border-border bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-light tracking-wide mb-12">Research & Publications</h2>
            </ScrollReveal>
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
                    <h3 className="text-2xl font-medium tracking-wide text-foreground">{item.title}</h3>
                    <p className="text-base text-foreground">{item.journal}</p>
                    <p className="text-base text-foreground/80">{item.date}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag) => (
                      <span key={tag} className="text-sm px-2.5 py-1 rounded bg-muted text-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-base md:text-lg text-foreground font-light leading-relaxed mb-4">{item.description}</p>
                  {item.paperUrl && (
                    <a
                      href={item.paperUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-base font-light text-foreground hover:opacity-80"
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
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-light tracking-wide mb-12">Professional Development</h2>
            </ScrollReveal>
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
                        <h3 className="text-2xl font-medium tracking-wide text-foreground">{item.title}</h3>
                        <span className="text-base text-foreground">{item.date}</span>
                      </div>
                      <p className="text-lg text-foreground font-light">{item.organization}</p>
                    </div>
                  </div>
                  <ul className="space-y-2 list-disc list-inside text-base md:text-lg text-foreground font-light leading-relaxed mb-3">
                    {item.bullets.map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))}
                  </ul>
                  {item.certificateUrl && (
                    <a
                      href={item.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-base font-light text-foreground hover:opacity-80"
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

        {/* Skills */}
        <section id="skills" className="py-24 md:py-32 px-6 lg:px-8 border-t border-border">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-light tracking-wide mb-12">Skills</h2>
              <p className="text-lg text-foreground font-light mb-12 max-w-2xl">
                Technologies and tools I work with—from programming languages and frameworks to ML and data analytics.
              </p>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillCategories.map((category, index) => (
                <motion.div
                  key={category.id}
                  className="rounded-lg border border-border bg-background p-6 shadow-sm"
                  initial={{ opacity: 0.8, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <h3 className="text-xl font-medium tracking-wide text-foreground mb-4">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className="inline-flex items-center gap-1.5 text-base px-3 py-2 rounded-md bg-muted text-foreground font-light hover:bg-muted/80 hover:opacity-90 transition-colors"
                      >
                        {(skill.iconUrl || skill.icon) ? (
                          <>
                            <img
                              src={skill.iconUrl ?? `https://cdn.simpleicons.org/${skill.icon}`}
                              alt=""
                              className="size-5 flex-shrink-0"
                              onError={(e) => {
                                e.currentTarget.style.display = 'none';
                              }}
                            />
                            <span>{skill.name}</span>
                          </>
                        ) : (
                          <span>{skill.name}</span>
                        )}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-24 md:py-32 px-6 lg:px-8 border-t border-border bg-muted/30">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-light tracking-wide mb-4">Get in Touch</h2>
                <p className="text-lg text-foreground font-light">Let's discuss your next project</p>
              </div>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 mb-16">
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0.8, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="text-2xl font-light tracking-wide">Send a Message</h3>
                <p className="text-base md:text-lg text-foreground font-light">
                  Fill out the form below and I'll get back to you within 24-48 hours. {photographerInfo.availability}
                </p>
                <ContactForm />
              </motion.div>
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0.8, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <h3 className="text-2xl font-light tracking-wide">Contact Information</h3>
                <p className="text-base md:text-lg text-foreground font-light">Prefer to reach out directly? Here's how you can contact me.</p>
                <Separator />
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-sm bg-accent">
                      <Mail className="size-5 text-foreground" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-base font-light tracking-wide text-foreground">Email</p>
                      <a
                        href={`mailto:${photographerInfo.email}`}
                        className="text-base md:text-lg font-light hover:opacity-80 transition-colors"
                      >
                        {photographerInfo.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-sm bg-accent">
                      <MapPin className="size-5 text-foreground" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-base font-light tracking-wide text-foreground">Location</p>
                      <p className="text-base md:text-lg font-light">{photographerInfo.location}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            <ScrollReveal>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-light tracking-wide mb-2">Visitor Map</h3>
                <p className="text-base md:text-lg text-foreground font-light">Where visitors are from</p>
              </div>
              <div ref={mapContainerRef} id="mapmyvisitors-container" className="min-h-[400px] w-full rounded-sm overflow-hidden bg-muted" />
            </ScrollReveal>
          </div>
        </section>

        <div className="h-16" />
      </div>
    </>
  );
}
