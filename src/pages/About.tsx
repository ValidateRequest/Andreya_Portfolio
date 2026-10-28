import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { PageHeader } from '../components/PageHeader';
import { Reveal } from '../components/Reveal';
import { facts, services, strengths } from '../data/about';
import { profile } from '../data/profile';
import { useSeo } from '../hooks/useSeo';

export function About() {
  useSeo(
    'About | Karthy Andreya',
    'Learn about Karthy Andreya — IT Support Specialist, Data Analyst, and Virtual Assistant with hands-on technical and operational expertise.',

  );

  return (
    <PageTransition>
      <PageHeader title="About Me" />


      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10 lg:pb-32">
        {/* About content: text on the left, profile image on the right */}
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-7">
            <p className="font-serif text-2xl leading-relaxed text-espresso sm:text-[1.75rem]">
              I’m an IT Support Specialist, Data Analyst, and Virtual Assistant with hands-on experience
              supporting users, remote workflows, business applications, systems, and day-to-day operations.
            </p>

            <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted">
              <p>
                Currently, I look after more than 100 users while actively providing tech-enabled virtual
                assistance. On any given week that can mean managing busy schedules and inboxes, sorting
                out user access, tackling helpdesk requests, or organizing workflows so teams can focus
                on what matters most.
              </p>

              <p>
                What sets me apart as a Virtual Assistant is my strong technical foundation. Having a
                background in IT support and systems administration means I don’t just handle administrative
                tasks like calendar scheduling and email correspondence — I also troubleshoot software
                glitches, manage Google Workspace and Microsoft 365, configure digital tools, and automate
                repetitive steps.
              </p>

              <p>
                On the data side, I enjoy taking messy spreadsheets and records in Excel, Google Sheets, or
                Power BI, cleaning them up, and turning them into clear, actionable summaries and dashboards.
              </p>
            </div>
          </Reveal>

          <Reveal className="space-y-8 lg:col-span-5" delay={0.08}>
            {/* Profile image */}
            <div className="relative mx-auto max-w-md overflow-hidden rounded-2xl border border-line bg-white p-3 shadow-md lg:max-w-none">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-beige-soft">
                <img
                  src={profile.portraitImage}
                  alt={`Portrait of ${profile.name}`}
                  className="h-full w-full object-cover object-top transition-transform duration-500 ease-out hover:scale-105"
                  width={480}
                  height={600}
                />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-espresso/85 via-espresso/40 to-transparent p-6 text-white">
                  <p className="font-serif text-xl font-medium text-white">
                    {profile.name}
                  </p>
                  <p className="mt-1 font-mono text-xs uppercase tracking-[0.14em] text-beige">
                    {profile.title}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Full-width landscape Quick Facts card */}
        <Reveal className="mt-10 lg:mt-12" delay={0.12}>
          <div className="rounded-2xl border border-line bg-white p-6 shadow-sm sm:p-8 lg:p-9">
            <h3 className="mb-6 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-taupe">
              Quick Facts
            </h3>

            <dl className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="border-b border-line pb-4 last:border-b-0 sm:last:border-b lg:border-b-0 lg:border-r lg:pb-0 lg:pr-6 lg:last:border-r-0"
                >
                  <dt className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
                    {fact.label}
                  </dt>

                  <dd className="mt-2 font-medium leading-snug text-espresso">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </section>


      <section className="border-y border-line bg-beige py-24 lg:py-28" aria-labelledby="strengths-title">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-12 lg:px-10">
          <Reveal className="lg:col-span-4">
            <h2 id="strengths-title" className="font-serif text-3xl text-espresso sm:text-4xl">
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
                  className="flex items-center gap-4 border-b border-line py-4 text-lg text-espresso">
                  <span aria-hidden="true" className="h-px w-5 shrink-0 bg-taupe" />
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
            <h2 id="what-i-do-title" className="font-serif text-3xl text-espresso sm:text-4xl">
              What I do
            </h2>
          </Reveal>

          <ul className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <li key={service.title} className="bg-white shadow-sm">
                  <Reveal delay={Math.min(i * 0.04, 0.2)} className="flex h-full flex-col p-8 lg:p-10">
                    <Icon aria-hidden="true" className="h-6 w-6 text-taupe" strokeWidth={1.5} />
                    <h3 className="mt-8 font-serif text-xl text-espresso">{service.title}</h3>
                    <p className="mt-3 leading-relaxed text-muted">{service.description}</p>
                  </Reveal>
                </li>);
            })}
          </ul>

          <Reveal>
            <Link
              to="/resume"
              className="group mt-14 inline-flex items-center gap-3 font-mono text-sm uppercase tracking-[0.14em] text-taupe transition-colors duration-150 hover:text-taupe-deep">
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