import React, { useEffect, useState } from 'react';
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

const Blog: React.FC = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data/blogs.json')
        .then((res) => res.json())
        .then((data) => {
          setBlogPosts(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Failed to load blog posts:", err);
          setLoading(false);
        });
  }, []);

  return (
      <Layout>
        {/* Hero Section */}
        <section className="relative h-[32rem] flex items-center justify-center">
          <div className="absolute inset-0 bg-tayseer-black">
            <div
                className="absolute inset-0 bg-cover bg-center opacity-40"
                style={{ backgroundImage: "url('/assets/blog-hero.jpg')" }}
            ></div>
          </div>
          <div className="container-max relative z-10 text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Our Blog</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Insights, updates and knowledge from our experts
            </p>
          </div>
        </section>

        <div className="mt-24 md:mt-32 pb-16">
          <div className="container-max">
            {loading ? (
                <p className="text-center text-gray-600">Loading articles...</p>
            ) : (
                <>
                  {/* Blog Posts Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
                    {blogPosts.map((post) => (
                        <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-all flex flex-col">
                          <Link to={`/blog/${post.id}`}>
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-56 object-cover hover:scale-105 transition-transform"
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement;
                                  target.src =
                                      'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
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
                            <Link to={`/blog/${post.id}`} className="text-tayseer-orange hover:underline">
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
                </>
            )}
          </div>
        </div>
      </Layout>
  );
};

export default Blog;