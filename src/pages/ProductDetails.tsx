import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  images: string[];
  category: 'solar' | 'biogas' | 'envirotech' | 'construction';
  price: string;
  specifications: Record<string, string>;
  features: string[];
}

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProductDetails = async () => {
      try {
        const response = await fetch('/data/productsData.json');
        const data = await response.json();
        const foundProduct = data.find((p: Product) => p.id === parseInt(id || '0'));

        if (foundProduct) {
          setProduct(foundProduct);
        } else {
          navigate('/products');
        }
      } catch (error) {
        console.error('Error loading product details:', error);
        navigate('/products');
      } finally {
        setLoading(false);
      }
    };

    loadProductDetails();
  }, [id, navigate]);

  if (loading) {
    return (
        <Layout>
          <div className="pt-24 md:pt-32 pb-16">
            <div className="container-max">
              <div className="text-center">
                <p className="text-lg">Loading product details...</p>
              </div>
            </div>
          </div>
        </Layout>
    );
  }

  if (!product) {
    return (
        <Layout>
          <div className="pt-24 md:pt-32 pb-16">
            <div className="container-max">
              <div className="text-center">
                <p className="text-lg">Product not found</p>
              </div>
            </div>
          </div>
        </Layout>
    );
  }

  return (
      <Layout>
        {/* Hero Section with product image */}
        <section className="relative h-[600px] flex items-center justify-center">
          <div className="absolute inset-0 bg-tayseer-black">
            <div
                className="absolute inset-0 bg-cover bg-center opacity-40"
                style={{ backgroundImage: `url('${product.image}')` }}
            ></div>
          </div>
          <div className="container-max relative z-10 text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{product.title}</h1>
            <p className="text-xl text-gray-300 capitalize">{product.category}</p>
          </div>
        </section>

        <div className="pt-24 md:pt-32 pb-16">
          <div className="container-max">
            {/* Back Button */}
            <button
                onClick={() => navigate('/products')}
                className="mb-6 flex items-center text-tayseer-orange hover:underline"
            >
              ← Back to Products
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Product Images Carousel */}
              <div>
                <Carousel className="w-full">
                  <CarouselContent>
                    {product.images?.map((image, index) => (
                        <CarouselItem key={index}>
                          <img
                              src={image}
                              alt={`${product.title} - Image ${index + 1}`}
                              className="w-full h-96 object-cover rounded-lg shadow-lg"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = `https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`;
                              }}
                          />
                        </CarouselItem>
                    ))}
                  </CarouselContent>
                  {product.images?.length > 1 && (
                      <>
                        <CarouselPrevious />
                        <CarouselNext />
                      </>
                  )}
                </Carousel>
              </div>

              {/* Product Info */}
              <div>
                <div className="mb-4">
                <span className="text-sm bg-tayseer-orange/20 text-tayseer-orange rounded px-3 py-1 capitalize">
                  {product.category}
                </span>
                </div>

                <h1 className="text-3xl font-bold text-tayseer-black mb-4">
                  {product.title}
                </h1>

                <p className="text-xl text-gray-600 mb-6">
                  {product.description}
                </p>

                <div className="text-3xl font-bold text-tayseer-orange mb-8">
                  {product.price}
                </div>

                {/* Contact CTA */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <a href="/contact" className="btn-primary text-center">
                    Get Quote
                  </a>
                  <a href="/contact" className="btn-secondary text-center">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Specifications */}
              <Card>
                <CardHeader>
                  <CardTitle>Technical Specifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {Object.entries(product.specifications).map(([key, value]) => (
                        <div key={key} className="flex justify-between border-b pb-2">
                          <span className="font-medium text-gray-700">{key}:</span>
                          <span className="text-gray-900">{value}</span>
                        </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Features */}
              <Card>
                <CardHeader>
                  <CardTitle>Key Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <div className="w-2 h-2 bg-tayseer-orange rounded-full mr-3"></div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Additional Info */}
            <div className="mt-16 bg-tayseer-light-gray rounded-lg p-8">
              <h2 className="text-2xl font-bold text-tayseer-black mb-4">
                Need More Information?
              </h2>
              <p className="text-gray-600 mb-6">
                Our technical team is ready to help you choose the right solution for your needs.
                Contact us for detailed specifications, installation requirements, and custom configurations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/contact" className="btn-primary">
                  Request Technical Details
                </a>
                <a href="/portfolio" className="btn-secondary">
                  View Similar Projects
                </a>
              </div>
            </div>
          </div>
        </div>
      </Layout>
  );
};

export default ProductDetails;
