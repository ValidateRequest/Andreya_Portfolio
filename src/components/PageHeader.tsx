import React from 'react';
import { Reveal } from './Reveal';

interface PageHeaderProps {
  title: string;
  lead?: string;
  children?: React.ReactNode;
}

export function PageHeader({ title, lead, children }: PageHeaderProps) {
  return (
    <header className="mx-auto max-w-7xl px-6 pb-16 pt-36 lg:px-10 lg:pb-20 lg:pt-44 print:pt-0">
      <Reveal>
        <span aria-hidden="true" className="block h-px w-12 bg-taupe" />
        <h1 className="mt-8 font-serif text-5xl leading-[1.05] text-espresso sm:text-6xl lg:text-7xl">
          {title}
        </h1>
      </Reveal>
      {lead &&
      <Reveal delay={0.06}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{lead}</p>
        </Reveal>
      }
      {children &&
      <Reveal delay={0.12}>
          <div className="mt-10">{children}</div>
        </Reveal>
      }
    </header>);

}