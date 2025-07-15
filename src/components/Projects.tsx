
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'GrievX – Grievance Redressal Platform',
      description: 'NLP-based grievance classification system with auto-routing into 7 categories and integrated map API for authority mapping.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      tech: ['Flask', 'JavaScript', 'HTML/CSS', 'scikit-learn', 'Google Maps API'],
      github: 'https://github.com/priyanshuuuuuuuuu/group_CodeBusters',
      demo: '#',
      gradient: 'from-blue-500 to-purple-500'
    },
    {
      title: 'RISC-V Assembler & Simulator',
      description: 'Comprehensive simulator supporting 30+ standard RISC-V instructions (R, I, S, B, U, J) with instruction decoding using bitwise operations.',
      image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=600&h=400&fit=crop',
      tech: ['Python', 'Assembly Language', 'RISC-V', 'Bitwise Operations'],
      github: 'https://github.com/priyanshuuuuuuuuu/risc-v-simulator',
      demo: '#',
      gradient: 'from-green-500 to-teal-500'
    },
    {
      title: 'Angry Birds – 2D Game Clone',
      description: 'Complete game implementation with realistic projectile motion, collision detection, scoring system, and strong OOP principles.',
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=400&fit=crop',
      tech: ['Java', 'LibGDX', 'OOP', 'Game Physics', 'Collision Detection'],
      github: 'https://github.com/priyanshuuuuuuuuu/AP_AngryBirds',
      demo: '#',
      gradient: 'from-orange-500 to-pink-500'
    },
    {
      title: 'Food Waste Management System',
      description: 'Real-time food recycling platform with transport scheduling, tracking system, and role-based access control for efficient waste management.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop',
      tech: ['HTML', 'CSS', 'JavaScript', 'MySQL', 'Real-time tracking'],
      github: 'https://github.com/priyanshuuuuuuuuu/Food-Waste-Management-System',
      demo: '#',
      gradient: 'from-purple-500 to-indigo-500'
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
              A showcase of my technical projects, featuring innovative solutions and modern development practices.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group bg-card rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2 border border-border"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-80 transition-opacity duration-300`}></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-background/90 rounded-full hover:bg-background transition-colors border border-border"
                      aria-label="View on GitHub"
                    >
                      <Github className="w-5 h-5 text-foreground" />
                    </a>
                    {project.demo !== '#' && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-background/90 rounded-full hover:bg-background transition-colors border border-border"
                        aria-label="View live demo"
                      >
                        <ExternalLink className="w-5 h-5 text-foreground" />
                      </a>
                    )}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm font-medium border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
