
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Full-Stack Web Development Intern',
      company: 'VSM Pantnagar',
      location: 'Remote',
      period: 'May 2025 – Present',
      advisor: 'Dr. Sonal Keshwani',
      description: 'Developing full-stack websites projected to attract 2700+ monthly users while boosting digital outreach by 60%.',
      achievements: [
        'Developed full-stack website with 2700+ projected monthly users',
        'Boosted digital outreach by 60%',
        'Designed secure backends using Node.js, Django, and MySQL',
        'Improved page load speed by 40% with optimized queries'
      ],
      color: 'from-blue-500 to-purple-500'
    }
  ];

  const positions = [
    {
      title: 'Elected Member',
      organization: 'Student Council, IIIT Delhi',
      period: '2024 – Present',
      description: 'Representing student interests and organizing campus activities',
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Events Lead',
      organization: 'Cyfuse Tech Club',
      period: '2023 – Present',
      description: 'Leading technical events and workshops for the tech community',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Core Organizer',
      organization: 'Odyssey Cultural Fest',
      period: '2024',
      description: 'Organized cultural events including "Squid Game" with 100+ participants',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Experience & Leadership
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
              My professional experience and leadership roles in various organizations and communities.
            </p>
          </div>
          
          <div className="space-y-12">
            {/* Work Experience */}
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-8 flex items-center">
                <Briefcase className="w-6 h-6 mr-3 text-blue-600" />
                Work Experience
              </h3>
              
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div
                    key={exp.title}
                    className="bg-card backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-border"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-semibold text-foreground mb-1">
                          {exp.title}
                        </h4>
                        <p className="text-lg font-medium text-primary">
                          {exp.company}
                        </p>
                        {exp.advisor && (
                          <p className="text-sm text-muted-foreground">
                            Advisor: {exp.advisor}
                          </p>
                        )}
                      </div>
                      <div className="flex flex-col sm:text-right space-y-1 mt-2 sm:mt-0">
                        <div className="flex items-center text-muted-foreground text-sm">
                          <Calendar className="w-4 h-4 mr-1" />
                          {exp.period}
                        </div>
                        <div className="flex items-center text-muted-foreground text-sm">
                          <MapPin className="w-4 h-4 mr-1" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div className="space-y-2">
                      <h5 className="font-medium text-foreground">Key Achievements:</h5>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {exp.achievements.map((achievement) => (
                          <li
                            key={achievement}
                            className="flex items-center text-sm text-muted-foreground"
                          >
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${exp.color} mr-2 flex-shrink-0`}></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Leadership Positions */}
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-8 flex items-center">
                <Calendar className="w-6 h-6 mr-3 text-green-600" />
                Leadership & Responsibilities
              </h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {positions.map((position) => (
                  <div
                    key={position.title}
                    className="bg-card backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border"
                  >
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${position.color} mb-4 flex items-center justify-center`}>
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">
                      {position.title}
                    </h4>
                    <p className="text-primary font-medium mb-2">
                      {position.organization}
                    </p>
                    <p className="text-sm text-muted-foreground mb-3">
                      {position.period}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {position.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
