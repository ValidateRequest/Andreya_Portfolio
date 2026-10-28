import { useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { XIcon, ArrowUpRightIcon } from 'lucide-react';
import { SocialLinks } from './SocialLinks';
import { navItems } from '../data/navigation';
import { profile } from '../data/profile';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const reduce = useReducedMotion();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open &&
        <motion.div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
          className="fixed inset-0 z-50 flex flex-col bg-white text-espresso lg:hidden">
          <div className="flex h-20 items-center justify-between border-b border-line px-6">
            <Link
              to="/"
              onClick={onClose}
              className="group flex items-center gap-3"
              aria-label={`${profile.name} — home`}>
              <img
                src={profile.logoImage}
                alt={`${profile.name} logo`}
                className="h-10 w-auto max-w-[44px] object-contain transition-transform duration-200 group-hover:scale-105"
                width={40}
                height={40}
              />
            </Link>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="flex h-11 w-11 items-center justify-center border border-line bg-beige/60 text-espresso transition-colors duration-150 hover:bg-beige">
              <XIcon className="h-5 w-5" />
            </button>
          </div>

          <nav aria-label="Mobile" className="flex flex-1 flex-col justify-center px-6 py-4 overflow-y-auto">
            <ul className="space-y-2 sm:space-y-3">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.to}
                  initial={reduce ? false : { opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, delay: 0.04 + i * 0.04, ease: [0.23, 1, 0.32, 1] }}>
                  {item.external || item.to.startsWith('http') ? (
                    <a
                      href={item.to}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={onClose}
                      className="inline-flex items-center gap-2 py-1.5 font-serif text-2xl sm:text-3xl md:text-4xl leading-tight text-espresso hover:text-taupe transition-colors duration-150"
                    >
                      <span>{item.label}</span>
                      <ArrowUpRightIcon className="h-5 w-5 opacity-60" />
                    </a>
                  ) : (
                    <NavLink
                      to={item.to}
                      end={item.to === '/'}
                      onClick={onClose}
                      className={({ isActive }) =>
                        `block py-1.5 font-serif text-2xl sm:text-3xl md:text-4xl leading-tight transition-colors duration-150 ${isActive ? 'text-taupe' : 'text-espresso hover:text-taupe'
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  )}
                </motion.li>
              ))}
            </ul>
          </nav>

          <div className="flex items-end justify-between border-t border-line bg-beige/30 px-6 py-6">
            <div className="font-mono text-xs leading-relaxed">
              <a href={`mailto:${profile.email}`} className="block text-taupe font-medium hover:text-taupe-deep">
                {profile.email}
              </a>
              <a href={profile.phoneHref} className="block text-espresso/80 hover:text-espresso">
                {profile.phone}
              </a>
            </div>
            <SocialLinks className="-mr-3" />
          </div>
        </motion.div>
      }
    </AnimatePresence>);

}