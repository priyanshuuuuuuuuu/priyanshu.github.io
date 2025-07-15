
import { Code, Database, Globe, Smartphone, Settings, Cloud, BookOpen, Trophy } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      skills: ['C++', 'C', 'Java', 'JavaScript', 'Python', 'Assembly']
    },
    {
      title: 'Web Technologies',
      icon: Globe,
      color: 'from-green-500 to-emerald-500',
      skills: ['HTML/CSS', 'JavaScript', 'Flask', 'Django', 'Node.js', 'MySQL']
    },
    {
      title: 'Frameworks & Libraries',
      icon: Database,
      color: 'from-purple-500 to-pink-500',
      skills: ['LibGDX', 'Swing', 'scikit-learn', 'Google Maps API', 'React', 'Express']
    },
    {
      title: 'Tools & Technologies',
      icon: Settings,
      color: 'from-orange-500 to-red-500',
      skills: ['Git', 'Linux', 'Google Colab', 'LaTeX', 'Figma', 'Canva']
    },
    {
      title: 'Design & Creativity',
      icon: Smartphone,
      color: 'from-indigo-500 to-purple-500',
      skills: ['Figma', 'Canva', 'Framer', 'Spline', 'UI/UX Design', 'Game Design']
    },
    {
      title: 'Core Computer Science',
      icon: BookOpen,
      color: 'from-teal-500 to-cyan-500',
      skills: ['DSA', 'OOP', 'OS', 'DBMS', 'Algorithms', 'Math & Stats']
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
              A comprehensive toolkit of programming languages, frameworks, and technologies I use to build innovative solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map(({ title, icon: Icon, color, skills }) => (
              <div
                key={title}
                className="group bg-card backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-border"
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${color} shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground ml-3">
                    {title}
                  </h3>
                </div>
                
                <div className="grid grid-cols-2 gap-2">
                  {skills.map((skill) => (
                    <div
                      key={skill}
                      className="px-3 py-2 bg-muted rounded-lg text-sm font-medium text-muted-foreground text-center hover:bg-accent/20 transition-all duration-200"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
