
import React from 'react';
import Layout from '../components/layout/Layout';
import SectionTitle from '../components/ui/SectionTitle';

const OurTeam: React.FC = () => {
  const teamMembers = [
    {
      name: 'Ahmed Al-Rashid',
      position: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'With over 15 years of experience in renewable energy, Ahmed leads our vision for sustainable solutions.',
    },
    {
      name: 'Sarah Johnson',
      position: 'Chief Technology Officer',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Sarah brings innovative technology solutions to our environmental projects with her engineering expertise.',
    },
    {
      name: 'Mohammed Hassan',
      position: 'Head of Solar Division',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Mohammed specializes in solar energy systems and has delivered over 200 successful installations.',
    },
    {
      name: 'Emily Chen',
      position: 'Environmental Engineer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Emily focuses on biogas solutions and environmental impact assessment for our projects.',
    },
    {
      name: 'Omar Abdullah',
      position: 'Construction Manager',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Omar oversees all construction projects ensuring quality and sustainability standards.',
    },
    {
      name: 'Lisa Rodriguez',
      position: 'Business Development',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Lisa drives business growth and partnerships in the renewable energy sector.',
    },
  ];

  return (
    <Layout>
      <div className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="section-padding bg-tayseer-light-gray">
          <div className="container-max">
            <SectionTitle
              title="Our Team"
              subtitle="Meet the dedicated professionals driving innovation in renewable energy"
              centered
            />
          </div>
        </section>

        {/* Team Members Section */}
        <section className="section-padding">
          <div className="container-max">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="card text-center group hover:shadow-xl transition-all duration-300">
                  <div className="p-6">
                    <div className="relative mb-6">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-tayseer-orange/20 group-hover:border-tayseer-orange transition-colors duration-300"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-tayseer-black mb-2">{member.name}</h3>
                    <p className="text-tayseer-orange font-medium mb-4">{member.position}</p>
                    <p className="text-gray-600 leading-relaxed">{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section-padding bg-tayseer-black text-white">
          <div className="container-max">
            <SectionTitle
              title="Our Values"
              subtitle="The principles that guide our team every day"
              centered
              light
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-tayseer-orange w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Innovation</h3>
                <p className="text-gray-300">Constantly pushing boundaries to develop cutting-edge renewable energy solutions.</p>
              </div>
              <div className="text-center">
                <div className="bg-tayseer-orange w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Sustainability</h3>
                <p className="text-gray-300">Committed to environmental protection and sustainable development practices.</p>
              </div>
              <div className="text-center">
                <div className="bg-tayseer-orange w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Excellence</h3>
                <p className="text-gray-300">Delivering the highest quality solutions and exceeding client expectations.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default OurTeam;
