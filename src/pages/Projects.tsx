
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowDownRight,
  ArrowUpRight,
  FolderKanban,
  Layers3
} from 'lucide-react';

import { PageTransition } from '../components/PageTransition';
import { Reveal } from '../components/Reveal';
import { ProjectCard } from '../components/ProjectCard';
import { dataTools, projectCategories, projects } from '../data/projects';
import type { ProjectCategory } from '../types/project';
import { useSeo } from '../hooks/useSeo';

type Filter = 'All' | ProjectCategory;

const toolIcons: Record<string, { slug: string; color: string }> = {
  'Microsoft Excel': { slug: 'microsoftexcel', color: '#217346' },
  Excel: { slug: 'microsoftexcel', color: '#217346' },
  'Power BI': { slug: 'powerbi', color: '#F2C811' },
  'Microsoft Power BI': { slug: 'powerbi', color: '#F2C811' },
  'Google Sheets': { slug: 'googlesheets', color: '#34A853' },
  Sheets: { slug: 'googlesheets', color: '#34A853' },
  'Google Workspace': { slug: 'googleworkspace', color: '#4285F4' },
  'Microsoft 365': { slug: 'microsoft365', color: '#D83B01' },
  SQL: { slug: 'postgresql', color: '#4169E1' },
  PostgreSQL: { slug: 'postgresql', color: '#4169E1' },
  MySQL: { slug: 'mysql', color: '#4479A1' },
  JavaScript: { slug: 'javascript', color: '#F7DF1E' },
  TypeScript: { slug: 'typescript', color: '#3178C6' },
  React: { slug: 'react', color: '#61DAFB' },
  'React.js': { slug: 'react', color: '#61DAFB' },
  'Tailwind CSS': { slug: 'tailwindcss', color: '#06B6D4' },
  HTML: { slug: 'html5', color: '#E34F26' },
  CSS: { slug: 'css3', color: '#1572B6' },
  GitHub: { slug: 'github', color: '#181717' },
  Python: { slug: 'python', color: '#3776AB' },
  WordPress: { slug: 'wordpress', color: '#21759B' },
  Gmail: { slug: 'gmail', color: '#EA4335' },
  Google: { slug: 'google', color: '#4285F4' },
  Canva: { slug: 'canva', color: '#00C4CC' }
};

function getToolIcon(tool: string) {
  const normalized = tool.trim();

  return (
    toolIcons[normalized] ??
    Object.entries(toolIcons).find(
      ([name]) => name.toLowerCase() === normalized.toLowerCase()
    )?.[1]
  );
}

export function Projects() {
  useSeo(
    'Projects | Karthy Andreya',
    'Practical work across virtual assistance, data analytics, IT systems, databases, and business intelligence by Karthy Andreya.'
  );

  const [filter, setFilter] = useState<Filter>('All');
  const filters: Filter[] = ['All', ...projectCategories];

  const visible =
    filter === 'All'
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <PageTransition>
      {/* Page introduction */}
      <section className="mx-auto max-w-7xl px-6 pb-14 pt-32 sm:pt-36 lg:px-10 lg:pb-20 lg:pt-44">
        <Reveal>
          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="h-px w-12 bg-taupe"
            />
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-taupe">
              Selected work
            </p>
          </div>

          <div className="mt-6 grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <h1 className="font-serif text-5xl leading-[1.05] text-espresso sm:text-6xl lg:text-7xl">
                Ideas into{' '}
                <span className="text-taupe">action.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
                A collection of practical work in data analytics, virtual
                assistance, IT systems, and digital solutions — built around
                solving problems and making everyday work easier.
              </p>
            </div>

            <div className="flex items-center gap-3 lg:col-span-4 lg:justify-end">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-line bg-beige/50 text-taupe">
                <FolderKanban aria-hidden="true" className="h-5 w-5" />
              </div>

              <div>
                <p className="font-serif text-2xl text-espresso">
                  {projects.length.toString().padStart(2, '0')}
                </p>
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                  Portfolio projects
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Software toolkit ribbon */}
      <section
        aria-labelledby="toolkit-title"
        className="border-y border-line bg-beige/50"
      >
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-10 lg:py-10">
          <Reveal>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-12">
              <div className="shrink-0 lg:w-44">
                <div className="flex items-center gap-2 text-taupe">
                  <Layers3 aria-hidden="true" className="h-4 w-4" />
                  <h2
                    id="toolkit-title"
                    className="font-mono text-xs font-semibold uppercase tracking-[0.16em]"
                  >
                    My toolkit
                  </h2>
                </div>

                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Tools I work with
                </p>
              </div>

              <div className="flex flex-1 flex-wrap gap-3">
                {dataTools.map((tool) => {
                  const icon = getToolIcon(tool);

                  return (
                    <div
                      key={tool}
                      title={tool}
                      className="group inline-flex min-h-12 items-center gap-2.5 rounded-xl border border-line bg-white px-3.5 py-2.5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-taupe/50 hover:shadow-md"
                    >
                      {icon ? (
                        <img
                          src={`https://cdn.simpleicons.org/${icon.slug}/${icon.color.replace('#', '')}`}
                          alt=""
                          aria-hidden="true"
                          loading="lazy"
                          className="h-5 w-5 shrink-0 object-contain"
                          onError={(event) => {
                            event.currentTarget.style.display = 'none';
                          }}
                        />
                      ) : (
                        <span
                          aria-hidden="true"
                          className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-beige text-[10px] font-semibold text-espresso"
                        >
                          {tool.slice(0, 1).toUpperCase()}
                        </span>
                      )}

                      <span className="text-sm font-medium text-espresso">
                        {tool}
                      </span>

                      <ArrowUpRight
                        aria-hidden="true"
                        className="h-3.5 w-3.5 text-muted/50 transition-colors group-hover:text-taupe"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Projects gallery */}
      <section
        className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20"
        aria-label="Project list"
      >
        <Reveal>
          <div className="flex flex-col gap-6 border-b border-line pb-7 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-taupe">
                Explore my work
              </p>

              <h2 className="mt-3 font-serif text-3xl text-espresso sm:text-4xl">
                Projects &amp; case studies
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
                Browse projects by area of focus to see the different ways I
                approach data, technology, and day-to-day business needs.
              </p>
            </div>

            <p
              className="shrink-0 font-mono text-xs text-muted"
              aria-live="polite"
            >
              {String(visible.length).padStart(2, '0')}{' '}
              {visible.length === 1 ? 'project' : 'projects'}
            </p>
          </div>
        </Reveal>

        {/* Category filters */}
        <div className="mt-7 flex flex-wrap items-center gap-2">
          {filters.map((category) => {
            const active = filter === category;

            return (
              <button
                key={category}
                type="button"
                aria-pressed={active}
                onClick={() => setFilter(category)}
                className={`rounded-full border px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.12em] transition-all duration-200 sm:text-xs ${active
                    ? 'border-espresso bg-espresso text-white shadow-sm'
                    : 'border-line bg-white text-espresso/75 hover:border-taupe hover:bg-beige/50 hover:text-espresso'
                  }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {visible.length > 0 ? (
          <ul className="mt-9 grid gap-6 md:grid-cols-2">
            {visible.map((project, index) => (
              <li key={project.id}>
                <Reveal
                  delay={Math.min(index * 0.05, 0.2)}
                  className="h-full"
                >
                  <ProjectCard project={project} />
                </Reveal>
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-9 rounded-2xl border border-dashed border-line bg-beige/20 px-6 py-16 text-center">
            <FolderKanban
              aria-hidden="true"
              className="mx-auto h-8 w-8 text-taupe"
            />
            <h3 className="mt-4 font-serif text-2xl text-espresso">
              More work is on the way
            </h3>
            <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted">
              Projects in this category will appear here as they are added to
              the portfolio.
            </p>
          </div>
        )}

        {/* Contact call to action */}
        <Reveal>
          <div className="mt-16 flex flex-col gap-5 rounded-2xl border border-line bg-beige/40 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-taupe">
                Have a project in mind?
              </p>

              <h3 className="mt-2 font-serif text-2xl text-espresso sm:text-3xl">
                Let’s talk about it.
              </h3>

              <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted">
                Get in touch to discuss technical support, virtual assistance,
                or a potential collaboration.
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-full bg-espresso px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-taupe-deep sm:self-auto"
            >
              Start a conversation
              <ArrowDownRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </section>
    </PageTransition>
  );
}
