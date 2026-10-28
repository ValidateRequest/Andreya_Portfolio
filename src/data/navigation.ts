export interface NavItem {
  label: string;
  to: string;
  external?: boolean;
}

export const navItems: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Resume', to: '/resume' },
  { label: 'Projects', to: '/projects' },
  { label: 'VA Services', to: 'https://karthy-virtual-solutions.lovable.app/', external: true },
  { label: 'Contact', to: '/contact' }
];


export const exploreLinks = [
    { label: 'About', to: '/about', description: 'Background, strengths and what I do' },
    { label: 'Resume', to: '/resume', description: 'Experience, education and certifications' },
    { label: 'Projects', to: '/projects', description: 'Data, database and IT systems work' },
    { label: 'Contact', to: '/contact', description: 'Projects, roles and technical challenges' }];