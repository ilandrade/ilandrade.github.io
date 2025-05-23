import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Isabella Andrade
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            Software Developer & Problem Solver
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

      {/* About Section */}
      <section className="py-12 md:py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            I&apos;m a passionate software developer focused on creating elegant solutions to complex problems.
            With a strong foundation in web development and a keen eye for detail, I strive to build
            applications that are both functional and user-friendly.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Skills</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Web Development</li>
                <li>• JavaScript/TypeScript</li>
                <li>• React/Next.js</li>
                <li>• Node.js</li>
              </ul>
            </div>
            <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Interests</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Software Architecture</li>
                <li>• User Experience</li>
                <li>• Problem Solving</li>
                <li>• Continuous Learning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
