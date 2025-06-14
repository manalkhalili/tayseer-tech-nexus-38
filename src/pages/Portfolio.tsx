import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

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
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPortfolioData = async () => {
      try {
        const response = await fetch('/data/portfolioData.json');
        const data = await response.json();
        setProjects(data);
        console.log('Portfolio data loaded:', data);
      } catch (error) {
        console.error('Error loading portfolio data:', error);
        setProjects([]);
      } finally {
        setLoading(false);
      }
    };

    loadPortfolioData();
  }, []);

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
  };

  const filteredProjects = activeFilter === 'all'
      ? projects
      : projects.filter(project => project.department === activeFilter);

  if (loading) {
    return (
        <Layout>
          <div className="pt-24 md:pt-32 pb-16">
            <div className="container-max">
              <div className="text-center">
                <p className="text-lg">Loading portfolio...</p>
              </div>
            </div>
          </div>
        </Layout>
    );
  }

  return (
      <Layout>
        {/* Hero Section */}
        <section className="relative h-[550px] flex items-center justify-center">
        <div className="absolute inset-0 bg-tayseer-black">
            <div
                className="absolute inset-0 bg-cover bg-center opacity-40"
                style={{ backgroundImage: "url('/assets/portfolio-hero.jpg')" }}
            ></div>
          </div>
          <div className="container-max relative z-10 text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Our Projects</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our completed projects and success stories
            </p>
          </div>
        </section>

        <div className="pt-24 md:pt-32 pb-16">
          <div className="container-max">
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center mb-12 gap-3">
              {['all', 'solar', 'biogas', 'envirotech', 'construction'].map(filter => (
                  <button
                      key={filter}
                      onClick={() => handleFilterChange(filter)}
                      className={`px-6 py-2 rounded-md transition-all ${activeFilter === filter ? 'bg-tayseer-orange text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
                  >
                    {filter.charAt(0).toUpperCase() + filter.slice(1)}
                  </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
              {filteredProjects.map((project) => (
                  <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-all">
                    <Link to={`/portfolio/${project.id}`}>
                      <div className="aspect-w-16 aspect-h-9">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = `https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`;
                            }}
                        />
                      </div>
                    </Link>
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
                        {/*<div className="flex justify-between">
                          <span className="font-medium">Completed:</span>
                          <span>{project.completionDate}</span>
                        </div>*/}
                      </div>
                    </CardContent>
                    <CardFooter className="border-t pt-4">
                      <Link
                          to={`/portfolio/${project.id}`}
                          className="text-tayseer-orange hover:underline"
                      >
                        View Project Details →
                      </Link>
                    </CardFooter>
                  </Card>
              ))}
            </div>

            {filteredProjects.length === 0 && !loading && (
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
