import { Button } from "@/components/ui/button";
import { FaAws, FaCss3Alt, FaDocker, FaGitAlt, FaHtml5, FaJava, FaJs, FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import { SiAdobeaftereffects, SiDjango, SiFastapi, SiFlask, SiGooglecloud, SiGraphql, SiJenkins, SiKubernetes, SiMongodb, SiNextdotjs, SiNginx, SiPostgresql, SiRedis, SiRedux, SiSpringboot, SiTailwindcss, SiTerraform, SiTypescript } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";

export default function About() {
    const skills = [
        { name: "AWS", icon: <FaAws className="w-6 h-6 text-[#FF9900]" /> },
        { name: "Azure", icon: <VscAzure className="w-6 h-6 text-[#0078D4]" /> },
        { name: "CSS", icon: <FaCss3Alt className="w-6 h-6 text-[#264DE4]" /> },
        { name: "Django", icon: <SiDjango className="w-6 h-6 text-[#092E20]" /> },
        { name: "Docker", icon: <FaDocker className="w-6 h-6 text-[#2496ED]" /> },
        { name: "FastAPI", icon: <SiFastapi className="w-6 h-6 text-[#009688]" /> },
        { name: "Flask", icon: <SiFlask className="w-6 h-6 text-[#ffffff]" /> },
        { name: "GCP", icon: <SiGooglecloud className="w-6 h-6 text-[#4285F4]" /> },
        { name: "GFX", icon: <SiAdobeaftereffects className="w-6 h-6 text-[#00A4EF]" /> },
        { name: "Git", icon: <FaGitAlt className="w-6 h-6 text-[#F05032]" /> },
        { name: "GraphQL", icon: <SiGraphql className="w-6 h-6 text-[#E10098]" /> },
        { name: "HTML", icon: <FaHtml5 className="w-6 h-6 text-[#E34F26]" /> },
        { name: "Java", icon: <FaJava className="w-6 h-6 text-[#007396]" /> },
        { name: "JavaScript", icon: <FaJs className="w-6 h-6 text-[#F7DF1E]" /> },
        { name: "Jenkins", icon: <SiJenkins className="w-6 h-6 text-[#D24939]" /> },
        { name: "Kubernetes", icon: <SiKubernetes className="w-6 h-6 text-[#326CE5]" /> },
        { name: "MongoDB", icon: <SiMongodb className="w-6 h-6 text-[#47A248]" /> },
        { name: "Next.js", icon: <SiNextdotjs className="w-6 h-6 text-white" /> },
        { name: "Nginx", icon: <SiNginx className="w-6 h-6 text-[#009639]" /> },
        { name: "Node.js", icon: <FaNodeJs className="w-6 h-6 text-[#339933]" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="w-6 h-6 text-[#336791]" /> },
        { name: "Python", icon: <FaPython className="w-6 h-6 text-[#3776AB]" /> },
        { name: "React", icon: <FaReact className="w-6 h-6 text-[#61DAFB]" /> },
        { name: "Redis", icon: <SiRedis className="w-6 h-6 text-[#DC382D]" /> },
        { name: "Redux", icon: <SiRedux className="w-6 h-6 text-[#764ABC]" /> },
        { name: "Spring", icon: <SiSpringboot className="w-6 h-6 text-[#6DB33F]" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="w-6 h-6 text-[#06B6D4]" /> },
        { name: "Terraform", icon: <SiTerraform className="w-6 h-6 text-[#7B42BC]" /> },
        { name: "TypeScript", icon: <SiTypescript className="w-6 h-6 text-[#3178C6]" /> }
    ];
    return (
        <section id="about" className="py-12 md:py-24 px-4 md:px-8">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Column */}
                    <div className="relative">
                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#5865F2]/20 blur-[100px] rounded-full" />
                        <div className="space-y-8 bg-gradient-to-br from-gray-900/80 to-gray-800/80 p-8 rounded-3xl backdrop-blur-sm border border-gray-800/50 hover:border-[#5865F2]/30 transition-all duration-300">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                                We Are <span className="text-[#5865F2]">BristoHQ</span>
                            </h2>
                            <p className="text-lg text-gray-300 leading-relaxed">
                                Creating innovative and easy-to-use tech solutions that empower developers and businesses. Our secure, fast, and reliable tools boost productivity and simplify work.
                            </p>
                            <Button className="bg-[#5865F2] hover:bg-[#4752C4] text-white rounded-full px-8 py-6 text-lg font-semibold shadow-lg shadow-[#5865F2]/20 hover:shadow-[#5865F2]/40 transition-all">
                                Join Our Journey
                            </Button>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-8">
                        <div className="bg-gradient-to-tr from-gray-900/90 via-[#5865F2]/10 to-gray-800/90 p-8 rounded-3xl border border-gray-800/50 hover:border-[#5865F2]/30 transition-all duration-300">
                            <p className="text-gray-300 leading-relaxed text-lg">
                                Located in the heart of India, we&apos;re a startup tech company driven by innovation and excellence. Our mission is to revolutionize how businesses operate through cutting-edge technology solutions.
                            </p>
                        </div>
                        
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                                <span className="h-1 w-8 bg-[#5865F2] rounded-full"></span>
                                Our Tech Stack
                            </h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                                {skills.map((skill, index) => (
                                    <div 
                                        key={index} 
                                        className="group bg-gray-800/30 backdrop-blur-sm px-4 py-3 rounded-full border border-gray-700/50 hover:border-[#5865F2] hover:bg-[#5865F2]/10 transition-all duration-300 flex items-center gap-3"
                                    >
                                        <div className="group-hover:scale-110 transition-transform">
                                            {skill.icon}
                                        </div>
                                        <span className="text-gray-300 group-hover:text-white transition-colors">
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}