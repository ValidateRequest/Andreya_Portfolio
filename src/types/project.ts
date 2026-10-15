export type ProjectCategory =
'Data Analytics' |
'IT / Systems' |
'Database' |
'Business Intelligence';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  tools: string[];
  /** Link to a live demo, report or case study. Leave empty until available. */
  projectUrl?: string;
  /** Only add when a real GitHub repository exists. */
  githubUrl?: string;
  /** Optional cover image (full URL). */
  imageUrl?: string;
  /** Marks a card as a placeholder awaiting real project details. */
  isPlaceholder?: boolean;
}