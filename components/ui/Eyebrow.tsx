type EyebrowProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <span
      className={`text-[11px] font-bold tracking-[3px] uppercase text-[var(--yellow)]${className ? ` ${className}` : ""}`}
    >
      {children}
    </span>
  );
}
