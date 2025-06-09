
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  content: string;
  author: string;
  tags: string[];
}

const BlogDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBlogPost = async () => {
      try {
        // Since we don't have a separate blog data file, we'll create mock data based on the blog posts
        const blogPosts: BlogPost[] = [
          {
            id: 1,
            title: "The Future of Solar Energy: Innovations and Trends",
            excerpt: "Explore the latest innovations in solar technology and how they're making renewable energy more accessible and efficient than ever before.",
            image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            category: "Solar Energy",
            date: "April 22, 2025",
            readTime: "6 min read",
            content: "Solar energy technology has reached unprecedented levels of efficiency and affordability. Recent innovations in photovoltaic cells, including perovskite tandem cells and bifacial panels, are revolutionizing the industry. These advances promise to make solar power even more competitive with traditional energy sources while reducing environmental impact. The integration of AI and IoT in solar systems is enabling smarter energy management and predictive maintenance, maximizing system performance and longevity.",
            author: "Tayseer Energy Team",
            tags: ["Solar", "Innovation", "Technology", "Renewable Energy"]
          },
          {
            id: 2,
            title: "Biogas: Turning Waste into Energy",
            excerpt: "Learn how biogas technology is revolutionizing waste management while providing a sustainable source of energy for communities worldwide.",
            image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            category: "Biogas",
            date: "April 15, 2025",
            readTime: "8 min read",
            content: "Biogas technology represents one of the most promising solutions for sustainable waste management and renewable energy generation. By converting organic waste into clean energy, biogas systems provide a dual benefit: reducing environmental pollution while producing valuable energy resources. Modern biogas plants can process various organic materials, from agricultural waste to municipal solid waste, creating a circular economy that benefits both communities and the environment.",
            author: "Tayseer Energy Team",
            tags: ["Biogas", "Waste Management", "Sustainability", "Circular Economy"]
          },
          {
            id: 3,
            title: "Hydroponic Farming: Growing More with Less",
            excerpt: "Discover how hydroponic systems are changing agriculture by using 90% less water while increasing crop yields and quality.",
            image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            category: "Hydroponics",
            date: "April 8, 2025",
            readTime: "5 min read",
            content: "Hydroponic farming is transforming agriculture by enabling crop production without soil, using nutrient-rich water solutions instead. This revolutionary approach uses up to 90% less water than traditional farming while producing higher yields in smaller spaces. Hydroponic systems provide precise control over nutrients, pH levels, and growing conditions, resulting in faster growth rates and superior crop quality.",
            author: "Tayseer Energy Team",
            tags: ["Hydroponics", "Agriculture", "Water Conservation", "Innovation"]
          },
          {
            id: 4,
            title: "Green Building Materials Revolutionizing Construction",
            excerpt: "Explore innovative sustainable building materials that are reducing environmental impact without compromising on quality or durability.",
            image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            category: "Construction",
            date: "April 1, 2025",
            readTime: "7 min read",
            content: "The construction industry is experiencing a green revolution with innovative sustainable building materials that combine environmental responsibility with exceptional performance. From recycled steel and bamboo composites to bio-based insulation and low-carbon concrete alternatives, these materials are reshaping how we build for the future.",
            author: "Tayseer Energy Team",
            tags: ["Green Building", "Sustainable Materials", "Construction", "Environment"]
          },
          {
            id: 5,
            title: "Solar Storage Solutions: Beyond Batteries",
            excerpt: "Innovative approaches to storing solar energy that go beyond traditional battery solutions, promising longer storage capacities.",
            image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            category: "Solar Energy",
            date: "March 25, 2025",
            readTime: "6 min read",
            content: "Energy storage is crucial for maximizing solar power potential. Beyond traditional lithium-ion batteries, innovative storage solutions are emerging, including compressed air energy storage, molten salt systems, and hydrogen production. These technologies promise longer storage durations and greater capacity.",
            author: "Tayseer Energy Team",
            tags: ["Solar Storage", "Energy Storage", "Innovation", "Solar Power"]
          },
          {
            id: 6,
            title: "Smart Homes: Integrating Renewable Energy Systems",
            excerpt: "How modern smart home technology is making it easier than ever to efficiently manage and optimize renewable energy use.",
            image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            category: "Smart Technology",
            date: "March 18, 2025",
            readTime: "9 min read",
            content: "Smart home technology is revolutionizing how we interact with renewable energy systems. Advanced home automation platforms now seamlessly integrate solar panels, energy storage, and smart appliances to optimize energy consumption and reduce costs while maximizing sustainability.",
            author: "Tayseer Energy Team",
            tags: ["Smart Homes", "Home Automation", "Renewable Energy", "Technology"]
          }
        ];

        const foundPost = blogPosts.find((p: BlogPost) => p.id === parseInt(id || '0'));
        
        if (foundPost) {
          setPost(foundPost);
        } else {
          navigate('/blog');
        }
      } catch (error) {
        console.error('Error loading blog post:', error);
        navigate('/blog');
      } finally {
        setLoading(false);
      }
    };

    loadBlogPost();
  }, [id, navigate]);

  if (loading) {
    return (
      <Layout>
        <div className="pt-24 md:pt-32 pb-16">
          <div className="container-max">
            <div className="text-center">
              <p className="text-lg">Loading blog post...</p>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (!post) {
    return (
      <Layout>
        <div className="pt-24 md:pt-32 pb-16">
          <div className="container-max">
            <div className="text-center">
              <p className="text-lg">Blog post not found</p>
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
            onClick={() => navigate('/blog')}
            className="mb-6 flex items-center text-tayseer-orange hover:underline"
          >
            ← Back to Blog
          </button>

          {/* Blog Header */}
          <div className="mb-8">
            <div className="mb-4">
              <span className="text-sm bg-tayseer-orange/20 text-tayseer-orange rounded px-3 py-1">
                {post.category}
              </span>
            </div>
            
            <h1 className="text-4xl font-bold text-tayseer-black mb-4">
              {post.title}
            </h1>
            
            <div className="flex items-center text-gray-600 mb-6">
              <span>{post.author}</span>
              <span className="mx-2">•</span>
              <span>{post.date}</span>
              <span className="mx-2">•</span>
              <span>{post.readTime}</span>
            </div>

            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-96 object-cover rounded-lg shadow-lg mb-8"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = `https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`;
              }}
            />
          </div>

          {/* Blog Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              {post.content}
            </p>
          </div>

          {/* Tags */}
          <div className="mt-12 mb-8">
            <h3 className="text-lg font-semibold mb-4">Tags:</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="text-sm bg-gray-200 text-gray-700 rounded px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <Card className="mt-16">
            <CardHeader>
              <CardTitle>Need Expert Consultation?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6">
                Our team of experts is ready to help you implement sustainable solutions for your project. 
                Contact us for personalized advice and consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/contact" className="btn-primary text-center">
                  Contact Our Experts
                </a>
                <a href="/services" className="btn-secondary text-center">
                  Explore Our Services
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default BlogDetails;
