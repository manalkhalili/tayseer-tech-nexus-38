
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import SectionTitle from '../components/ui/SectionTitle';

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  category: 'solar' | 'biogas' | 'envirotech' | 'construction';
  price: string;
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
      <div className="pt-24 md:pt-32 pb-16">
        <div className="container-max">
          <SectionTitle 
            title="Our Products" 
            subtitle="Explore our comprehensive range of renewable energy and environmental solutions" 
            centered={true} 
          />

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center mb-12 gap-3">
            <button 
              onClick={() => handleFilterChange('all')} 
              className={`px-6 py-2 rounded-md transition-all ${activeFilter === 'all' ? 'bg-tayseer-orange text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
            >
              All Products
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
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">Price:</span>
                      <span className="text-tayseer-orange font-bold">{product.price}</span>
                    </div>
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
