import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import SectionTitle from '@/components/ui/SectionTitle';

interface Blog {
    id: number;
    title: string;
    author: string;
    date: string;
    category: string;
    image: string;
    readTime: string;
    tags: string[];
    excerpt: string;
    sections: {
        title: string;
        paragraphs: string[];
    }[];
    gallery?: string[];
}

const BlogDetails = () => {
    const { id } = useParams<{ id: string }>();
    const [blog, setBlog] = useState<Blog | null>(null);

    useEffect(() => {
        fetch('/data/blogs.json')
            .then((res) => res.json())
            .then((data) => {
                const found = data.find((item: Blog) => item.id === Number(id));
                setBlog(found);
            });
    }, [id]);

    if (!blog) return <div className="text-center py-20">Loading...</div>;

    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative h-[32rem] flex items-center justify-center">
                <div className="absolute inset-0 bg-tayseer-black">
                    <div
                        className="absolute inset-0 bg-cover bg-center opacity-40"
                        style={{ backgroundImage: `url(${blog.image})` }}
                    ></div>
                </div>
                <div className="container-max relative z-10 text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{blog.title}</h1>
                    <p className="text-gray-300 text-sm">
                        {blog.date} • {blog.readTime}
                    </p>
                </div>
            </section>

            {/* Blog Content */}
            <div className="container-max py-20 px-4">
                <div className="max-w-3xl mx-auto">
                    <div className="mb-6 flex flex-wrap gap-2">
                        {blog.tags.map((tag, index) => (
                            <span
                                key={index}
                                className="text-xs bg-tayseer-orange/10 text-tayseer-orange px-2 py-1 rounded"
                            >
                #{tag}
              </span>
                        ))}
                    </div>
                    <p className="text-lg text-gray-700 mb-8 italic">{blog.excerpt}</p>

                    {blog.sections.map((section, index) => (
                        <div key={index} className="mb-12">
                            <h2 className="text-2xl font-bold text-tayseer-dark mb-4">{section.title}</h2>
                            {section.paragraphs.map((para, idx) => (
                                <p key={idx} className="text-gray-800 leading-relaxed mb-4">
                                    {para}
                                </p>
                            ))}
                        </div>
                    ))}

                    {/* Gallery Section */}
                    {blog.gallery && blog.gallery.length > 0 && (
                        <div className="mt-16">
                            <h3 className="text-2xl font-bold text-tayseer-dark mb-6">Gallery</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                {blog.gallery.map((img, index) => (
                                    <img
                                        key={index}
                                        src={img}
                                        alt={`Gallery image ${index + 1}`}
                                        className="w-full h-64 object-cover rounded shadow"
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </Layout>
    );
};

export default BlogDetails;
