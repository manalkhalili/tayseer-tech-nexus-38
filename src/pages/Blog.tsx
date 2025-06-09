
import React from 'react';
import Layout from '../components/layout/Layout';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import SectionTitle from '../components/ui/SectionTitle';
import { Link } from 'react-router-dom';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
}

const Blog = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "The Future of Solar Energy: Innovations and Trends",
      excerpt: "Explore the latest innovations in solar technology and how they're making renewable energy more accessible and efficient than ever before.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Solar Energy",
      date: "April 22, 2025"
    },
    {
      id: 2,
      title: "Biogas: Turning Waste into Energy",
      excerpt: "Learn how biogas technology is revolutionizing waste management while providing a sustainable source of energy for communities worldwide.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Biogas",
      date: "April 15, 2025"
    },
    {
      id: 3,
      title: "Hydroponic Farming: Growing More with Less",
      excerpt: "Discover how hydroponic systems are changing agriculture by using 90% less water while increasing crop yields and quality.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Hydroponics",
      date: "April 8, 2025"
    },
    {
      id: 4,
      title: "Green Building Materials Revolutionizing Construction",
      excerpt: "Explore innovative sustainable building materials that are reducing environmental impact without compromising on quality or durability.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Construction",
      date: "April 1, 2025"
    },
    {
      id: 5,
      title: "Solar Storage Solutions: Beyond Batteries",
      excerpt: "Innovative approaches to storing solar energy that go beyond traditional battery solutions, promising longer storage capacities.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Solar Energy",
      date: "March 25, 2025"
    },
    {
      id: 6,
      title: "Smart Homes: Integrating Renewable Energy Systems",
      excerpt: "How modern smart home technology is making it easier than ever to efficiently manage and optimize renewable energy use.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Smart Technology",
      date: "March 18, 2025"
    }
  ];

  return (
    <Layout>
      <div className="pt-24 md:pt-32 pb-16">
        <div className="container-max">
          <SectionTitle 
            title="Our Blog" 
            subtitle="Insights, updates and knowledge from our experts" 
            centered={true} 
          />

          {/* Featured Post */}
          <div className="mb-12">
            <Card className="flex flex-col md:flex-row overflow-hidden hover:shadow-lg transition-all">
              <Link to={`/blog/${blogPosts[0].id}`} className="md:w-1/2">
                <img 
                  src={blogPosts[0].image} 
                  alt={blogPosts[0].title} 
                  className="w-full h-64 md:h-full object-cover hover:scale-105 transition-transform"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`;
                  }}
                />
              </Link>
              <div className="md:w-1/2 flex flex-col justify-between">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <span className="text-xs bg-tayseer-orange/20 text-tayseer-orange rounded px-2 py-1">
                      {blogPosts[0].category}
                    </span>
                    <span className="mx-2 text-gray-400">•</span>
                    <span className="text-sm text-gray-600">{blogPosts[0].date}</span>
                  </div>
                  <Link to={`/blog/${blogPosts[0].id}`}>
                    <CardTitle className="text-2xl md:text-3xl hover:text-tayseer-orange transition-colors">
                      {blogPosts[0].title}
                    </CardTitle>
                  </Link>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{blogPosts[0].excerpt}</p>
                </CardContent>
                <CardFooter className="flex justify-between items-center border-t pt-4">
                  <Link 
                    to={`/blog/${blogPosts[0].id}`}
                    className="text-tayseer-orange hover:underline"
                  >
                    Read More →
                  </Link>
                </CardFooter>
              </div>
            </Card>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
            {blogPosts.slice(1).map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-all flex flex-col">
                <Link to={`/blog/${post.id}`}>
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-56 object-cover hover:scale-105 transition-transform"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`;
                    }}
                  />
                </Link>
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <span className="text-xs bg-tayseer-orange/20 text-tayseer-orange rounded px-2 py-1">
                      {post.category}
                    </span>
                    <span className="mx-2 text-gray-400">•</span>
                    <span className="text-xs text-gray-600">{post.date}</span>
                  </div>
                  <Link to={`/blog/${post.id}`}>
                    <CardTitle className="text-xl line-clamp-2 hover:text-tayseer-orange transition-colors">
                      {post.title}
                    </CardTitle>
                  </Link>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
                </CardContent>
                <CardFooter className="flex justify-between items-center border-t pt-4">
                  <Link 
                    to={`/blog/${post.id}`}
                    className="text-tayseer-orange hover:underline"
                  >
                    Read More →
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="#" className="btn-primary inline-block">
              Load More Articles
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
