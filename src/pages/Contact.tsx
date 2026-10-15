import { MailIcon, PhoneIcon } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { Reveal } from '../components/Reveal';
import { BrandIcon } from '../components/BrandIcon';
import { ContactForm } from '../components/ContactForm';
import { profile } from '../data/profile';

export function Contact() {
  const details = [
  {
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: <MailIcon aria-hidden="true" className="h-4 w-4" />,
    external: false
  },
  {
    label: 'Phone',
    value: profile.phone,
    href: profile.phoneHref,
    icon: <PhoneIcon aria-hidden="true" className="h-4 w-4" />,
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
  }];


  return (
    <PageTransition>
      <section className="mx-auto grid max-w-7xl gap-14 px-6 pb-24 pt-36 lg:grid-cols-12 lg:gap-10 lg:px-10 lg:pb-32 lg:pt-44">
        <div className="lg:col-span-5">
          <Reveal>
            <span aria-hidden="true" className="block h-px w-12 bg-teal" />
            <h1 className="mt-8 font-serif text-5xl leading-[1.05] text-paper sm:text-6xl">
              Let’s Work <span className="text-teal">Together</span>
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
              Have a technical challenge, project, or opportunity? I would love to hear from you.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <ul className="mt-12 border-t border-line">
              {details.map((d) =>
              <li key={d.label} className="border-b border-line">
                  <a
                  href={d.href}
                  {...d.external ? { target: '_blank', rel: 'noopener noreferrer' } : {}}
                  className="group flex items-center gap-5 py-5">
                  
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-line text-teal transition-colors duration-150 group-hover:border-teal">
                      {d.icon}
                    </span>
                    <span className="min-w-0">
                      <span className="block font-mono text-xs uppercase tracking-[0.14em] text-muted">
                        {d.label}
                      </span>
                      <span className="mt-0.5 block break-words text-paper transition-colors duration-150 group-hover:text-teal-light">
                        {d.value}
                      </span>
                    </span>
                  </a>
                </li>
              )}
            </ul>
          </Reveal>
        </div>

        <Reveal className="lg:col-span-6 lg:col-start-7" delay={0.12}>
          <ContactForm />
        </Reveal>
      </section>
    </PageTransition>);

}