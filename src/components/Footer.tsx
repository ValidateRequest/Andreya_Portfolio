import { SocialLinks } from './SocialLinks';
import { profile } from '../data/profile';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-ink print:hidden">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-12 sm:flex-row sm:items-end sm:justify-between lg:px-10">
        <div>
          <p className="font-serif text-xl text-paper">
            {profile.name}
            <span className="text-teal">.</span>
          </p>
          <p className="mt-2 font-mono text-xs uppercase tracking-[0.14em] text-muted">
            {profile.title}
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:items-end">
          <SocialLinks className="-mx-3" />
          <p className="text-sm text-muted">
            © {year} {profile.name}. Based in {profile.location}.
          </p>
        </div>
      </div>
    </footer>);

}