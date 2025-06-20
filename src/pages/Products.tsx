import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  category: 'solar' | 'biogas' | 'envirotech' | 'construction';
  specifications: Record<string, string>;
  features: string[];
}

const Products: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const loadProductsData = async () => {
      try {
        const response = await fetch('/data/productsData.json');
        const data = await response.json();
        setProducts(data);
        console.log('Products data loaded:', data);
      } catch (error) {
        console.error('Error loading products data:', error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    loadProductsData();
  }, []);

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
  };

  const handleReadMore = (productId: number) => {
    navigate(`/products/${productId}`);
  };

  const filteredProducts = activeFilter === 'all'
      ? products
      : products.filter(product => product.category === activeFilter);

  if (loading) {
    return (
        <Layout>
          <div className="pt-24 md:pt-32 pb-16">
            <div className="container-max">
              <div className="text-center">
                <p className="text-lg">Loading products...</p>
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
                style={{ backgroundImage: "url('/assets/products-hero.jpg')" }}
            ></div>
          </div>
          <div className="container-max relative z-10 text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Our Products</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive range of renewable energy and environmental solutions
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

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
              {filteredProducts.map((product) => (
                  <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-all">
                    <div
                        className="aspect-w-16 aspect-h-9 cursor-pointer"
                        onClick={() => handleReadMore(product.id)}
                    >
                      <img
                          src={product.image}
                          alt={product.title}
                          className="w-full h-64 object-cover hover:scale-105 transition-transform"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = `https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`;
                          }}
                      />
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg">{product.title}</CardTitle>
                        <span className="text-xs bg-tayseer-orange/20 text-tayseer-orange rounded px-2 py-1 capitalize">
                      {product.category}
                    </span>
                      </div>
                      <CardDescription>{product.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-sm text-gray-600">
                        <div className="mb-3">
                          <span className="font-medium">Key Features:</span>
                          <ul className="mt-1 text-xs">
                            {product.features.slice(0, 2).map((feature, index) => (
                                <li key={index} className="flex items-center">
                                  <div className="w-1 h-1 bg-tayseer-orange rounded-full mr-2"></div>
                                  {feature}
                                </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="border-t pt-4">
                      <button
                          onClick={() => handleReadMore(product.id)}
                          className="text-tayseer-orange hover:underline"
                      >
                        Read More →
                      </button>
                    </CardFooter>
                  </Card>
              ))}
            </div>

            {filteredProducts.length === 0 && !loading && (
                <div className="text-center py-10">
                  <p className="text-lg text-gray-600">No products found for this filter.</p>
                </div>
            )}
          </div>
        </div>
      </Layout>
  );
};

export default Products;
