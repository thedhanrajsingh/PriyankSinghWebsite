
import React from 'react';

interface StatBadgeProps {
  label: string;
  value: string;
  className?: string;
  icon?: string;
}

export const StatBadge: React.FC<StatBadgeProps> = ({ label, value, className = '', icon }) => {
  return (
    <div className={`glass-card-strong rounded-2xl p-4 premium-shadow-lg ${className}`}>
      <div className="flex items-center space-x-3">
        {icon && (
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-md">
            <span className="material-icons-round text-xl">{icon}</span>
          </div>
        )}
        <div>
          <p className="text-[10px] font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400">{label}</p>
          <p className="text-xl font-bold text-slate-900 dark:text-white stat-glow">{value}</p>
        </div>
      </div>
    </div>
  );
};
