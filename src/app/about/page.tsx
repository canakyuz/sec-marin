'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useContent } from '@/app/hooks/useContent'
import { PageHeader } from '../components/PageHeader'
import Section from '../components/Section'
import { aboutData } from '@/data/about-data'
import { Parallax } from '../components/Parallax'
import { WavePattern } from '../components/patterns/WavePattern'
import { SpiralPattern } from '../components/patterns/SpiralPattern'
import { FishPattern } from '../components/patterns/FishPattern'

export default function AboutPage() {
  const content = useContent()

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="about-page">
      <PageHeader 
        title={content.about.title}
        subtitle={content.about.description}
      />

      <Section className="relative overflow-hidden">
        <Parallax speed={-0.2}>
          <div className="absolute inset-0 opacity-10">
            <WavePattern />
          </div>
        </Parallax>
        <div className="relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">{aboutData.sections[0].title}</h2>
              {aboutData.sections[0].content.map((paragraph, index) => (
                <p key={index} className="text-gray-600 mb-4">{paragraph}</p>
              ))}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src={aboutData.heroImage}
                alt="Sec Marin Üretim Tesisi"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </Section>

      <Section className="bg-gray-50 relative overflow-hidden">
        <Parallax speed={0.2}>
          <div className="absolute inset-0 opacity-5">
            <SpiralPattern />
          </div>
        </Parallax>
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-primary">Misyon ve Vizyonumuz</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {aboutData.sections.slice(1, 3).map((section, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-2xl font-semibold text-primary mb-4">{section.title}</h3>
                {section.content.map((paragraph, pIndex) => (
                  <p key={pIndex} className="text-gray-600 mb-2">{paragraph}</p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-primary">{aboutData.sections[3].title}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {aboutData.sections[3].content.map((value, index) => (
            <motion.div
              key={index}
              {...fadeInUp}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold text-primary mb-4">{value.split(':')[0]}</h3>
              <p className="text-gray-600">{value.split(':')[1]}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section className="bg-gray-50 relative overflow-hidden">
        <Parallax speed={-0.1}>
          <div className="absolute inset-0 opacity-10">
            <FishPattern />
          </div>
        </Parallax>
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-primary">{aboutData.sections[4].title}</h2>
          <p className="text-center text-gray-600 mb-8">{aboutData.sections[4].content[0]}</p>
          <div className="grid md:grid-cols-3 gap-8">
            {aboutData.sections[4].content.slice(1).map((step, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-semibold text-primary mb-4">{step.split(':')[0]}</h3>
                <p className="text-gray-600">{step.split(':')[1]}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  )
}

