import type { Experience } from '../types/resume';

interface ExperienceEntryProps {
  entry: Experience;
}

export function ExperienceEntry({ entry }: ExperienceEntryProps) {
  return (
    <article className="border-t border-line pt-10 first:border-t-0 first:pt-0">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
        <h3 className="font-serif text-2xl text-paper sm:text-[1.75rem]">{entry.role}</h3>
        <p className="shrink-0 font-mono text-sm text-muted">{entry.period}</p>
      </div>
      <p className="mt-2 text-lg text-teal">{entry.organisation}</p>

      {entry.highlights &&
      <dl className="mt-8 grid grid-cols-2 gap-y-6 border-y border-line py-6 lg:grid-cols-4">
          {entry.highlights.map((h) =>
        <div key={h.label} className="pr-4">
              <dt className="sr-only">{h.label}</dt>
              <dd>
                <span className="block font-serif text-3xl text-paper">{h.value}</span>
                <span className="mt-1 block text-sm leading-snug text-muted">{h.label}</span>
              </dd>
            </div>
        )}
        </dl>
      }

      <ul className="mt-8 grid gap-x-10 gap-y-3 md:grid-cols-2">
        {entry.responsibilities.map((item) =>
        <li key={item} className="flex gap-4 leading-relaxed text-paper/85">
            <span aria-hidden="true" className="mt-3 h-px w-4 shrink-0 bg-teal" />
            {item}
          </li>
        )}
      </ul>
    </article>);

}