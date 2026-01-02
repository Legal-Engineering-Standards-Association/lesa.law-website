
import { ShieldCheck, Users, Globe, BookOpen } from 'lucide-react';

const Membership = () => {
  const membershipTiers = [
    {
      title: "Standards Committee",
      description: "Shape the direction of LESO's working groups and contribute directly to the development of foundational standards.",
      icon: <ShieldCheck className="w-10 h-10 text-accent" />,
      features: [
        "Voting rights on all standards proposals",
        "Participation in working groups",
        "Representation in governance",
        "Early access to draft specifications",
        "Organization recognition on website"
      ]
    },
    {
      title: "Contributing Members",
      description: "Participate in open calls, submit proposals, and collaborate on tooling and implementation.",
      icon: <Users className="w-10 h-10 text-accent" />,
      features: [
        "Access to full specifications",
        "Feedback processes",
        "Participate in technical discussions",
        "Implementation support",
        "Discussion forums"
      ]
    },
    {
      title: "Affiliates",
      description: "Stay informed, access published materials, and join open community calls.",
      icon: <Globe className="w-10 h-10 text-accent" />,
      features: [
        "Notifications",
        "Community forums",
        "Educational resources",
        "Participation in open meetings",
        "Event invitations"
      ]
    }
  ];

  return (
    <section id="membership" className="py-20 bg-gradient-to-b from-white to-secondary/30">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-2">
            <span className="chip">Join Us</span>
          </div>
          <h2 className="section-title">Participate in Standards Formation</h2>
          <p className="text-muted-foreground">
            LESA invites legal engineers, technologists, academics, and institutions to contribute to the 
            development of shared standards that will define the future of legal agreements. Membership is 
            open to individuals and organizations with a commitment to transparent, collaborative governance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {membershipTiers.map((tier, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 p-8 flex flex-col h-full animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">{tier.icon}</div>
              <h3 className="text-xl font-medium mb-3">{tier.title}</h3>
              <p className="text-muted-foreground mb-6">{tier.description}</p>
              <div className="mt-auto">
                <div className="mb-6">
                  <ul className="space-y-2">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a 
                  href="https://forms.gle/vAFMbfzsJLeEwBXx9" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3 text-center bg-secondary rounded-lg text-sm font-medium hover:bg-secondary/70 transition-colors duration-300"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-accent/10 px-6 py-4 rounded-xl animate-fade-in">
            <BookOpen className="w-5 h-5 text-accent" />
            <span className="text-sm">
              LESA is currently developing its governance framework. <a href="https://forms.gle/vAFMbfzsJLeEwBXx9" target="_blank" rel="noopener noreferrer" className="text-accent font-medium">Reach out</a> to express interest in participating.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Membership;
