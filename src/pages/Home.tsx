import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, BookOpen, Lightbulb, Users } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between md:gap-8">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Build Your Financial Future with PesaSmart
              </h1>
              <p className="text-xl mb-8">
                The ultimate financial literacy platform for Kenyan youth and college students.
                Learn, invest, and grow your wealth in a fun and engaging way.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/register"
                  className="px-6 py-3 bg-white text-green-700 font-semibold rounded-lg shadow hover:bg-gray-100 text-center"
                >
                  Get Started
                </Link>
                <Link
                  to="/learn"
                  className="px-6 py-3 bg-green-800 text-white font-semibold rounded-lg shadow hover:bg-green-900 text-center"
                >
                  Explore Lessons
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Students learning about finance"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose PesaSmart?</h2>
            <p className="mt-4 text-xl text-gray-600">
              We make financial literacy fun, relevant, and accessible for Kenyan youth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Learn</h3>
              <p className="text-gray-600">
                Interactive lessons on saving, investing, and financial planning tailored for Kenyan youth
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Invest</h3>
              <p className="text-gray-600">
                Explore M-Pesa, money market funds, and other Kenyan investment opportunities
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Lightbulb className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Startup Hub</h3>
              <p className="text-gray-600">
                Connect with investors and get resources to turn your business ideas into reality
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-gray-600">
                Join a community of like-minded Kenyan youth passionate about financial growth
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">What Our Users Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">
                "PesaSmart helped me understand how to save using M-Pesa and invest in money market funds. I've already started building my emergency fund!"
              </p>
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1507152832244-10d45c7eda57?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
                  alt="User"
                  className="w-10 h-10 rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold">Wanjiku M.</p>
                  <p className="text-sm text-gray-500">University of Nairobi</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">
                "The startup resources helped me refine my business idea and connect with an angel investor. Now my tech startup is taking off!"
              </p>
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
                  alt="User"
                  className="w-10 h-10 rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold">David O.</p>
                  <p className="text-sm text-gray-500">Strathmore University</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">
                "The quizzes and games make learning about finance fun! I never thought I'd enjoy learning about budgeting and investing."
              </p>
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
                  alt="User"
                  className="w-10 h-10 rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold">Amina K.</p>
                  <p className="text-sm text-gray-500">Kenyatta University</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Build Your Financial Future?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join thousands of Kenyan youth who are taking control of their finances and building wealth with PesaSmart.
          </p>
          <Link
            to="/register"
            className="px-8 py-4 bg-white text-green-700 font-semibold rounded-lg shadow hover:bg-gray-100 inline-block"
          >
            Create Your Free Account
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;