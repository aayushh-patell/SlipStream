import { Users, Target, Zap, Globe } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Target,
      title: "Precision Predictions",
      description: "Our AI models analyze decades of F1 data to provide highly accurate race outcome predictions."
    },
    {
      icon: Zap,
      title: "Real-Time Analysis",
      description: "Get instant predictions based on current weather, track conditions, and driver performance."
    },
    {
      icon: Globe,
      title: "Global Coverage",
      description: "Comprehensive data coverage for all F1 circuits and races worldwide."
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Built by F1 enthusiasts for F1 enthusiasts, with community feedback and contributions."
    }
  ];

  const team = [
    {
      name: "Alex Chen",
      role: "Lead Data Scientist",
      description: "PhD in Machine Learning with 8+ years in sports analytics"
    },
    {
      name: "Sarah Johnson",
      role: "F1 Data Analyst",
      description: "Former F1 team analyst with deep understanding of race dynamics"
    },
    {
      name: "Marcus Rodriguez",
      role: "Backend Engineer",
      description: "Specialized in high-performance data processing and API development"
    },
    {
      name: "Emily Zhang",
      role: "Frontend Developer",
      description: "UI/UX expert focused on creating intuitive data visualization experiences"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-6xl">
              About SlipStream
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              We're revolutionizing Formula 1 predictions with cutting-edge machine learning 
              and comprehensive race data analysis.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              To make Formula 1 more engaging and accessible through data-driven insights 
              and accurate race predictions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Meet Our Team</h2>
            <p className="mt-4 text-lg text-gray-600">
              Passionate professionals combining F1 expertise with technical excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="h-20 w-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Technology Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Our Technology</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Built with modern technologies and powered by advanced machine learning algorithms 
              to deliver the most accurate F1 predictions possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Machine Learning</h3>
              <p className="text-gray-600">
                Advanced neural networks and ensemble methods trained on historical F1 data
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Real-Time Data</h3>
              <p className="text-gray-600">
                Live weather feeds, track conditions, and performance metrics integration
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Cloud Infrastructure</h3>
              <p className="text-gray-600">
                Scalable cloud architecture ensuring fast predictions and reliable service
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
