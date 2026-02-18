import { content } from './content';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Portfolio Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {content.projects.map((project) => (
            <div key={project.id} className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300">
              {/* Project Image - Displays the first image from your array */}
              <div className="h-56 overflow-hidden border-b dark:border-gray-700">
                <img 
                  src={project.images[0]} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-2">
                  {project.description}
                </p>
                
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-xs font-bold rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <a href={project.repo} className="text-sm font-semibold text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">View Code</a>
                  <a href={project.demo} className="px-5 py-2 bg-blue-600 text-white text-sm font-bold rounded-lg hover:bg-blue-700 transition">Live Demo</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;