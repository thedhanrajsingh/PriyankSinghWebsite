
import React, { useState } from 'react';

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div
      className={`border rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ${isOpen
        ? 'border-primary/20 bg-white/50 dark:bg-white/5 premium-shadow'
        : 'border-black/10 dark:border-white/10 hover:border-primary/10'
        }`}
      onClick={onClick}
    >
      <button
        className="w-full flex items-center justify-between p-6 text-left cursor-pointer"
      >
        <span className="text-xl font-semibold font-display text-slate-900 dark:text-slate-100">{question}</span>
        <span className={`material-icons-round text-primary transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
          add
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-400 ease-in-out ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}
      >
        <p className="px-6 text-base text-slate-800 dark:text-slate-200 leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
};

export const Accordion: React.FC<{ items: Array<{ question: string; answer: string }> }> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );
};
