import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { PageHeader } from '../components/PageHeader';
import { Reveal } from '../components/Reveal';
import { facts, services, strengths } from '../data/about';

export function About() {
  return (
    <PageTransition>
      <PageHeader title="About Me" />

      <section className="mx-auto grid max-w-7xl gap-14 px-6 pb-24 lg:grid-cols-12 lg:px-10 lg:pb-32">
        <Reveal className="lg:col-span-7">
          <p className="font-serif text-2xl leading-relaxed text-paper sm:text-[1.75rem]">
            I’m an IT Support Specialist with hands-on experience supporting users, ICT
            infrastructure, business applications, networks, hardware and Microsoft environments.
          </p>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted">
            <p>
              Right now I look after more than 100 users. On any given week that can mean a run of
              helpdesk tickets, sorting out someone’s access, checking on the network, or helping
              a business application behave the way people need it to.
            </p>
            <p>
              My work spans technical support, systems administration, infrastructure, business
              applications, user access, cybersecurity awareness, data analysis and ICT projects.
              The common thread is simple: find the real cause, fix it properly, and write it down
              so the next person doesn’t have to start from scratch.
            </p>
            <p>
              On the data side, I enjoy taking the information organisations already have and
              shaping it into something clear enough to make decisions with.
            </p>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-4 lg:col-start-9" delay={0.08}>
          <dl className="border-l border-teal pl-6">
            {facts.map((fact) =>
            <div key={fact.label} className="py-4 first:pt-0 last:pb-0">
                <dt className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
                  {fact.label}
                </dt>
                <dd className="mt-1.5 leading-snug text-paper">{fact.value}</dd>
              </div>
            )}
          </dl>
        </Reveal>
      </section>

      <section className="bg-surface py-24 lg:py-28" aria-labelledby="strengths-title">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-12 lg:px-10">
          <Reveal className="lg:col-span-4">
            <h2 id="strengths-title" className="font-serif text-3xl text-paper sm:text-4xl">
              Where I’m strongest
            </h2>
            <p className="mt-4 max-w-sm leading-relaxed text-muted">
              The things colleagues tend to come to me for.
            </p>
          </Reveal>
          <Reveal className="lg:col-span-7 lg:col-start-6" delay={0.06}>
            <ul className="grid gap-x-10 sm:grid-cols-2">
              {strengths.map((strength) =>
              <li
                key={strength}
                className="flex items-center gap-4 border-b border-line py-4 text-lg text-paper">
                
                  <span aria-hidden="true" className="h-px w-5 shrink-0 bg-teal" />
                  {strength}
                </li>
              )}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="py-24 lg:py-32" aria-labelledby="what-i-do-title">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <h2 id="what-i-do-title" className="font-serif text-3xl text-paper sm:text-4xl">
              What I do
            </h2>
          </Reveal>

          <ul className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <li key={service.title} className="bg-ink">
                  <Reveal delay={Math.min(i * 0.04, 0.2)} className="flex h-full flex-col p-8 lg:p-10">
                    <Icon aria-hidden="true" className="h-6 w-6 text-teal" strokeWidth={1.5} />
                    <h3 className="mt-8 font-serif text-xl text-paper">{service.title}</h3>
                    <p className="mt-3 leading-relaxed text-muted">{service.description}</p>
                  </Reveal>
                </li>);

            })}
          </ul>

          <Reveal>
            <Link
              to="/resume"
              className="group mt-14 inline-flex items-center gap-3 font-mono text-sm uppercase tracking-[0.14em] text-teal transition-colors duration-150 hover:text-teal-light">
              
              See the full resume
              <ArrowRightIcon
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
              
            </Link>
          </Reveal>
        </div>
      </section>
    </PageTransition>);

}