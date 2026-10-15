import { BrandIcon } from './BrandIcon';
import { profile } from '../data/profile';

interface SocialLinksProps {
  className?: string;
}

export function SocialLinks({ className = '' }: SocialLinksProps) {
  const itemClass = 'flex h-10 w-10 items-center justify-center';

  return (
    <ul className={`flex items-center gap-1 ${className}`}>
      <li>
        <a
          href={profile.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile (opens in a new tab)"
          className={`${itemClass} text-paper transition-colors duration-150 hover:text-teal-light`}>
          
          <BrandIcon name="linkedin" />
        </a>
      </li>
      <li>
        {profile.githubUrl ?
        <a
          href={profile.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile (opens in a new tab)"
          className={`${itemClass} text-paper transition-colors duration-150 hover:text-teal-light`}>
          
            <BrandIcon name="github" />
          </a> :

        <span className={`${itemClass} text-paper/30`} title="GitHub profile coming soon">
            <BrandIcon name="github" />
            <span className="sr-only">GitHub profile coming soon</span>
          </span>
        }
      </li>
    </ul>);

}