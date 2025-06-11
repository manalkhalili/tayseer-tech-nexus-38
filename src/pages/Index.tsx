import React from 'react';
import Layout from '../components/layout/Layout';
import SectionTitle from '../components/ui/SectionTitle';
import ServiceCard from '../components/ui/ServiceCard';
import DepartmentCard from '../components/ui/DepartmentCard';
import { Link } from 'react-router-dom';
const Index = () => {
  const services = [{
    title: 'Green Energy Solutions',
    description: 'Custom solar installations for residential, commercial & industrial properties with cutting-edge energy storage.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
        </svg>,
    link: '/services'
  }, {
    title: 'Sustainable Construction',
    description: 'Environmentally-friendly building practices with modern technologies for smart and efficient structures.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
        </svg>,
    link: '/services'
  }, {
    title: 'Biogas Technology',
    description: 'Converting organic waste into clean energy with custom biogas solutions for homes, farms, and businesses.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
        </svg>,
    link: '/services'
  }, {
    title: 'Advanced Hydroponics',
    description: 'Revolutionary farming techniques using the latest hydroponic technologies for sustainable food production.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
        </svg>,
    link: '/services'
  }];
  const departments = [{
    title: 'Al-Tayseer Solar',
    description: 'Cutting-edge solar solutions including on-grid, off-grid, hybrid systems, and industrial electricity installations.',
    image: '/public/assets/3.png',
    link: '/services'
  }, {
    title: 'Al-Tayseer Biogas',
    description: 'Innovative biogas solutions for homes, farms, and businesses, including bio-toilets and waste management systems.',
    image: 'public/assets/1.png',
    link: '/services'
  }, {
    title: 'Al-Tayseer Envirotech',
    description: 'Advanced hydroponic systems (NFT, DWC, Dutch bucket, fodder units) and wastewater treatment solutions.',
    image: '/public/assets/2.png',
    link: '/services'
  }, {
    title: 'Al-Tayseer Construction',
    description: 'Green building design, contracting services, and implementation of smart construction technologies.',
    image: '/public/assets/4.png',
    link: '/services'
  }];
  return <Layout>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-tayseer-black">
          {/* Background image with overlay */}
          <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80')"
        }}></div>
        </div>
        <div className="container-max relative z-10 text-center px-4">
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
            Building a Sustainable Future
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in">
            Innovative solutions in renewable energy, green construction, and environmental technology
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in">
            <Link to="/services" className="btn-primary">
              Explore Our Services
            </Link>
            <Link to="/contact" className="btn-secondary">
              Get in Touch
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
          <a href="#about" className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding section-light">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle title="Pioneering Sustainable Solutions" subtitle="Leading the way in renewable energy and green technologies" />
              <p className="text-gray-600 mb-6">
                At Al-Tayseer International Co., we are committed to creating a sustainable future through innovative technologies and solutions. With our four specialized departments, we offer comprehensive services in renewable energy, sustainable construction, and environmental technology.
              </p>
              <p className="text-gray-600 mb-6">
                Our team of experts combines years of experience with cutting-edge knowledge to deliver tailored solutions that meet the unique needs of our clients while minimizing environmental impact.
              </p>
              <Link to="/about" className="btn-primary inline-block">
                Learn More About Us
              </Link>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src="https://images.unsplash.com/photo-1508515803898-7bb2d7703093?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1334&q=80" alt="Sustainable Solutions" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding section-gray">
        <div className="container-max">
          <SectionTitle title="Our Services" subtitle="Specialized solutions for a sustainable future" centered={true} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => <ServiceCard key={index} title={service.title} description={service.description} icon={service.icon} link={service.link} />)}
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="section-padding section-dark">
        <div className="container-max">
          <SectionTitle title="Our Departments" subtitle="Specialized teams delivering excellence in their fields" centered={true} light={true} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {departments.map((department, index) => <DepartmentCard key={index} title={department.title} description={department.description} image={department.image} link={department.link} />)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding section-light relative overflow-hidden">
        <div className="absolute inset-0 bg-tayseer-orange/10"></div>
        <div className="container-max relative z-10">
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to start your sustainable journey?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Contact us today to discuss how our innovative solutions can help you achieve your sustainability goals and reduce your environmental impact.
            </p>
            <Link to="/contact" className="btn-primary">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </Layout>;
};
export default Index;