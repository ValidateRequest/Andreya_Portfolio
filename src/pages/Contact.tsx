
import { MailIcon, PhoneIcon, ArrowUpRightIcon } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { Reveal } from '../components/Reveal';
import { BrandIcon } from '../components/BrandIcon';
import { ContactForm } from '../components/ContactForm';
import { profile } from '../data/profile';
import { useSeo } from '../hooks/useSeo';

export function Contact() {
  useSeo(
    'Contact | Karthy Andreya',
    'Get in touch with Karthy Andreya for technical support, virtual assistance, or project inquiries.',
    profile.logoImage
  );

  const details = [
    {
      label: 'Email',
      value: profile.email,
      href: `mailto:${profile.email}`,
      icon: <MailIcon aria-hidden="true" className="h-5 w-5" />,
      external: false
    },
    {
      label: 'Phone',
      value: profile.phone,
      href: profile.phoneHref,
      icon: <PhoneIcon aria-hidden="true" className="h-5 w-5" />,
      external: false
    },
    {
      label: 'LinkedIn',
      value: profile.linkedinLabel,
      href: profile.linkedinUrl,
      icon: <BrandIcon name="linkedin" />,
      external: true
    },
    {
      label: 'GitHub',
      value: profile.githubLabel,
      href: profile.githubUrl,
      icon: <BrandIcon name="github" />,
      external: true
    }
  ];

  return (
    <PageTransition>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 pb-20 pt-28 sm:pt-36 lg:pb-32 lg:pt-40">

        {/* Page introduction */}
        <Reveal>
          <div className="mb-10 max-w-2xl sm:mb-12 lg:mb-16">
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="block h-px w-12 bg-taupe"
              />
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-taupe">
                Get in touch
              </p>
            </div>

            <h1 className="mt-5 font-serif text-4xl leading-[1.08] text-espresso sm:text-6xl lg:text-7xl">
              Let’s Work{' '}
              <span className="text-taupe">Together</span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              Have a technical challenge, need reliable virtual assistance,
              or have a project in mind? I’d love to hear from you.
              Let’s talk about how I can help.
            </p>
          </div>
        </Reveal>

        {/* Contact information and form */}
        <div className="grid items-stretch gap-0 overflow-hidden rounded-2xl border border-line bg-white shadow-sm lg:grid-cols-12">

          {/* Left: Contact information */}
          <Reveal className="lg:col-span-5">
            <div className="relative flex h-full flex-col overflow-hidden bg-espresso p-6 text-white sm:p-10 lg:p-12">

              {/* Decorative accent */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full border border-white/10"
              />

              <div className="relative z-10">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-beige">
                  Contact information
                </p>

                <h2 className="mt-5 font-serif text-3xl leading-tight text-white sm:text-4xl">
                  Let’s make something happen.
                </h2>

                <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70 sm:text-base">
                  Whether you’re looking for technical support, virtual
                  assistance, or collaboration, I’m happy to connect.
                </p>
              </div>

              <ul className="relative z-10 mt-10 space-y-2 sm:mt-12">
                {details.map((d) => (
                  <li key={d.label}>
                    <a
                      href={d.href}
                      {...(
                        d.external
                          ? {
                            target: '_blank',
                            rel: 'noopener noreferrer'
                          }
                          : {}
                      )}
                      className="group flex min-w-0 items-center gap-4 rounded-xl border border-transparent p-3 transition-colors duration-200 hover:border-white/10 hover:bg-white/5 sm:gap-5 sm:p-4"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-beige transition-colors duration-200 group-hover:border-beige group-hover:bg-beige group-hover:text-espresso">
                        {d.icon}
                      </span>

                      <span className="min-w-0 flex-1">
                        <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-white/50 sm:text-xs">
                          {d.label}
                        </span>

                        <span className="mt-1 block break-words text-sm text-white transition-colors duration-200 group-hover:text-beige sm:text-base">
                          {d.value}
                        </span>
                      </span>

                      <ArrowUpRightIcon
                        aria-hidden="true"
                        className="h-4 w-4 shrink-0 text-white/30 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-beige"
                      />
                    </a>
                  </li>
                ))}
              </ul>

              <div className="relative z-10 mt-auto pt-10 sm:pt-14">
                <div className="h-px w-full bg-white/15" />

                <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.16em] text-white/50 sm:text-xs">
                  Harare, Zimbabwe
                </p>

                <p className="mt-2 font-serif text-lg text-beige">
                  Your goals. My support.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Right: Contact form */}
          <Reveal className="lg:col-span-7" delay={0.12}>
            <div className="h-full bg-white p-6 sm:p-10 lg:p-12">
              <div className="mb-8">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-taupe">
                  Send an inquiry
                </p>

                <h2 className="mt-3 font-serif text-3xl text-espresso sm:text-4xl">
                  Tell me what you need.
                </h2>

                <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted sm:text-base">
                  Share a few details about your inquiry, and I’ll have a
                  better understanding of how I can assist you.
                </p>
              </div>

              <ContactForm />
            </div>
          </Reveal>

        </div>
      </section>
    </PageTransition>
  );
}
