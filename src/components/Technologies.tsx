import React from 'react';
import { technologiesData } from '../data/technologiesData';

export const Technologies: React.FC = () => {
  return (
    <section id="technologies" className="py-20 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tecnologías que utilizo</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-slate-700 dark:text-slate-300">
            Estas son las tecnologías, marcos y herramientas con las que trabajo habitualmente.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8">
            {technologiesData.map((tech) => (
              <div 
                key={tech.name} 
                className="bg-slate-50 dark:bg-slate-700 p-6 rounded-lg flex flex-col items-center transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="text-4xl mb-3 text-blue-600 dark:text-blue-400">
                  <tech.icon size={48} />
                </div>
                <h3 className="font-medium text-center">{tech.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};