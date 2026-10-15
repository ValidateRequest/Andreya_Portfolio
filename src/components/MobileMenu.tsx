import { useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { XIcon } from 'lucide-react';
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
        className="fixed inset-0 z-50 flex flex-col bg-ink lg:hidden">
        
          <div className="flex h-20 items-center justify-between px-6">
            <Link
              to="/"
              onClick={onClose}
              className="group flex items-center gap-3"
              aria-label={`${profile.name} — home`}>
              <div className="relative h-11 w-11 overflow-hidden rounded-full border-2 border-teal/40 bg-surface shadow-sm transition-all duration-200 group-hover:border-teal">
                <img
                  src={profile.avatarImage}
                  alt={profile.name}
                  className="h-full w-full object-cover object-top"
                  width={44}
                  height={44}
                />
              </div>
            </Link>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close menu"
            className="flex h-11 w-11 items-center justify-center bg-paper/10 text-paper transition-colors duration-150 hover:bg-paper/20">
            
              <XIcon className="h-5 w-5" />
            </button>
          </div>

          <nav aria-label="Mobile" className="flex flex-1 flex-col justify-center px-6">
            <ul className="space-y-2">
              {navItems.map((item, i) =>
            <motion.li
              key={item.to}
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 0.04 + i * 0.04, ease: [0.23, 1, 0.32, 1] }}>
              
                  <NavLink
                to={item.to}
                end={item.to === '/'}
                onClick={onClose}
                className={({ isActive }) =>
                `block py-2 font-serif text-4xl transition-colors duration-150 sm:text-5xl ${
                isActive ? 'text-teal' : 'text-paper hover:text-teal-light'}`

                }>
                
                    {item.label}
                  </NavLink>
                </motion.li>
            )}
            </ul>
          </nav>

          <div className="flex items-end justify-between border-t border-line px-6 py-6">
            <div className="font-mono text-xs leading-relaxed">
              <a href={`mailto:${profile.email}`} className="block text-teal hover:text-teal-light">
                {profile.email}
              </a>
              <a href={profile.phoneHref} className="block text-paper/80 hover:text-paper">
                {profile.phone}
              </a>
            </div>
            <SocialLinks className="-mr-3" />
          </div>
        </motion.div>
      }
    </AnimatePresence>);

}