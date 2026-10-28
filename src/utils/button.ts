type ButtonVariant = 'primary' | 'outline';

const base =
'inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap px-7 font-mono text-[13px] font-medium uppercase tracking-[0.12em] transition-[background-color,border-color,color] duration-150 ease-out disabled:cursor-not-allowed disabled:opacity-50';

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-espresso text-white hover:bg-espresso-light active:bg-espresso-dark shadow-sm',
  outline: 'border border-taupe text-espresso hover:bg-taupe hover:text-white active:bg-taupe-deep'
};

export function buttonClasses(variant: ButtonVariant = 'primary', extra = ''): string {
  return `${base} ${variants[variant]} ${extra}`.trim();
}