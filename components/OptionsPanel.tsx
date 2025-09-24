
import React from 'react';
import { Casing, Separator } from '../types';

interface OptionsPanelProps {
  separator: Separator;
  setSeparator: (separator: Separator) => void;
  casing: Casing;
  setCasing: (casing: Casing) => void;
}

const separatorOptions: { value: Separator; label: string }[] = [
  { value: '-', label: 'Hyphen (-)' },
  { value: '_', label: 'Underscore (_)' },
  { value: '~', label: 'Tilde (~)' },
];

const casingOptions: { value: Casing; label: string }[] = [
  { value: 'lowercase', label: 'lowercase' },
  { value: 'uppercase', label: 'UPPERCASE' },
  { value: 'default', label: 'Default Case' },
];

export const OptionsPanel: React.FC<OptionsPanelProps> = ({ separator, setSeparator, casing, setCasing }) => {
  return (
    <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 md:p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-8">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <h3 className="text-md font-semibold text-white whitespace-nowrap">Separator:</h3>
        <div className="flex items-center gap-4">
          {separatorOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => setSeparator(opt.value)}
              className={`px-4 py-2 text-sm rounded-md transition-colors duration-200 ${
                separator === opt.value
                  ? 'bg-indigo-600 text-white font-semibold shadow-md'
                  : 'bg-slate-700 hover:bg-slate-600 text-slate-300'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <h3 className="text-md font-semibold text-white whitespace-nowrap">Case:</h3>
        <div className="flex items-center gap-4">
          {casingOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => setCasing(opt.value)}
              className={`px-4 py-2 text-sm rounded-md transition-colors duration-200 ${
                casing === opt.value
                  ? 'bg-indigo-600 text-white font-semibold shadow-md'
                  : 'bg-slate-700 hover:bg-slate-600 text-slate-300'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
