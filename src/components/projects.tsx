const MockProjects = [
  {
    title: "Coming Soon...",
    description: "An innovative AI-powered platform that will revolutionize how developers interact with and analyze large codebases.", 
    image: "/coming-soon.jpg",
    tags: ["AI", "Machine Learning", "Code Analysis"]
  },
  {
    title: "Coming Soon...", 
    description: "A next-generation cloud infrastructure management tool that simplifies deployment and scaling of applications.",
    image: "/coming-soon.jpg",
    tags: ["Cloud", "DevOps", "Infrastructure"]
  },
  {
    title: "Coming Soon...",
    description: "A cutting-edge data visualization platform that transforms complex datasets into actionable insights.",
    image: "/coming-soon.jpg", 
    tags: ["Data Science", "Analytics", "Visualization"]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-12 md:py-24 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="text-center space-y-4 relative">
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#5865F2]/20 blur-[100px] rounded-full" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Our <span className="text-[#5865F2]">Projects</span>
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Here are some of the innovative projects we have worked on at
            Bristo HQ. Each project represents our commitment to excellence and cutting-edge technology.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {MockProjects.map((project, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-[20px] bg-gradient-to-br from-gray-900/90 to-gray-800/90 p-6 md:p-8 hover:from-[#5865F2]/20 hover:to-gray-900/90 transition-all duration-500 border border-gray-800/50 hover:border-[#5865F2]/30 hover:shadow-lg hover:shadow-[#5865F2]/10"
            >
              <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-[#5865F2]/20 blur-3xl group-hover:bg-[#5865F2]/30 transition-colors duration-500" />
              <div className="relative z-10 space-y-6">
                <div className="aspect-video bg-gray-800/50 rounded-xl overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
                  <div className="flex items-center justify-center h-full bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm">
                    <span className="text-gray-400 font-medium">Preview Coming Soon</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-[#5865F2] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-3 py-1 text-sm bg-[#5865F2]/10 text-[#5865F2] rounded-full border border-[#5865F2]/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
