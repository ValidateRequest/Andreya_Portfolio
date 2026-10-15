import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageTransition } from '../components/PageTransition';
import { PageHeader } from '../components/PageHeader';
import { Reveal } from '../components/Reveal';
import { ProjectCard } from '../components/ProjectCard';
import { dataTools, projectCategories, projects } from '../data/projects';
import type { ProjectCategory } from '../types/project';

type Filter = 'All' | ProjectCategory;

export function Projects() {
  const [filter, setFilter] = useState<Filter>('All');
  const filters: Filter[] = ['All', ...projectCategories];
  const visible = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <PageTransition>
      <PageHeader
        title="Projects"
        lead="Practical work across data analytics, IT systems, databases and business intelligence. Full case studies are being written up and will be added here." />
      

      <section aria-labelledby="toolkit-title" className="border-y border-line bg-surface">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-10 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <h2 id="toolkit-title" className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
            Data toolkit
          </h2>
          <ul className="flex flex-wrap items-baseline gap-x-5 gap-y-2 font-serif text-3xl text-paper sm:text-4xl">
            {dataTools.map((tool, i) =>
            <li key={tool} className="flex items-baseline gap-5">
                {i > 0 &&
              <span aria-hidden="true" className="text-teal">
                    /
                  </span>
              }
                {tool}
              </li>
            )}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20" aria-label="Project list">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div role="group" aria-label="Filter projects by category" className="-mx-1 flex flex-wrap gap-1">
            {filters.map((f) => {
              const active = filter === f;
              return (
                <button
                  key={f}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setFilter(f)}
                  className={`whitespace-nowrap px-4 py-2 font-mono text-xs uppercase tracking-[0.12em] transition-colors duration-150 ${
                  active ? 'bg-teal text-ink' : 'text-paper/75 hover:bg-paper/5 hover:text-paper'}`
                  }>
                  
                  {f}
                </button>);

            })}
          </div>
          <p className="font-mono text-xs text-muted" aria-live="polite">
            {visible.length} {visible.length === 1 ? 'project' : 'projects'}
          </p>
        </div>

        {visible.length > 0 ?
        <ul className="mt-10 grid gap-6 md:grid-cols-2">
            {visible.map((project, i) =>
          <li key={project.id}>
                <Reveal delay={Math.min(i * 0.05, 0.2)} className="h-full">
                  <ProjectCard project={project} />
                </Reveal>
              </li>
          )}
          </ul> :

        <div className="mt-10 border border-dashed border-line px-6 py-16 text-center">
            <p className="font-serif text-2xl text-paper">Nothing here yet</p>
            <p className="mt-2 text-muted">Projects in this category will appear here soon.</p>
          </div>
        }

        <Reveal>
          <p className="mt-16 max-w-xl leading-relaxed text-muted">
            Interested in something I’ve worked on that isn’t listed yet?{' '}
            <Link to="/contact" className="text-teal underline-offset-4 hover:text-teal-light hover:underline">
              Ask me about it
            </Link>
            .
          </p>
        </Reveal>
      </section>
    </PageTransition>);

}