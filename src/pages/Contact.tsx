import React from "react";
import Layout from "../components/layout/Layout";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";

const ContactForm: React.FC = () => {
  return (
      <Layout>
        {/* Hero Section */}
        <section className="relative h-[500px] flex items-center justify-center">
          <div className="absolute inset-0 bg-tayseer-black">
            <div
                className="absolute inset-0 bg-cover bg-center opacity-40"
                style={{
                  backgroundImage:
                      "url('/assets/contact-hero.jpg')",
                }}
            ></div>
          </div>
          <div className="container-max relative z-10 text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              We're here to answer your questions and discuss your next project
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <div className="bg-tayseer-light-gray min-h-screen pt-24">
          <div className="section-padding">
            <div className="container-max">
              {/* Main Content */}
              <div className="max-w-4xl mx-auto">
                <Card className="shadow-lg border-0">
                  <CardContent className="p-8">
                    <div className="text-center mb-8">
                      <h2 className="text-2xl font-heading font-semibold text-tayseer-black mb-4">
                        Send us a message
                      </h2>
                      <p className="text-tayseer-gray">
                        Fill out the form below and we'll get back to you as soon as possible
                      </p>
                    </div>

                    {/* Contact Form */}
                    <form
                        action="https://formsubmit.co/ali.ta.odeh@gmail.com"
                        method="POST"
                        className="space-y-6"
                    >
                      <input type="hidden" name="_captcha" value="false" />
                      <input type="hidden" name="_template" value="table" />

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-medium text-tayseer-black mb-2">
                            First Name *
                          </label>
                          <input
                              type="text"
                              id="firstName"
                              name="firstName"
                              required
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tayseer-orange focus:border-transparent transition-colors"
                              placeholder="Enter your first name"
                          />
                        </div>

                        <div>
                          <label htmlFor="lastName" className="block text-sm font-medium text-tayseer-black mb-2">
                            Last Name *
                          </label>
                          <input
                              type="text"
                              id="lastName"
                              name="lastName"
                              required
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tayseer-orange focus:border-transparent transition-colors"
                              placeholder="Enter your last name"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-tayseer-black mb-2">
                          Email Address *
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tayseer-orange focus:border-transparent transition-colors"
                            placeholder="Enter your email address"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-tayseer-black mb-2">
                          Phone Number
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tayseer-orange focus:border-transparent transition-colors"
                            placeholder="Enter your phone number"
                        />
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-tayseer-black mb-2">
                          Subject *
                        </label>
                        <input
                            type="text"
                            id="subject"
                            name="_subject"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tayseer-orange focus:border-transparent transition-colors"
                            placeholder="What is this regarding?"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-tayseer-black mb-2">
                          Message *
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            rows={6}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tayseer-orange focus:border-transparent transition-colors resize-vertical"
                            placeholder="Tell us about your project or inquiry..."
                        ></textarea>
                      </div>

                      <div className="text-center">
                        <Button
                            type="submit"
                            className="bg-tayseer-orange hover:bg-orange-600 text-white font-medium py-3 px-8 rounded-lg transition-colors"
                        >
                          Send Message
                        </Button>
                      </div>
                    </form>

                    {/* Contact Information */}
                    <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
                      <div className="space-y-2">
                        <div className="w-12 h-12 bg-tayseer-orange rounded-full flex items-center justify-center mx-auto mb-4">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <h3 className="font-heading font-semibold text-tayseer-black">Email</h3>
                        <p className="text-tayseer-gray">info@al-tayseer.ps</p>
                      </div>

                      <div className="space-y-2">
                        <div className="w-12 h-12 bg-tayseer-orange rounded-full flex items-center justify-center mx-auto mb-4">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <h3 className="font-heading font-semibold text-tayseer-black">Phone</h3>
                        <p className="text-tayseer-gray">+970 (595) 563-555</p>
                        <p className="text-tayseer-gray">+970 (592) 026-163</p>
                      </div>

                      <div className="space-y-2">
                        <div className="w-12 h-12 bg-tayseer-orange rounded-full flex items-center justify-center mx-auto mb-4">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <h3 className="font-heading font-semibold text-tayseer-black">Address</h3>
                        <p className="text-tayseer-gray">Palestine, Tulkarm, New Courts Quarter</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </Layout>
  );
};

export default ContactForm;
