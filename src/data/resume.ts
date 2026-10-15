import type { Certification, Education, Experience } from '../types/resume';

export const experience: Experience[] = [
{
  role: 'Assistant IT Officer',
  organisation: 'National Biotechnology Authority',
  period: 'Aug 2025 – Present',
  highlights: [
  { value: '100+', label: 'users supported' },
  { value: '20+', label: 'helpdesk incidents resolved weekly' },
  { value: '50+', label: 'deployments standardised on Microsoft 365' },
  { value: '~30%', label: 'estimated reduction in onboarding time' }],

  responsibilities: [
  'Provide first-line and second-line ICT support to 100+ users.',
  'Troubleshoot Windows, Microsoft 365, hardware, software, printers, network connectivity and user access.',
  'Resolve 20+ helpdesk incidents weekly.',
  'Monitor and maintain ICT infrastructure, networks, hardware and business applications.',
  'Support ICT systems and business projects.',
  'Standardised Microsoft 365 configurations across 50+ desktop, laptop and printer deployments.',
  'Contributed to an estimated 30% reduction in new-user onboarding time.',
  'Administer Active Directory accounts, permissions and application access.',
  'Perform software patching, preventive maintenance and technical checks.',
  'Maintain ICT asset registers, hardware records and software licensing documentation.',
  'Provide technical and cybersecurity awareness training to users.']

},
{
  role: 'IT Support Intern',
  organisation: 'Bindura University of Science Education',
  period: 'Jul 2022 – Jul 2023',
  responsibilities: [
  'Frontline technical and helpdesk support for 150+ staff and students.',
  'Windows, Microsoft Office, email, workstation, database and network troubleshooting.',
  'User account and systems administration.',
  'Workstation deployment and software installation.',
  'Preventive maintenance.',
  'ICT asset inventory and equipment allocation.',
  'Created and maintained SOPs and troubleshooting procedures.']

}];


export const education: Education[] = [
{
  qualification: 'Bachelor of Technology (Honours) in Information Technology',
  institution: 'Harare Institute of Technology',
  period: 'Aug 2020 – May 2024',
  result: 'Upper Second Class Honours (2.1)'
}];


export const certifications: Certification[] = [
{ name: 'Certificate in IT Professional (CITP)', status: 'Completed', date: 'Aug 2026' },
{ name: 'CompTIA A+', status: 'In progress' }];