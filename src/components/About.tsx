import React from 'react';
import { Code, Lightbulb, Users, Clock } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre mi</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Bio Section */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                ¿Quien soy?
              </h3>
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                Soy un desarrollador comprometido con el aprendizaje continuo y la
                implementación de soluciones innovadoras en diversos ámbitos
                tecnológicos.
              </p>
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                Mi enfoque incluye no solo el desarrollo de software, sino
                también la gestión y optimización de infraestructuras, la integración de
                tecnologías emergentes, y el análisis de sistemas complejos para
                mejorar su rendimiento y eficiencia. 
              </p>
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                Mi dedicación y capacidad de adaptación me permiten abordar retos interdisciplinarios, buscando
                siempre soluciones efectivas y contribuyendo al éxito de proyectos en
                áreas como la automatización, la ciberseguridad, y la transformación
                digital.
              </p>
            </div>

            {/* Soft Skills */}
            <div className="bg-slate-50 dark:bg-slate-700 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-blue-600 dark:text-blue-400">
                Habilidades Blandas
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                    <Code size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Resolución de problemas</h4>
                    <p className="text-slate-600 dark:text-slate-300">
                      Me encanta afrontar retos complejos y encontrar soluciones elegantes a través del pensamiento creativo.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                    <Lightbulb size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Aprendizaje continuo</h4>
                    <p className="text-slate-600 dark:text-slate-300">
                      Exploro constantemente nuevas tecnologías y metodologías para mantenerme a la vanguardia del panorama tecnológico en constante evolución.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                    <Users size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Trabajo en equipo</h4>
                    <p className="text-slate-600 dark:text-slate-300">
                      Me desenvuelvo bien en entornos de colaboración y valoro la diversidad de perspectivas a la hora de trabajar en proyectos.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Orientado a los detalles</h4>
                    <p className="text-slate-600 dark:text-slate-300">
                      Presto mucha atención a los pequeños detalles que marcan una gran diferencia en la experiencia del usuario y la calidad del código.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};