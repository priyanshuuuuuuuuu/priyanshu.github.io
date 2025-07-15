
import { GraduationCap, Award, Calendar, BookOpen, Trophy } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: 'B.Tech in CSSS (Computer Science and Social Sciences)',
      school: 'Indraprastha Institute of Information Technology, Delhi (IIIT-Delhi)',
      location: 'New Delhi, India',
      period: '2023 – Present',
      gpa: '7.05/10.0 (Till 4th Semester)',
      description: 'Pursuing an interdisciplinary program combining computer science with social sciences, focusing on technology\'s impact on society.',
      courses: ['Data Structures and Algorithms', 'Operating Systems', 'Database Management', 'Advanced Programming'],
      color: 'from-blue-500 to-purple-500'
    },
    {
      degree: 'CBSE Class 12 (PCM)',
      school: 'Govt. Co-ed Senior Secondary School',
      location: 'India',
      period: '2022 – 2023',
      gpa: '88.80%',
      description: 'Completed senior secondary education with Physics, Chemistry, and Mathematics as core subjects.',
      courses: ['Physics', 'Chemistry', 'Mathematics', 'English'],
      color: 'from-green-500 to-teal-500'
    },
    {
      degree: 'CBSE Class 10',
      school: 'Heera Public School',
      location: 'India',
      period: '2020 – 2021',
      gpa: '93.80%',
      description: 'Completed secondary education with excellent academic performance across all subjects.',
      courses: ['Mathematics', 'Science', 'Social Science', 'English', 'Hindi'],
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const coursework = [
    'Data Structures and Algorithms',
    'Operating Systems',
    'Advanced Programming',
    'Database Management',
    'Algorithm Design & Analysis',
    'Econometrics',
    'Convex Optimization',
    'Probability and Statistics',
    'Discrete Mathematics',
    'Linear Algebra'
  ];

  const achievements = [
    {
      name: 'Aspire Scholarship',
      issuer: 'HCL co-founder Mr. Ajai Chowdhry',
      description: 'Merit-based scholarship for academic excellence',
      icon: '🏆'
    },
    {
      name: 'SSB Cleared',
      issuer: 'Services Selection Board',
      description: 'Cleared Army & Navy selection stages',
      icon: '🎖️'
    },
    {
      name: '7th Place - Fintech Hackathon',
      issuer: 'IIIT Delhi',
      description: 'Achieved top 10 position in competitive hackathon',
      icon: '💡'
    },
    {
      name: '200+ DSA Problems',
      issuer: 'LeetCode, Codeforces, GFG',
      description: 'Consistent problem-solving practice',
      icon: '🧩'
    }
  ];

  return (
    <section className="py-20 bg-white/50 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Education & Achievements
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
              Academic journey, coursework, and achievements that shape my expertise in computer science and technology.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-8 flex items-center">
                <GraduationCap className="w-6 h-6 mr-3 text-blue-600" />
                Education
              </h3>
              
              <div className="space-y-6">
                {educationData.map((edu) => (
                  <div
                    key={edu.degree}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 mb-1">
                          {edu.degree}
                        </h4>
                        <p className="text-blue-600 font-medium mb-1">
                          {edu.school}
                        </p>
                        <p className="text-gray-600 text-sm">
                          {edu.location}
                        </p>
                      </div>
                      <div className="flex flex-col text-right mt-2 sm:mt-0">
                        <div className="flex items-center text-gray-600 text-sm mb-1">
                          <Calendar className="w-4 h-4 mr-1" />
                          {edu.period}
                        </div>
                        <div className="text-sm font-medium text-green-600">
                          Score: {edu.gpa}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {edu.description}
                    </p>
                    
                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">Key Subjects:</h5>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map((course) => (
                          <span
                            key={course}
                            className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 rounded-full text-sm font-medium"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Coursework */}
              <div className="mt-8 bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <BookOpen className="w-5 h-5 mr-2 text-purple-600" />
                  Complete Coursework
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {coursework.map((course) => (
                    <span
                      key={course}
                      className="px-3 py-2 bg-gray-50 text-gray-700 rounded-lg text-sm font-medium text-center hover:bg-purple-50 hover:text-purple-700 transition-colors"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Achievements */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-8 flex items-center">
                <Trophy className="w-6 h-6 mr-3 text-green-600" />
                Achievements & Recognition
              </h3>
              
              <div className="space-y-4">
                {achievements.map((achievement) => (
                  <div
                    key={achievement.name}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="text-2xl">{achievement.icon}</div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {achievement.name}
                        </h4>
                        <p className="text-blue-600 text-sm font-medium mb-2">
                          {achievement.issuer}
                        </p>
                        <p className="text-gray-600 text-sm">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Interests & Hobbies */}
              <div className="mt-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6">
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <Award className="w-5 h-5 mr-2 text-orange-600" />
                  Interests & Hobbies
                </h4>
                <div className="space-y-3">
                  <div>
                    <h5 className="font-medium text-gray-800 mb-1">Technical:</h5>
                    <p className="text-gray-600 text-sm">Problem Solving, Full-Stack Development, Hackathons</p>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-800 mb-1">Personal:</h5>
                    <p className="text-gray-600 text-sm">Cricket, Badminton, Exploring Tech Communities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
