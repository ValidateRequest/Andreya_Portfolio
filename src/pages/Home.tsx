import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRightIcon } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { DotPattern } from '../components/DotPattern';
import { SocialLinks } from '../components/SocialLinks';
import { Reveal } from '../components/Reveal';
import { profile } from '../data/profile';
import { exploreLinks } from '../data/navigation';
import { buttonClasses } from '../utils/button';

const ease = [0.23, 1, 0.32, 1] as const;
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } }
};
const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3, ease } }
};

export function Home() {
  const reduce = useReducedMotion();

  return (
    <PageTransition>
      <section className="relative flex min-h-[100svh] flex-col overflow-hidden" aria-labelledby="hero-title">
        <img
          src={profile.heroImage}
          alt=""
          className="absolute inset-0 h-full w-full object-cover" />
        
        <div aria-hidden="true" className="absolute inset-0 bg-ink/60" />
        <DotPattern className="absolute left-0 top-0 hidden opacity-80 sm:block" />

        <div className="relative flex flex-1 items-center justify-center px-6 pb-10 pt-28 text-center">
          <motion.div
            variants={container}
            initial={reduce ? false : 'hidden'}
            animate="show"
            className="max-w-4xl">
            
            <motion.h1
              id="hero-title"
              variants={item}
              className="font-serif text-[3.25rem] leading-[1.05] text-paper sm:text-7xl lg:text-[6.5rem]">
              
              Hi, I’m <span className="text-teal">Karthy.</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 font-mono text-sm uppercase tracking-[0.16em] text-paper sm:text-base">
              
              IT Support Specialist <span className="mx-2 text-teal" aria-hidden="true">|</span>
              <span className="sr-only">and</span> Data Analyst
            </motion.p>

            <motion.p
              variants={item}
              className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-paper/80 sm:text-lg">
              
              I support people, systems and data — solving technical problems, improving IT
              operations, and turning information into useful insights.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              
              <Link to="/projects" className={buttonClasses('primary', 'w-full sm:w-auto')}>
                View My Work
              </Link>
              <Link to="/contact" className={buttonClasses('outline', 'w-full sm:w-auto')}>
                Get In Touch
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.6, ease }}
          className="relative mx-auto flex w-full max-w-7xl items-end justify-between gap-6 px-6 pb-8 lg:px-10">
          
          <div className="font-mono text-xs leading-relaxed sm:text-[13px]">
            <p className="text-paper">Let’s work together</p>
            <a
              href={`mailto:${profile.email}`}
              className="block text-teal transition-colors duration-150 hover:text-teal-light">
              
              {profile.email}
            </a>
            <a href={profile.phoneHref} className="block text-paper/80 hover:text-paper">
              {profile.phone}
            </a>
          </div>
          <SocialLinks className="-mr-3" />
        </motion.div>
      </section>

      <section className="border-t border-line bg-ink py-24 lg:py-32" aria-labelledby="currently-title">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-12 lg:px-10">
          <Reveal className="lg:col-span-6">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-teal">Currently</p>
            <h2
              id="currently-title"
              className="mt-6 font-serif text-3xl leading-snug text-paper sm:text-4xl">
              
              Assistant IT Officer at the National Biotechnology Authority, supporting 100+ users
              across systems, networks and business applications.
            </h2>
            <p className="mt-6 max-w-lg leading-relaxed text-muted">
              Based in {profile.location}. My work sits between hands-on IT support, systems
              administration and data — keeping things running and making information useful.
            </p>
          </Reveal>

          <Reveal className="lg:col-span-5 lg:col-start-8" delay={0.08}>
            <nav aria-label="Explore">
              <ul className="border-t border-line">
                {exploreLinks.map((link) =>
                <li key={link.to}>
                    <Link
                    to={link.to}
                    className="group flex items-center justify-between gap-6 border-b border-line py-6">
                    
                      <span>
                        <span className="block font-serif text-2xl text-paper transition-colors duration-150 group-hover:text-teal-light">
                          {link.label}
                        </span>
                        <span className="mt-1 block text-sm text-muted">{link.description}</span>
                      </span>
                      <ArrowUpRightIcon
                      aria-hidden="true"
                      className="h-5 w-5 shrink-0 text-muted transition-[color,transform] duration-200 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-teal" />
                    
                    </Link>
                  </li>
                )}
              </ul>
            </nav>
          </Reveal>
        </div>
      </section>
    </PageTransition>);

}