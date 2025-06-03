
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  images: string[];
  department: 'solar' | 'biogas' | 'envirotech' | 'construction';
  client: string;
  completionDate: string;
  location: string;
  projectValue: string;
  duration: string;
  specifications: Record<string, string>;
  features: string[];
  youtubeUrl?: string;
  detailedDescription: string;
}

const ProjectDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProjectDetails = async () => {
      try {
        const response = await fetch('/data/portfolioData.json');
        const data = await response.json();
        const foundProject = data.find((p: Project) => p.id === parseInt(id || '0'));
        
        if (foundProject) {
          setProject(foundProject);
        } else {
          navigate('/portfolio');
        }
      } catch (error) {
        console.error('Error loading project details:', error);
        navigate('/portfolio');
      } finally {
        setLoading(false);
      }
    };

    loadProjectDetails();
  }, [id, navigate]);

  if (loading) {
    return (
      <Layout>
        <div className="pt-24 md:pt-32 pb-16">
          <div className="container-max">
            <div className="text-center">
              <p className="text-lg">Loading project details...</p>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (!project) {
    return (
      <Layout>
        <div className="pt-24 md:pt-32 pb-16">
          <div className="container-max">
            <div className="text-center">
              <p className="text-lg">Project not found</p>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="pt-24 md:pt-32 pb-16">
        <div className="container-max">
          {/* Back Button */}
          <button 
            onClick={() => navigate('/portfolio')}
            className="mb-6 flex items-center text-tayseer-orange hover:underline"
          >
            ← Back to Portfolio
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Project Images Carousel */}
            <div>
              <Carousel className="w-full">
                <CarouselContent>
                  {project.images?.map((image, index) => (
                    <CarouselItem key={index}>
                      <img 
                        src={image} 
                        alt={`${project.title} - Image ${index + 1}`} 
                        className="w-full h-96 object-cover rounded-lg shadow-lg"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                {project.images?.length > 1 && (
                  <>
                    <CarouselPrevious />
                    <CarouselNext />
                  </>
                )}
              </Carousel>
            </div>

            {/* Project Info */}
            <div>
              <div className="mb-4">
                <span className="text-sm bg-tayseer-orange/20 text-tayseer-orange rounded px-3 py-1 capitalize">
                  {project.department}
                </span>
              </div>
              
              <h1 className="text-3xl font-bold text-tayseer-black mb-4">
                {project.title}
              </h1>
              
              <p className="text-xl text-gray-600 mb-6">
                {project.description}
              </p>

              {/* Project Overview */}
              <div className="space-y-3 mb-8">
                <div className="flex justify-between border-b pb-2">
                  <span className="font-medium text-gray-700">Client:</span>
                  <span className="text-gray-900">{project.client}</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-medium text-gray-700">Location:</span>
                  <span className="text-gray-900">{project.location}</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-medium text-gray-700">Project Value:</span>
                  <span className="text-gray-900 font-bold text-tayseer-orange">{project.projectValue}</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-medium text-gray-700">Duration:</span>
                  <span className="text-gray-900">{project.duration}</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-medium text-gray-700">Completed:</span>
                  <span className="text-gray-900">{project.completionDate}</span>
                </div>
              </div>

              {/* Contact CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/contact" className="btn-primary text-center">
                  Start Similar Project
                </a>
                <a href="/contact" className="btn-secondary text-center">
                  Contact Us
                </a>
              </div>
            </div>
          </div>

          {/* Detailed Description */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-tayseer-black mb-6">Project Overview</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              {project.detailedDescription}
            </p>
          </div>

          {/* YouTube Video */}
          {project.youtubeUrl && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-tayseer-black mb-6">Project Video</h2>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src={project.youtubeUrl.replace('watch?v=', 'embed/')}
                  title={`${project.title} Video`}
                  className="w-full h-96 rounded-lg shadow-lg"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}

          {/* Project Details */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Technical Specifications */}
            <Card>
              <CardHeader>
                <CardTitle>Technical Specifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {Object.entries(project.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between border-b pb-2">
                      <span className="font-medium text-gray-700">{key}:</span>
                      <span className="text-gray-900">{value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Key Features */}
            <Card>
              <CardHeader>
                <CardTitle>Key Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-tayseer-orange rounded-full mr-3"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="mt-16 bg-tayseer-light-gray rounded-lg p-8">
            <h2 className="text-2xl font-bold text-tayseer-black mb-4">
              Interested in a Similar Project?
            </h2>
            <p className="text-gray-600 mb-6">
              Our expert team can help you plan and execute a project similar to this one. 
              Contact us for consultation, project planning, and custom solutions tailored to your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/contact" className="btn-primary">
                Request Consultation
              </a>
              <a href="/portfolio" className="btn-secondary">
                View More Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectDetails;
