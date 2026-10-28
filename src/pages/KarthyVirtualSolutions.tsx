import { useEffect } from 'react';
import { ArrowUpRightIcon } from 'lucide-react';
import { useSeo } from '../hooks/useSeo';

export function KarthyVirtualSolutions() {
  useSeo(
    'Karthy Virtual Solutions | Reliable Virtual Assistant Services',
    'Practical, dependable virtual assistant support for email management, scheduling, data entry, and customer service.'
  );

  useEffect(() => {
    // Automatically redirect to the dedicated external VA website
    window.location.replace('https://karthy-virtual-solutions.lovable.app/');
  }, []);

  return (
    <main className="flex min-h-[75vh] items-center justify-center px-6 py-24 text-center">
      <div className="max-w-md">
        <span className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-taupe">
          Redirecting
        </span>
        <h1 className="mt-4 font-serif text-3xl text-espresso sm:text-4xl">
          Karthy Virtual Solutions
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          Taking you to the official Karthy Virtual Solutions website…
        </p>
        <a
          href="https://karthy-virtual-solutions.lovable.app/"
          className="mt-8 inline-flex items-center gap-2 border border-taupe bg-taupe px-7 py-3 font-mono text-xs uppercase tracking-[0.14em] text-white transition-colors duration-150 hover:bg-taupe-deep"
        >
          <span>Open Karthy Virtual Solutions</span>
          <ArrowUpRightIcon className="h-4 w-4" />
        </a>
      </div>
    </main>
  );
}

export default KarthyVirtualSolutions;
