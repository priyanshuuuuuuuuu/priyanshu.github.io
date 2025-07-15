
const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm Priyanshu Pandey, a B.Tech CSSS (Computer Science and Social Sciences) student at IIIT Delhi. 
                I'm passionate about full-stack web development and have been actively building projects that solve real-world problems.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently working as a Full-Stack Web Development Intern at VSM Pantnagar, where I've developed 
                websites projected to attract 2700+ monthly users and boosted digital outreach by 60%. 
                I enjoy exploring the intersection of technology and social impact.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Beyond academics, I'm actively involved in student council activities, tech clubs, and hackathons. 
                I've solved 200+ DSA problems and love contributing to tech communities while pursuing my interests 
                in cricket and badminton.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                {[
                  { label: 'Projects Completed', value: '4+' },
                  { label: 'CGPA (4 Semesters)', value: '7.05' },
                  { label: 'DSA Problems Solved', value: '200+' },
                  { label: 'Hackathon Achievements', value: '7th Place' }
                ].map(({ label, value }) => (
                  <div key={label} className="text-center p-4 bg-card rounded-xl border border-border">
                    <div className="text-2xl font-bold text-foreground">{value}</div>
                    <div className="text-sm text-muted-foreground">{label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-6 backdrop-blur-sm shadow-xl border border-border">
                  <img
                    src="/lovable-uploads/9e878c25-8827-49b8-b979-667ffc13e536.png"
                    alt="Priyanshu at work"
                    className="w-full h-full rounded-xl object-cover"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent/60 rounded-full blur-lg"></div>
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-primary/60 rounded-full blur-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
