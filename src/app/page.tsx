import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Your Name
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            Your Title or Tagline
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/projects"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-12 md:py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            This is a placeholder for your bio. Update this section with your background, interests, and what you&apos;re passionate about.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Technical Skills</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Skill 1</li>
                <li>• Skill 2</li>
                <li>• Skill 3</li>
                <li>• Skill 4</li>
              </ul>
            </div>
            <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Soft Skills</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Skill 1</li>
                <li>• Skill 2</li>
                <li>• Skill 3</li>
                <li>• Skill 4</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-12 md:py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-3">Project 1</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Description of Project 1. Update this with details about your project.
              </p>
              <Link
                href="/projects"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                View Project →
              </Link>
            </div>
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-3">Project 2</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Description of Project 2. Update this with details about your project.
              </p>
              <Link
                href="/projects"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                View Project →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Resume</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Download my resume or view it online.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/resume"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              View Resume
            </Link>
            <Link
              href="/resume.pdf"
              className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
            >
              Download PDF
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Contact</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Get in touch with me for opportunities or collaborations.
          </p>
          <div className="flex justify-center">
            <Link
              href="/contact"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
