/**
 * Editorial book-style divider: a hairline gold rule with a centered diamond glyph.
 * Used between homepage sections to give rhythm and a neoclassical signature.
 */
export const SectionDivider = ({ label }: { label?: string }) => (
  <div className="relative mx-auto max-w-5xl px-6 py-2 flex items-center gap-4">
    <span className="flex-1 h-px bg-gradient-to-r from-transparent via-secondary/40 to-secondary/60" />
    <span className="flex items-center gap-3 text-secondary/80">
      <span className="w-1.5 h-1.5 rotate-45 bg-secondary/70" />
      {label && (
        <span className="mono text-[14px] tracking-[0.5em] uppercase">
          {label}
        </span>
      )}
      <span className="w-1.5 h-1.5 rotate-45 bg-secondary/70" />
    </span>
    <span className="flex-1 h-px bg-gradient-to-l from-transparent via-secondary/40 to-secondary/60" />
  </div>
);
