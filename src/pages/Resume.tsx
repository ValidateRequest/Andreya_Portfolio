import React from 'react';
import { Link } from 'react-router-dom';
import { DownloadIcon } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { PageHeader } from '../components/PageHeader';
import { Reveal } from '../components/Reveal';
import { ExperienceEntry } from '../components/ExperienceEntry';
import { certifications, education, experience } from '../data/resume';
import { profile } from '../data/profile';
import { buttonClasses } from '../utils/button';

export function Resume() {
  return (
    <PageTransition>
      <PageHeader
        title="Resume"
        lead="IT support, systems administration and data — the experience, education and certifications behind my work.">
        
        <div className="flex flex-col gap-3 sm:flex-row print:hidden">
          {profile.resumeUrl ?
          <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" className={buttonClasses('primary')}>
              <DownloadIcon aria-hidden="true" className="h-4 w-4" />
              Download Resume
            </a> :

          <button
            type="button"
            onClick={() => window.print()}
            className={buttonClasses('primary')}
            title="Opens your print dialog — choose “Save as PDF”">
            
              <DownloadIcon aria-hidden="true" className="h-4 w-4" />
              Download Resume
            </button>
          }
          <Link to="/contact" className={buttonClasses('outline')}>
            Get In Touch
          </Link>
        </div>
      </PageHeader>

      <div className="mx-auto max-w-7xl px-6 pb-24 lg:px-10 lg:pb-32">
        <ResumeSection title="Experience">
          <div className="space-y-12">
            {experience.map((entry) =>
            <Reveal key={entry.role}>
                <ExperienceEntry entry={entry} />
              </Reveal>
            )}
          </div>
        </ResumeSection>

        <ResumeSection title="Education">
          {education.map((item) =>
          <Reveal key={item.qualification}>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                <h3 className="max-w-2xl font-serif text-2xl leading-snug text-paper">
                  {item.qualification}
                </h3>
                <p className="shrink-0 font-mono text-sm text-muted">{item.period}</p>
              </div>
              <p className="mt-2 text-lg text-teal">{item.institution}</p>
              <p className="mt-3 text-paper/85">{item.result}</p>
            </Reveal>
          )}
        </ResumeSection>

        <ResumeSection title="Certifications">
          <ul className="border-t border-line">
            {certifications.map((cert) =>
            <li
              key={cert.name}
              className="flex flex-col gap-3 border-b border-line py-5 sm:flex-row sm:items-center sm:justify-between">
              
                <span className="text-lg text-paper">{cert.name}</span>
                <span className="flex items-center gap-4">
                  {cert.date && <span className="font-mono text-sm text-muted">{cert.date}</span>}
                  <span
                  className={`px-3 py-1 font-mono text-xs uppercase tracking-[0.12em] ${
                  cert.status === 'Completed' ?
                  'bg-teal/15 text-teal-light' :
                  'border border-line text-muted'}`
                  }>
                  
                    {cert.status}
                  </span>
                </span>
              </li>
            )}
          </ul>
        </ResumeSection>
      </div>
    </PageTransition>);

}

interface ResumeSectionProps {
  title: string;
  children: React.ReactNode;
}

function ResumeSection({ title, children }: ResumeSectionProps) {
  const id = `resume-${title.toLowerCase()}`;
  return (
    <section
      aria-labelledby={id}
      className="grid gap-8 border-t border-line py-14 lg:grid-cols-12 lg:gap-10 lg:py-20">
      
      <h2
        id={id}
        className="font-mono text-sm uppercase tracking-[0.16em] text-teal lg:col-span-3">
        
        {title}
      </h2>
      <div className="lg:col-span-9">{children}</div>
    </section>);

}