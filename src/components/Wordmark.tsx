type WordmarkProps = {
  size?: "sm" | "lg";
  light?: boolean;
  className?: string;
};

export default function Wordmark({ size = "sm", light = false, className = "" }: WordmarkProps) {
  const textColor = light ? "text-white" : "text-brand-black";
  const nameSize = size === "lg" ? "text-4xl md:text-6xl" : "text-xl";
  const subSize = size === "lg" ? "text-base md:text-lg" : "text-[10px]";
  const barWidth = size === "lg" ? "w-16 md:w-24" : "w-7";

  return (
    <div className={`inline-flex flex-col ${className}`}>
      <span
        className={`font-display font-black uppercase tracking-tight ${nameSize} ${textColor}`}
      >
        Passione
      </span>
      <div className="mt-1 flex items-center gap-2">
        <span className={`h-[3px] ${barWidth} rounded-full bg-brand-green`} />
        <span
          className={`font-sans font-semibold uppercase tracking-[0.35em] ${subSize} ${textColor}/80`}
        >
          Emporio
        </span>
        <span className={`h-[3px] ${barWidth} rounded-full bg-brand-red`} />
      </div>
    </div>
  );
}
