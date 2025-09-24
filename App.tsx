
import React, { useState, useEffect, useCallback } from 'react';
import { generateSlug } from './services/slugService';
import { OptionsPanel } from './components/OptionsPanel';
import { CopyButton } from './components/CopyButton';
import { Casing, Separator } from './types';

const App: React.FC = () => {
  const [inputText, setInputText] = useState<string>('Xin chào, đây là công cụ tạo slug tự động!');
  const [generatedSlug, setGeneratedSlug] = useState<string>('');
  const [separator, setSeparator] = useState<Separator>('-');
  const [casing, setCasing] = useState<Casing>('lowercase');

  const handleSlugGeneration = useCallback(() => {
    const slug = generateSlug(inputText, {
      separator,
      casing,
    });
    setGeneratedSlug(slug);
  }, [inputText, separator, casing]);

  useEffect(() => {
    handleSlugGeneration();
  }, [handleSlugGeneration]);

  return (
    <div className="bg-slate-900 text-slate-200 min-h-screen font-sans flex flex-col items-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-6xl">
        <header className="text-center mb-8 md:mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Auto Slug Generator
          </h1>
          <p className="mt-3 text-lg text-slate-400 max-w-2xl mx-auto">
            Công cụ chuyển đổi tất cả dạng văn bản sang slug nhanh gọn, tiết kiệm thời gian
          </p>
        </header>

        <main className="w-full">
            <OptionsPanel
                separator={separator}
                setSeparator={setSeparator}
                casing={casing}
                setCasing={setCasing}
            />

            <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                    <label htmlFor="source-text" className="text-sm font-medium text-slate-300">
                        Source Text
                    </label>
                    <textarea
                        id="source-text"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        placeholder="Enter text to convert to a slug..."
                        className="w-full h-48 p-4 bg-slate-800 border border-slate-700 rounded-lg text-slate-200 placeholder-slate-500 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow duration-200 resize-none"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="generated-slug" className="text-sm font-medium text-slate-300">
                        Generated Slug
                    </label>
                    <div className="relative w-full">
                        <textarea
                            id="generated-slug"
                            value={generatedSlug}
                            readOnly
                            placeholder="Your slug will appear here..."
                            className="w-full h-48 p-4 pr-12 bg-slate-800 border border-slate-700 rounded-lg text-green-400 placeholder-slate-500 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow duration-200 resize-none font-mono"
                        />
                        <CopyButton textToCopy={generatedSlug} />
                    </div>
                </div>
            </div>
        </main>
        
        <footer className="text-center mt-12 text-slate-500 text-sm">
            <p>Built with LewisLam</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
