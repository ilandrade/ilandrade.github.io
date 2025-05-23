import Link from 'next/link';

const projects = [
  {
    title: 'Personal Portfolio',
    description: 'A modern portfolio website built with Next.js and Tailwind CSS',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    link: 'https://github.com/ilandrade/PersonalPage',
  },
  // Add more projects here
];

export default function Projects() {
  return (
    <div className="pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
            >
              <h2 className="text-2xl font-semibold mb-3">{project.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                View Project →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 