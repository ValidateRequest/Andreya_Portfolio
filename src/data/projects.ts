import type { Project, ProjectCategory } from '../types/project';

/**
 * To add a project: copy one of the objects below, give it a unique id,
 * fill in the real details, add links only if they exist, and remove `isPlaceholder`.
 */

export const projectCategories: ProjectCategory[] = [
'Data Analytics',
'IT / Systems',
'Database',
'Business Intelligence'];


/** Tools given visual emphasis on project cards. */
export const dataTools = ['Excel', 'Power BI', 'SQL', 'Python'];

export const projects: Project[] = [
{
  id: 'data-analytics-case-study',
  title: 'Data Analytics Case Study',
  category: 'Data Analytics',
  description:
  'Details coming soon. This write-up will cover the question, the dataset, the approach taken and what the analysis showed.',
  tools: ['Excel', 'Python'],
  isPlaceholder: true
},
{
  id: 'business-intelligence-dashboard',
  title: 'Business Intelligence Dashboard',
  category: 'Business Intelligence',
  description:
  'Details coming soon. This space will show a reporting dashboard — who it was built for, the metrics it tracks and how it is used.',
  tools: ['Power BI', 'Excel'],
  isPlaceholder: true
},
{
  id: 'database-project',
  title: 'Database Project',
  category: 'Database',
  description:
  'Details coming soon. This entry will walk through a database design or query project — the structure, the queries and the result.',
  tools: ['SQL'],
  isPlaceholder: true
},
{
  id: 'it-systems-project',
  title: 'IT Systems Project',
  category: 'IT / Systems',
  description:
  'Details coming soon. This entry will document an IT operations or systems improvement — the setup, the process and the outcome.',
  tools: ['Microsoft 365', 'Active Directory'],
  isPlaceholder: true
}];