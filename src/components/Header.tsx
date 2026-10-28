import { useCallback, useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { MenuIcon, ArrowUpRightIcon } from 'lucide-react';
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
        className="sr-only z-[60] bg-taupe px-4 py-2 font-mono text-sm text-white shadow-md focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
        Skip to content
      </a>
      <header
        className={`fixed inset-x-0 top-0 z-40 border-b transition-[background-color,border-color,box-shadow] duration-200 ease-out print:hidden ${solid ? 'border-line bg-white/95 backdrop-blur-md shadow-[0_1px_8px_rgba(59,45,37,0.04)]' : 'border-transparent bg-transparent'}`
        }>
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
          <Link
            to="/"
            className="group flex items-center gap-3 transition-opacity duration-150"
            aria-label={`${profile.name} — home`}
            title={profile.name}>
            <img
              src={isHome ? profile.logoImage : profile.logoImage}
              alt={`${profile.name} logo`}
              className="h-11 w-auto max-w-[48px] object-contain transition-transform duration-200 group-hover:scale-105"
              width={44}
              height={44}
            />
          </Link>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-6 xl:gap-8">
              {navItems.map((item) => (
                <li key={item.to}>
                  {item.external || item.to.startsWith('http') ? (
                    <a
                      href={item.to}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link relative inline-flex items-center gap-1 py-2 font-mono text-[12px] xl:text-[13px] uppercase tracking-[0.11em] xl:tracking-[0.14em] text-espresso/75 transition-colors duration-150 whitespace-nowrap hover:text-espresso after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-taupe after:transition-[width] after:duration-200 after:ease-out hover:after:w-full"
                    >
                      <span>{item.label}</span>
                      <ArrowUpRightIcon className="h-3 w-3 opacity-60 transition-transform duration-150 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 group-hover/link:opacity-100" />
                    </a>
                  ) : (
                    <NavLink
                      to={item.to}
                      end={item.to === '/'}
                      className={({ isActive }) =>
                        `relative py-2 font-mono text-[12px] xl:text-[13px] uppercase tracking-[0.11em] xl:tracking-[0.14em] transition-colors duration-150 whitespace-nowrap after:absolute after:-bottom-0.5 after:left-0 after:h-px after:bg-taupe after:transition-[width] after:duration-200 after:ease-out ${isActive
                          ? 'text-espresso font-semibold after:w-full'
                          : 'text-espresso/75 after:w-0 hover:text-espresso hover:after:w-full'
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="flex h-11 w-11 items-center justify-center border border-line bg-beige/60 text-espresso transition-colors duration-150 hover:bg-beige lg:hidden">
            <MenuIcon className="h-5 w-5" />
          </button>
        </div>
      </header>
      <MobileMenu open={menuOpen} onClose={closeMenu} />
    </>);

}