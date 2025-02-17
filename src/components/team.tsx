"use client";

const teamMembers = [
  {
    name: "Manish",
    role: "CEO & Founder",
    // image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    bio: "15+ years leading tech innovation",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  },
  {
    name: "Himanshu", 
    role: "Full Stack Developer",
    // image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    bio: "Next.js & Tailwind CSS Expert, Python Developer",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  },
  {
    name: "Nishant",
    role: "Full Stack Developer",
    // image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80", 
    bio: "UX/UI Design Specialist",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  },
  {
    name: "Nihal",
    role: "Backend Developer",
    // image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    bio: "Expert in Nodejs Express, MongoDB",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#" 
    }
  }
];
export default function Team() {
  return (
    <section id="team" className="py-24 backdrop-blur-sm">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16 relative">
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#5865F2]/20 blur-[100px] rounded-full" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Meet Our <span className="text-[#5865F2]">Team</span>
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Our diverse team of experts brings together years of experience in technology,
            design, and business strategy to deliver exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative backdrop-blur-sm rounded-3xl bg-gradient-to-br from-gray-900/95 via-gray-900/98 to-gray-800/95 border border-gray-800/50 hover:border-[#5865F2]/30 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#5865F2]/5 to-[#5865F2]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             
              <div className="relative z-10 p-6 space-y-4">
                {/* Avatar Container */}
                {/* <div className="relative w-full aspect-square mb-4 overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900">
                  <div className="absolute inset-0 flex items-center justify-center bg-[#5865F2]/10">
                    <span className="text-6xl font-bold text-[#5865F2]">
                      {member.name[0]}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-gray-900 to-transparent" />
                </div> */}

               
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#5865F2] transition-colors">
                    {member.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="h-1 w-4 bg-[#5865F2] rounded-full" />
                    <span className="text-sm text-gray-400">{member.role}</span>
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                <div className="pt-4 flex gap-4 border-t border-gray-800/50">
                  {Object.entries(member.social).map(([platform, link]) => (
                    <a
                      key={platform}
                      href={link}
                      className="text-sm text-gray-400 hover:text-[#5865F2] transition-colors flex items-center gap-1"
                    >
                      <span className="h-1 w-2 bg-[#5865F2] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="capitalize">{platform}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
