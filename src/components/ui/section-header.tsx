interface SectionHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export const SectionHeader = ({ children, className = "" }: SectionHeaderProps) => {
  return (
    <h2 className={`text-4xl font-bold text-center mb-16 text-white relative pb-6 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-1/4 after:h-0.5 after:bg-primary ${className}`}>
      {children}
    </h2>
  );
};