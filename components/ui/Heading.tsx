export default function Heading({ children, className }: { children: React.ReactNode, className?: string}) {
  return (
    <div className="border-b border-gray-200 pb-5">
      <h3
        className={`text-lg font-medium leading-6 text-gray-900 ${className}`}
      >
        {children}
      </h3>
    </div>
  );
}
