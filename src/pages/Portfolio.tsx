
import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import SectionTitle from '../components/ui/SectionTitle';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  department: 'solar' | 'biogas' | 'envirotech' | 'construction';
  client: string;
  completionDate: string;
}

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Large-Scale Solar Farm",
      description: "A 5MW solar farm installation with 12,500 panels, providing clean energy to over 1,000 homes.",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80",
      department: "solar",
      client: "Green Energy Corporation",
      completionDate: "January 2023"
    },
    {
      id: 2,
      title: "Commercial Biogas Plant",
      description: "A biogas facility processing 50 tons of organic waste daily, generating 2MW of electricity.",
      image: "https://images.unsplash.com/photo-1511123553522-1950f02e9a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80",
      department: "biogas",
      client: "EcoPower Industries",
      completionDate: "March 2023"
    },
    {
      id: 3,
      title: "Urban Hydroponic Farm",
      description: "A 2,000 sqm vertical hydroponic farm producing 5,000 kg of vegetables monthly in an urban setting.",
      image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80",
      department: "envirotech",
      client: "Fresh Urban Produce",
      completionDate: "June 2023"
    },
    {
      id: 4,
      title: "Sustainable Office Complex",
      description: "A LEED Platinum certified 15-story office building with integrated solar panels and rainwater harvesting.",
      image: "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80",
      department: "construction",
      client: "Future Workspace Inc.",
      completionDate: "September 2023"
    },
    {
      id: 5,
      title: "Residential Solar Installation",
      description: "A comprehensive solar solution for a 20-unit residential complex with battery storage.",
      image: "https://images.unsplash.com/photo-1611364332926-318c93def5e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80",
      department: "solar",
      client: "Greenliving Apartments",
      completionDate: "October 2023"
    },
    {
      id: 6,
      title: "Eco-Tourism Resort",
      description: "A self-sustainable resort with integrated renewable energy systems and green building practices.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80",
      department: "construction",
      client: "EcoVacations Ltd.",
      completionDate: "December 2023"
    }
  ];

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
  };

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.department === activeFilter);

  return (
    <Layout>
      <div className="pt-24 md:pt-32 pb-16">
        <div className="container-max">
          <SectionTitle 
            title="Our Portfolio" 
            subtitle="Explore our completed projects and success stories" 
            centered={true} 
          />

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center mb-12 gap-3">
            <button 
              onClick={() => handleFilterChange('all')} 
              className={`px-6 py-2 rounded-md transition-all ${activeFilter === 'all' ? 'bg-tayseer-orange text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
            >
              All Projects
            </button>
            <button 
              onClick={() => handleFilterChange('solar')} 
              className={`px-6 py-2 rounded-md transition-all ${activeFilter === 'solar' ? 'bg-tayseer-orange text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
            >
              Solar
            </button>
            <button 
              onClick={() => handleFilterChange('biogas')} 
              className={`px-6 py-2 rounded-md transition-all ${activeFilter === 'biogas' ? 'bg-tayseer-orange text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
            >
              Biogas
            </button>
            <button 
              onClick={() => handleFilterChange('envirotech')} 
              className={`px-6 py-2 rounded-md transition-all ${activeFilter === 'envirotech' ? 'bg-tayseer-orange text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
            >
              Envirotech
            </button>
            <button 
              onClick={() => handleFilterChange('construction')} 
              className={`px-6 py-2 rounded-md transition-all ${activeFilter === 'construction' ? 'bg-tayseer-orange text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
            >
              Construction
            </button>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-all">
                <div className="aspect-w-16 aspect-h-9">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-64 object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle>{project.title}</CardTitle>
                    <span className="text-xs bg-tayseer-orange/20 text-tayseer-orange rounded px-2 py-1 capitalize">
                      {project.department}
                    </span>
                  </div>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-gray-600">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Client:</span>
                      <span>{project.client}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Completed:</span>
                      <span>{project.completionDate}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t pt-4">
                  <button className="text-tayseer-orange hover:underline">View Project Details →</button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-10">
              <p className="text-lg text-gray-600">No projects found for this filter.</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Portfolio;
