
import React from 'react';
import Layout from '../components/layout/Layout';
import SectionTitle from '../components/ui/SectionTitle';

const Products: React.FC = () => {
  const productCategories = [
    {
      title: 'Solar Energy Systems',
      description: 'Complete solar power solutions for residential, commercial, and industrial applications.',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      products: [
        'Residential Solar Panels',
        'Commercial Solar Arrays',
        'Solar Water Heating Systems',
        'Grid-Tied Inverters',
        'Battery Storage Solutions',
        'Solar Mounting Systems'
      ]
    },
    {
      title: 'Biogas Systems',
      description: 'Innovative biogas solutions for waste management and renewable energy generation.',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      products: [
        'Anaerobic Digesters',
        'Biogas Purification Units',
        'Gas Storage Systems',
        'Biogas Generators',
        'Waste Preprocessing Equipment',
        'Monitoring & Control Systems'
      ]
    },
    {
      title: 'Environmental Technology',
      description: 'Advanced environmental solutions for air and water purification.',
      image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      products: [
        'Air Purification Systems',
        'Water Treatment Plants',
        'Emission Control Systems',
        'Environmental Monitoring',
        'Waste Management Solutions',
        'Green Building Materials'
      ]
    },
    {
      title: 'Construction Solutions',
      description: 'Sustainable construction materials and energy-efficient building systems.',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      products: [
        'Green Building Materials',
        'Energy-Efficient Windows',
        'Insulation Systems',
        'Smart Building Controls',
        'Sustainable Concrete',
        'Eco-Friendly Roofing'
      ]
    }
  ];

  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
        </svg>
      ),
      title: 'Quality Assured',
      description: 'All products meet international standards and certifications.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
        </svg>
      ),
      title: 'Reliable Support',
      description: '24/7 technical support and maintenance services available.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Cost Effective',
      description: 'Competitive pricing with excellent return on investment.'
    }
  ];

  return (
    <Layout>
      <div className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="section-padding bg-tayseer-light-gray">
          <div className="container-max">
            <SectionTitle
              title="Our Products"
              subtitle="Comprehensive renewable energy and environmental solutions for a sustainable future"
              centered
            />
          </div>
        </section>

        {/* Product Categories */}
        <section className="section-padding">
          <div className="container-max">
            <div className="space-y-16">
              {productCategories.map((category, index) => (
                <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-80 object-cover rounded-lg shadow-lg"
                    />
                  </div>
                  <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                    <h2 className="text-3xl font-bold text-tayseer-black mb-4">{category.title}</h2>
                    <p className="text-gray-600 text-lg mb-6">{category.description}</p>
                    <ul className="space-y-3">
                      {category.products.map((product, productIndex) => (
                        <li key={productIndex} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-tayseer-orange rounded-full"></div>
                          <span className="text-gray-700">{product}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section-padding bg-tayseer-black text-white">
          <div className="container-max">
            <SectionTitle
              title="Why Choose Our Products"
              subtitle="Discover the advantages of our renewable energy solutions"
              centered
              light
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="bg-tayseer-orange w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-tayseer-light-gray">
          <div className="container-max text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-tayseer-black mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your renewable energy needs and find the perfect products for your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary">
                Get a Quote
              </a>
              <a href="/portfolio" className="btn-secondary">
                View Our Work
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Products;
