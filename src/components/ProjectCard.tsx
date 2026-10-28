import { ArrowUpRightIcon, BriefcaseIcon, DatabaseIcon, LayoutDashboardIcon, MonitorIcon, TrendingUpIcon, LucideIcon } from "lucide-react";
import { BrandIcon } from "./BrandIcon";
import { dataTools } from "../data/projects";
import { buttonClasses } from "../utils/button";
import { Project, ProjectCategory } from "../types/project";
interface ProjectCardProps {
  project: Project;
}
const categoryIcons: Record<ProjectCategory, LucideIcon> = {
  'Virtual Assistance': BriefcaseIcon,
  'Data Analytics': TrendingUpIcon,
  'IT / Systems': MonitorIcon,
  Database: DatabaseIcon,
  'Business Intelligence': LayoutDashboardIcon
};
export function ProjectCard({
  project
}: ProjectCardProps) {
  const Icon = categoryIcons[project.category];
  const hasLink = Boolean(project.projectUrl);
  return <article className={`flex h-full flex-col border border-line bg-white shadow-sm ${hasLink ? 'transition-all duration-200 hover:border-taupe hover:shadow-md' : ''}`}>
      <div className="relative aspect-[16/9] overflow-hidden border-b border-line bg-beige-soft">
        {project.imageUrl ? <img src={project.imageUrl} alt={`${project.title} preview`} className="h-full w-full object-cover" /> : <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
            <Icon aria-hidden="true" className="h-10 w-10 text-taupe" strokeWidth={1.25} />
            <span className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
              {project.isPlaceholder ? 'Case study in preparation' : project.category}
            </span>
          </div>}
      </div>

      <div className="flex flex-1 flex-col p-7 lg:p-8">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-taupe font-medium">{project.category}</p>
        <h3 className="mt-3 font-serif text-2xl text-espresso">{project.title}</h3>
        <p className="mt-3 leading-relaxed text-muted">{project.description}</p>

        <ul className="mt-6 flex flex-wrap gap-2" aria-label="Tools">
          {project.tools.map((tool) => {
          const emphasised = dataTools.includes(tool);
          return <li key={tool} className={`px-3 py-1 font-mono text-xs ${emphasised ? 'bg-taupe/15 text-taupe-deep font-semibold' : 'border border-line bg-beige-soft/40 text-espresso/80'}`}>
                {tool}
              </li>;
        })}
        </ul>

        <div className="mt-auto flex flex-wrap gap-3 pt-8">
          {hasLink ? <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className={buttonClasses('primary', 'h-11 px-5')}>
              View Project
              <ArrowUpRightIcon aria-hidden="true" className="h-4 w-4" />
            </a> : <button type="button" disabled className={buttonClasses('outline', 'h-11 px-5')}>
              View Project · Soon
            </button>}
          {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={buttonClasses('outline', 'h-11 px-5')}>
              <BrandIcon name="github" />
              GitHub
            </a>}
        </div>
      </div>
    </article>;
}