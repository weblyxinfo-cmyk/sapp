import Link from "next/link";

type Variant = "yellow" | "navy" | "ghost";

type ButtonProps = {
  variant: Variant;
  href?: string;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
};

const variantStyles: Record<Variant, string> = {
  yellow:
    "bg-[var(--yellow)] text-[var(--navy)] text-[14px] font-bold py-[14px] px-[28px] rounded-full inline-flex items-center gap-[8px] transition-all duration-200 border-none cursor-pointer hover:bg-[var(--yellow-dark)]",
  navy:
    "bg-[var(--navy)] text-white text-[14px] font-bold py-[14px] px-[28px] rounded-full inline-flex items-center gap-[8px] transition-all duration-200 border-none cursor-pointer hover:bg-[var(--navy2)]",
  ghost:
    "text-[rgba(255,255,255,0.55)] text-[13px] font-semibold inline-flex items-center gap-[6px] bg-transparent border-none cursor-pointer",
};

export default function Button({
  variant,
  href,
  children,
  className,
  type = "button",
}: ButtonProps) {
  const styles = `${variantStyles[variant]}${className ? ` ${className}` : ""}`;

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={styles}>
      {children}
    </button>
  );
}
