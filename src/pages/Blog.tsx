
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
  readTime: string;
}

const Blog = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "The Future of Solar Energy: Innovations and Trends",
      excerpt: "Explore the latest innovations in solar technology and how they're making renewable energy more accessible and efficient than ever before.",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80",
      category: "Solar Energy",
      date: "April 22, 2025",
      readTime: "6 min read"
    },
    {
      id: 2,
      title: "Biogas: Turning Waste into Energy",
      excerpt: "Learn how biogas technology is revolutionizing waste management while providing a sustainable source of energy for communities worldwide.",
      image: "https://images.unsplash.com/photo-1511123553522-1950f02e9a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80",
      category: "Biogas",
      date: "April 15, 2025",
      readTime: "8 min read"
    },
    {
      id: 3,
      title: "Hydroponic Farming: Growing More with Less",
      excerpt: "Discover how hydroponic systems are changing agriculture by using 90% less water while increasing crop yields and quality.",
      image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80",
      category: "Hydroponics",
      date: "April 8, 2025",
      readTime: "5 min read"
    },
    {
      id: 4,
      title: "Green Building Materials Revolutionizing Construction",
      excerpt: "Explore innovative sustainable building materials that are reducing environmental impact without compromising on quality or durability.",
      image: "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80",
      category: "Construction",
      date: "April 1, 2025",
      readTime: "7 min read"
    },
    {
      id: 5,
      title: "Solar Storage Solutions: Beyond Batteries",
      excerpt: "Innovative approaches to storing solar energy that go beyond traditional battery solutions, promising longer storage capacities.",
      image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80",
      category: "Solar Energy",
      date: "March 25, 2025",
      readTime: "6 min read"
    },
    {
      id: 6,
      title: "Smart Homes: Integrating Renewable Energy Systems",
      excerpt: "How modern smart home technology is making it easier than ever to efficiently manage and optimize renewable energy use.",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80",
      category: "Smart Technology",
      date: "March 18, 2025",
      readTime: "9 min read"
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
            <Card className="flex flex-col md:flex-row overflow-hidden">
              <div className="md:w-1/2">
                <img 
                  src={blogPosts[0].image} 
                  alt={blogPosts[0].title} 
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 flex flex-col justify-between">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <span className="text-xs bg-tayseer-orange/20 text-tayseer-orange rounded px-2 py-1">
                      {blogPosts[0].category}
                    </span>
                    <span className="mx-2 text-gray-400">•</span>
                    <span className="text-sm text-gray-600">{blogPosts[0].date}</span>
                  </div>
                  <CardTitle className="text-2xl md:text-3xl">{blogPosts[0].title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{blogPosts[0].excerpt}</p>
                </CardContent>
                <CardFooter className="flex justify-between items-center border-t pt-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-tayseer-orange rounded-full flex items-center justify-center text-white font-bold">
                    </div>
                  </div>
                  <span className="text-xs text-gray-600">{blogPosts[0].readTime}</span>
                </CardFooter>
              </div>
            </Card>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
            {blogPosts.slice(1).map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-all flex flex-col">
                <div>
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-56 object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <span className="text-xs bg-tayseer-orange/20 text-tayseer-orange rounded px-2 py-1">
                      {post.category}
                    </span>
                    <span className="mx-2 text-gray-400">•</span>
                    <span className="text-xs text-gray-600">{post.date}</span>
                  </div>
                  <CardTitle className="text-xl line-clamp-2">{post.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
                </CardContent>
                <CardFooter className="flex justify-between items-center border-t pt-4">
                  <div className="flex items-center">
                    <div className="w-7 h-7 bg-tayseer-orange rounded-full flex items-center justify-center text-white font-bold text-xs">
                    </div>
                  </div>
                  <span className="text-xs text-gray-600">{post.readTime}</span>
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
