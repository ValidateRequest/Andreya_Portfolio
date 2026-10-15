import { useCallback, useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { MenuIcon } from 'lucide-react';
import { MobileMenu } from './MobileMenu';
import { navItems } from '../data/navigation';
import { profile } from '../data/profile';

export function Header() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const solid = !isHome || scrolled;

  return (
    <>
      <a
        href="#main"
        className="sr-only z-[60] bg-teal px-4 py-2 font-mono text-sm text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
        
        Skip to content
      </a>
      <header
        className={`fixed inset-x-0 top-0 z-40 border-b transition-[background-color,border-color] duration-200 ease-out print:hidden ${
        solid ? 'border-line bg-ink/90 backdrop-blur-md' : 'border-transparent bg-transparent'}`
        }>
        
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
          <Link
            to="/"
            className="group flex items-center gap-3 transition-opacity duration-150 focus-visible:rounded-full"
            aria-label={`${profile.name} — home`}
            title={profile.name}>
            <div className="relative h-11 w-11 overflow-hidden rounded-full border-2 border-teal/40 bg-surface shadow-sm transition-all duration-200 group-hover:scale-105 group-hover:border-teal group-hover:shadow-[0_0_14px_rgba(45,179,163,0.35)]">
              <img
                src={profile.avatarImage}
                alt={profile.name}
                className="h-full w-full object-cover object-top"
                width={44}
                height={44}
              />
            </div>
          </Link>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-10">
              {navItems.map((item) =>
              <li key={item.to}>
                  <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                  `relative py-2 font-mono text-[13px] uppercase tracking-[0.14em] transition-colors duration-150 after:absolute after:-bottom-0.5 after:left-0 after:h-px after:bg-teal after:transition-[width] after:duration-200 after:ease-out ${
                  isActive ?
                  'text-paper after:w-full' :
                  'text-paper/70 after:w-0 hover:text-paper hover:after:w-full'}`

                  }>
                  
                    {item.label}
                  </NavLink>
                </li>
              )}
            </ul>
          </nav>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="flex h-11 w-11 items-center justify-center bg-paper/10 text-paper transition-colors duration-150 hover:bg-paper/20 lg:hidden">
            
            <MenuIcon className="h-5 w-5" />
          </button>
        </div>
      </header>
      <MobileMenu open={menuOpen} onClose={closeMenu} />
    </>);

}