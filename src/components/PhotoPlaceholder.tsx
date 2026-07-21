type PhotoPlaceholderProps = {
  label: string;
  aspect?: string;
  rounded?: string;
  className?: string;
};

export default function PhotoPlaceholder({
  label,
  aspect = "aspect-[4/3]",
  rounded = "rounded-3xl",
  className = "",
}: PhotoPlaceholderProps) {
  return (
    <div
      className={`flex ${aspect} ${rounded} w-full flex-col items-center justify-center gap-2 border-2 border-dashed border-brand-black/20 bg-gradient-to-br from-brand-green/10 via-brand-cream to-brand-red/10 p-6 text-center ${className}`}
    >
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-black/40">
        Photo coming soon
      </span>
      <span className="text-sm text-brand-black/60">{label}</span>
    </div>
  );
}
