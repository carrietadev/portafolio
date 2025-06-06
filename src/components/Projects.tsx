import React from 'react';
import { Github } from 'lucide-react';
import { ProjectCard } from './ProjectCard';
import { projectsData } from '../data/projectsData';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Proyectos destacados</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-slate-700 dark:text-slate-300">
            He aquí algunos de mis proyectos más recientes, en los que he puesto de manifiesto mis conocimientos y experiencia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://github.com/carrietadev" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 btn-secondary"
          >
            <Github size={18} />
            Ver más en GitHub
          </a>
        </div>
      </div>
    </section>
  );
};