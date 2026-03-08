import { motion } from 'framer-motion';
import { experience } from '@/data/experience';
import { SEOHead } from '@/components/seo/SEOHead';
import { photographerInfo } from '@/data/photographer';

/**
 * Dedicated Experience page listing all professional experience
 */
export default function Experience() {
  return (
    <>
      <SEOHead
        title="Experience"
        description={`Professional experience of ${photographerInfo.name} — ${experience.length} roles in AI/ML, full stack, and data.`}
      />

      <div className="min-h-screen">
        <section className="py-24 md:py-32 px-6 lg:px-8 border-b border-border">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <motion.div
              initial={{ opacity: 0.8, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-wide mb-4">
                Experience
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground font-light tracking-wide">
                Roles and impact
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
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
                      <h2 className="text-xl font-medium tracking-wide text-foreground">
                        {item.title}
                      </h2>
                      <p className="text-muted-foreground font-light">{item.institution}</p>
                      <p className="text-sm text-muted-foreground/80">{item.duration}</p>
                    </div>
                  </div>
                  <ul className="space-y-2 list-disc list-inside text-muted-foreground font-light leading-relaxed">
                    {item.bullets.map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
