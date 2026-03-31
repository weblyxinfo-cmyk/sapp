import Eyebrow from "./Eyebrow";

type PageHeaderProps = {
  title: string;
  eyebrow?: string;
  description?: string;
  children?: React.ReactNode;
};

export default function PageHeader({
  title,
  eyebrow,
  description,
  children,
}: PageHeaderProps) {
  return (
    <header className="max-w-container mx-auto px-[40px] py-[80px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          {eyebrow && (
            <Eyebrow className="mb-4 block">{eyebrow}</Eyebrow>
          )}
          <h1 className="text-[64px] font-extrabold tracking-[-2.5px] leading-[0.95] text-[var(--navy)]">
            {title}
          </h1>
        </div>
        {(description || children) && (
          <div>
            {description && (
              <p className="text-[var(--text-muted)] text-base leading-relaxed">
                {description}
              </p>
            )}
            {children}
          </div>
        )}
      </div>
    </header>
  );
}
