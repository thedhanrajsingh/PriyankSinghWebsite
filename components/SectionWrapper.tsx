
import React from 'react';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  bg?: string;
  id?: string;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, className = '', bg, id }) => {
  return (
    <section
      id={id}
      className={`py-16 md:py-24 px-6 ${className}`}
      style={bg ? { backgroundColor: bg } : undefined}
    >
      <div className="max-w-7xl mx-auto w-full">
        {children}
      </div>
    </section>
  );
};
