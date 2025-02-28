import React, { useState } from 'react';
import { Lightbulb, Users, CheckCircle, Calendar, ExternalLink } from 'lucide-react';

interface StartupEvent {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  link: string;
}

interface InvestorOpportunity {
  id: string;
  name: string;
  focus: string;
  investmentRange: string;
  description: string;
  website: string;
}

interface ChecklistItem {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

const StartupHub: React.FC = () => {
  const [activeTab, setActiveTab] = useState('checklist');
  const [checklist, setChecklist] = useState<ChecklistItem[]>([
    {
      id: '1',
      title: 'Define Your Value Proposition',
      description: 'Clearly articulate what problem your startup solves and how it&apos;s different from existing solutions.',
      completed: false
    },
    {
      id: '2',
      title: 'Conduct Market Research',
      description: 'Research your target market, competitors, and potential customers to validate your idea.',
      completed: false
    },
    {
      id: '3',
      title: 'Create a Minimum Viable Product (MVP)',
      description: 'Develop a basic version of your product to test with early users and gather feedback.',
      completed: false
    },
    {
      id: '4',
      title: 'Develop a Business Model',
      description: 'Define how your startup will make money and create a sustainable business.',
      completed: false
    },
    {
      id: '5',
      title: 'Build a Pitch Deck',
      description: 'Create a compelling presentation that explains your business to potential investors.',
      completed: false
    },
    {
      id: '6',
      title: 'Register Your Business',
      description: 'Register your business with the appropriate government authorities in Kenya.',
      completed: false
    },
    {
      id: '7',
      title: 'Set Up Financial Systems',
      description: 'Establish proper accounting and financial tracking for your business.',
      completed: false
    },
    {
      id: '8',
      title: 'Create a Marketing Strategy',
      description: 'Develop a plan to reach your target customers and promote your product or service.',
      completed: false
    }
  ]);
  
  const events: StartupEvent[] = [
    {
      id: '1',
      title: 'Nairobi Tech Week',
      date: 'June 15-18, 2025',
      location: 'Nairobi, Kenya',
      description: 'Kenya&apos;s largest tech event bringing together startups, investors, and tech enthusiasts.', //
      link: 'https://nairobistartupweek.com'
    },
    {
      id: '2',
      title: 'Africa Startup Summit',
      date: 'July 10-12, 2025',
      location: 'Kigali, Rwanda',
      description: 'A pan-African event showcasing the continent&apos;s most promising startups.', //
      link: 'https://africastartupsummit.com'
    },
    {
      id: '3',
      title: 'iHub Pitch Night',
      date: 'Monthly (Last Thursday)',
      location: 'iHub, Nairobi',
      description: 'Monthly pitch competition for early-stage startups to present to investors.',
      link: 'https://ihub.co.ke/events'
    },
    {
      id: '4',
      title: 'Google for Startups Accelerator Africa',
      date: 'Applications open Q1 2025',
      location: 'Virtual/Lagos',
      description: 'Three-month accelerator program for seed to Series A tech startups in Africa.',
      link: 'https://developers.google.com/community/accelerator'
    }
  ];
  
  const investors: InvestorOpportunity[] = [
    {
      id: '1',
      name: 'Savannah Fund',
      focus: 'Tech startups in East Africa',
      investmentRange: '$25,000 - $500,000',
      description: 'Seed capital fund specializing in early-stage high-growth technology startups in sub-Saharan Africa.',
      website: 'https://savannah.vc'
    },
    {
      id: '2',
      name: 'Novastar Ventures',
      focus: 'Businesses improving access to basic goods/services',
      investmentRange: '$100,000 - $5 million',
      description: 'Venture capital firm that invests in businesses with the potential to transform consumer markets.',
      website: 'https://novastarventures.com'
    },
    {
      id: '3',
      name: 'Kepple Africa Ventures',
      focus: 'Tech startups across Africa',
      investmentRange: '$50,000 - $150,000',
      description: 'Japanese venture capital firm actively investing in early-stage tech startups across Africa.',
      website: 'https://kepple.africa'
    },
    {
      id: '4',
      name: 'Villgro Africa',
      focus: 'Healthcare innovations',
      investmentRange: '$20,000 - $60,000',
      description: 'Early-stage impact investor supporting healthcare innovations in Africa.',
      website: 'https://villgroafrica.org'
    }
  ];
  
  const toggleChecklistItem = (id: string) => {
    setChecklist(checklist.map(item => 
      item.id === id ? { ...item, completed: !item.completed } : item
    ));
  };
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Startup Hub</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Resources, opportunities, and guidance to help Kenyan youth turn their business ideas into reality.
        </p>
      </div>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
        <div className="flex border-b overflow-x-auto">
          <button
            className={`px-6 py-3 font-medium whitespace-nowrap ${activeTab === 'checklist' ? 'bg-green-50 text-green-700 border-b-2 border-green-500' : 'text-gray-600'}`}
            onClick={() => setActiveTab('checklist')}
          >
            Startup Checklist
          </button>
          <button
            className={`px-6 py-3 font-medium whitespace-nowrap ${activeTab === 'investors' ? 'bg-green-50 text-green-700 border-b-2 border-green-500' : 'text-gray-600'}`}
            onClick={() => setActiveTab('investors')}
          >
            Investor Opportunities
          </button>
          <button
            className={`px-6 py-3 font-medium whitespace-nowrap ${activeTab === 'events' ? 'bg-green-50 text-green-700 border-b-2 border-green-500' : 'text-gray-600'}`}
            onClick={() => setActiveTab('events')}
          >
            Startup Events
          </button>
          <button
            className={`px-6 py-3 font-medium whitespace-nowrap ${activeTab === 'resources' ? 'bg-green-50 text-green-700 border-b-2 border-green-500' : 'text-gray-600'}`}
            onClick={() => setActiveTab('resources')}
          >
            Resources
          </button>
        </div>
        
        <div className="p-6">
          {activeTab === 'checklist' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold">Startup Launch Checklist</h3>
                <div className="text-sm text-gray-500">
                  {checklist.filter(item => item.completed).length} of {checklist.length} completed
                </div>
              </div>
              
              <div className="space-y-4">
                {checklist.map((item) => (
                  <div 
                    key={item.id} 
                    className={`border rounded-lg p-4 ${item.completed ? 'bg-green-50 border-green-200' : 'border-gray-200'}`}
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-0.5">
                        <button
                          onClick={() => toggleChecklistItem(item.id)}
                          className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                            item.completed 
                              ? 'bg-green-500 border-green-500 text-white' 
                              : 'border-gray-300'
                          }`}
                        >
                          {item.completed && <CheckCircle className="w-4 h-4" />}
                        </button>
                      </div>
                      <div className="ml-3">
                        <h4 className={`font-medium ${item.completed ? 'line-through text-gray-500' : 'text-gray-900'}`}>
                          {item.title}
                        </h4>
                        <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-lg mb-2">Pro Tip</h4>
                <p className="text-gray-700">
                  Before approaching investors, ensure you have a working prototype and some evidence of market traction. Kenyan investors typically look for startups that have validated their business model with real customers.
                </p>
              </div>
            </div>
          )}
          
          {activeTab === 'investors' && (
            <div>
              <h3 className="text-xl font-semibold mb-6">Investor Opportunities in Kenya</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                {investors.map((investor) => (
                  <div key={investor.id} className="border border-gray-200 rounded-lg p-6">
                    <h4 className="font-semibold text-lg mb-1">{investor.name}</h4>
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
                        {investor.focus}
                      </span>
                      <span className="mx-2">•</span>
                      <span>{investor.investmentRange}</span>
                    </div>
                    <p className="text-gray-600 mb-4">{investor.description}</p>
                    <a 
                      href={investor.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-800 flex items-center"
                    >
                      Visit Website <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold text-lg mb-4">How to Approach Investors</h4>
                <ul className="space-y-3">
                  <li className="flex">
                    <span className="bg-green-200 text-green-800 w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">1</span>
                    <span>Research the investor to ensure your startup aligns with their investment focus</span>
                  </li>
                  <li className="flex">
                    <span className="bg-green-200 text-green-800 w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">2</span>
                    <span>Prepare a concise pitch deck (10-15 slides) highlighting your solution, market, traction, and team</span>
                  </li>
                  <li className="flex">
                    <span className="bg-green-200 text-green-800 w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">3</span>
                    <span>Try to get a warm introduction through your network rather than cold outreach</span>
                  </li>
                  <li className="flex">
                    <span className="bg-green-200 text-green-800 w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">4</span>
                    <span>Be prepared to demonstrate how your business can scale across Kenya and beyond</span>
                  </li>
                </ul>
              </div>
            </div>
          )}
          
          {activeTab === 'events' && (
            <div>
              <h3 className="text-xl font-semibold mb-6">Upcoming Startup Events</h3>
              
              <div className="space-y-6">
                {events.map((event) => (
                  <div key={event.id} className="border border-gray-200 rounded-lg p-6">
                    <div className="md:flex md:justify-between md:items-start">
                      <div>
                        <h4 className="font-semibold text-lg mb-1">{event.title}</h4>
                        <div className="flex items-center text-sm text-gray-500 mb-3">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>{event.date}</span>
                          <span className="mx-2">•</span>
                          <span>{event.location}</span>
                        </div>
                        <p className="text-gray-600">{event.description}</p>
                      </div>
                      <a 
                        href={event.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="mt-4 md:mt-0 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 inline-flex items-center"
                      >
                        Learn More <ExternalLink className="w-4 h-4 ml-1" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <button className="px-6 py-3 border border-green-600 text-green-600 rounded-md hover:bg-green-50">
                  View All Events
                </button>
              </div>
            </div>
          )}
          
          {activeTab === 'resources' && (
            <div>
              <h3 className="text-xl font-semibold mb-6">Startup Resources</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-4">Incubators & Accelerators</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="bg-green-100 p-1 rounded-full mr-3 mt-0.5">
                        <Lightbulb className="w-4 h-4 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium">iHub</p>
                        <p className="text-sm text-gray-600">Nairobi's premier tech hub offering workspace, events, and startup support.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-green-100 p-1 rounded-full mr-3 mt-0.5">
                        <Lightbulb className="w-4 h-4 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium">Nailab</p>
                        <p className="text-sm text-gray-600">Business incubator offering 3-6 month programs for early-stage startups.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-green-100 p-1 rounded-full mr-3 mt-0.5">
                        <Lightbulb className="w-4 h-4 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium">Villgro Kenya</p>
                        <p className="text-sm text-gray-600">Incubator and investor focused on healthcare innovations.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-green-100 p-1 rounded-full mr-3 mt-0.5">
                        <Lightbulb className="w-4 h-4 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium">GrowthAfrica</p>
                        <p className="text-sm text-gray-600">Accelerator for post-revenue businesses looking to scale.</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-4">Startup Competitions</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="bg-green-100 p-1 rounded-full mr-3 mt-0.5">
                        <Users className="w-4 h-4 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium">Hult Prize</p>
                        <p className="text-sm text-gray-600">Annual competition for university students with a $1M prize.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-green-100 p-1 rounded-full mr-3 mt-0.5">
                        <Users className="w-4 h-4 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium">MEST Africa Challenge</p>
                        <p className="text-sm text-gray-600">Pan-African tech startup competition with equity investment prize.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-green-100 p-1 rounded-full mr-3 mt-0.5">
                        <Users className="w-4 h-4 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium">Seedstars World</p>
                        <p className="text-sm text-gray-600">Global competition for emerging markets with investment prizes.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-green-100 p-1 rounded-full mr-3 mt-0.5">
                        <Users className="w-4 h-4 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium">Tony Elumelu Foundation</p>
                        <p className="text-sm text-gray-600">Entrepreneurship program offering mentorship and seed capital.</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg md:col-span-2">
                  <h4 className="font-semibold text-lg mb-4">Free Business Resources</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <a href="#" className="block p-4 border border-gray-200 rounded-md hover:bg-green-50 hover:border-green-200">
                      <h5 className="font-medium mb-1">Business Plan Template</h5>
                      <p className="text-sm text-gray-600">Customized for Kenyan startups with local market considerations.</p>
                    </a>
                    <a href="#" className="block p-4 border border-gray-200 rounded-md hover:bg-green-50 hover:border-green-200">
                      <h5 className="font-medium mb-1">Pitch Deck Guide</h5>
                      <p className="text-sm text-gray-600">How to create a compelling pitch for Kenyan investors.</p>
                    </a>
                    <a href="#" className="block p-4 border border-gray-200 rounded-md hover:bg-green-50 hover:border-green-200">
                      <h5 className="font-medium mb-1">Financial Projections</h5>
                      <p className="text-sm text-gray-600">Excel templates for creating startup financial forecasts.</p>
                    </a>
                    <a href="#" className="block p-4 border border-gray-200 rounded-md hover:bg-green-50 hover:border-green-200">
                      <h5 className="font-medium mb-1">Legal Guide</h5>
                      <p className="text-sm text-gray-600">Basic legal requirements for registering a business in Kenya.</p>
                    </a>
                    <a href="#" className="block p-4 border border-gray-200 rounded-md hover:bg-green-50 hover:border-green-200">
                      <h5 className="font-medium mb-1">Marketing Toolkit</h5>
                      <p className="text-sm text-gray-600">Resources for digital marketing on a budget.</p>
                    </a>
                    <a href="#" className="block p-4 border border-gray-200 rounded-md hover:bg-green-50 hover:border-green-200">
                      <h5 className="font-medium mb-1">Networking Directory</h5>
                      <p className="text-sm text-gray-600">List of startup communities and networking events in Kenya.</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-green-600 to-green-800 text-white rounded-lg p-8 shadow-md">
        <div className="md:flex items-center">
          <div className="md:w-2/3 mb-6 md:mb-0 md:pr-6">
            <h2 className="text-2xl font-bold mb-4">Need Personalized Guidance?</h2>
            <p className="text-lg">
              Connect with mentors who have successfully built startups in Kenya. Get advice tailored to your specific business idea and challenges.
            </p>
          </div>
          <div className="md:w-1/3 text-center">
            <button className="px-6 py-3 bg-white text-green-700 font-semibold rounded-lg shadow hover:bg-gray-100">
              Find a Mentor
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartupHub;