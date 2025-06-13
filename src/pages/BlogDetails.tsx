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
    const blogPosts: BlogPost[] = [
      {
        id: 1,
        title: "The Future of Solar Energy: Innovations and Trends",
        excerpt: "Explore the latest innovations in solar technology...",
        image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1600&q=80",
        category: "Solar Energy",
        date: "April 22, 2025",
        readTime: "6 min read",
        content: "Solar energy technology has reached unprecedented levels...",
        author: "Tayseer Energy Team",
        tags: ["Solar", "Innovation", "Technology"]
      },
      {
        id: 2,
        title: "Biogas: Turning Waste into Energy",
        excerpt: "Learn how biogas technology is revolutionizing waste...",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
        category: "Biogas",
        date: "April 15, 2025",
        readTime: "8 min read",
        content: "Biogas technology represents one of the most promising...",
        author: "Tayseer Energy Team",
        tags: ["Biogas", "Waste Management", "Sustainability"]
      },
      // ... add more blog posts if needed
    ];

    const foundPost = blogPosts.find((p) => p.id === parseInt(id || '0'));
    if (foundPost) {
      setPost(foundPost);
    } else {
      navigate('/blog');
    }
    setLoading(false);
  }, [id, navigate]);

  if (loading) {
    return (
        <Layout>
          <div className="pt-24 md:pt-32 pb-16 text-center">Loading blog post...</div>
        </Layout>
    );
  }

  if (!post) {
    return (
        <Layout>
          <div className="pt-24 md:pt-32 pb-16 text-center">Blog post not found</div>
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
                style={{ backgroundImage: `url('${post.image}')` }}
            ></div>
          </div>
          <div className="container-max relative z-10 text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{post.title}</h1>
            <p className="text-sm md:text-base text-gray-200">
              {post.date} • {post.readTime} • {post.author}
            </p>
          </div>
        </section>

        {/* Content Section */}
        <div className="pt-16 md:pt-24 pb-16">
          <div className="container-max">
            {/* Category + Tags */}
            <div className="mb-4">
            <span className="text-sm bg-tayseer-orange/20 text-tayseer-orange rounded px-3 py-1">
              {post.category}
            </span>
            </div>

            {/* Main Content */}
            <div className="prose prose-lg max-w-none text-gray-800 mb-12">
              <p>{post.content}</p>
            </div>

            {/* Tags */}
            <div className="mb-12">
              <h3 className="text-lg font-semibold mb-2">Tags:</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, i) => (
                    <span key={i} className="text-sm bg-gray-200 text-gray-700 rounded px-3 py-1">
                  {tag}
                </span>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Need Expert Consultation?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Our team of experts is ready to help you implement sustainable solutions for your project.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="/contact" className="btn-primary text-center">Contact Our Experts</a>
                  <a href="/services" className="btn-secondary text-center">Explore Our Services</a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Layout>
  );
};

export default BlogDetails;
