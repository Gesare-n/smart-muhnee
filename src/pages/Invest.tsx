import React, { useState } from 'react';
import { TrendingUp, DollarSign, PieChart, BarChart4, Calculator } from 'lucide-react';

interface InvestmentOption {
  id: string;
  name: string;
  description: string;
  riskLevel: string;
  returnRange: string;
  minInvestment: string;
  icon: React.ReactNode;
}

interface SimulationResult {
  years: number[];
  values: number[];
  totalInvested: number;
  totalReturn: number;
  returnPercentage: number;
}

const Invest: React.FC = () => {
  const [activeTab, setActiveTab] = useState('options');
  const [amount, setAmount] = useState(1000);
  const [years, setYears] = useState(5);
  const [rate, setRate] = useState(10);
  const [simulationResult, setSimulationResult] = useState<SimulationResult | null>(null);
  
  const investmentOptions: InvestmentOption[] = [
    {
      id: 'mmf',
      name: 'Money Market Funds',
      description: 'Low-risk investment funds that invest in short-term debt securities. Popular in Kenya for beginners.',
      riskLevel: 'Low',
      returnRange: '8-12% annually',
      minInvestment: 'KES 500',
      icon: <DollarSign className="h-6 w-6 text-green-600" />
    },
    {
      id: 'sacco',
      name: 'SACCO Shares',
      description: 'Savings and Credit Cooperative Organizations offer shares and dividends to members.',
      riskLevel: 'Low-Medium',
      returnRange: '10-15% annually',
      minInvestment: 'KES 1,000',
      icon: <PieChart className="h-6 w-6 text-green-600" />
    },
    {
      id: 'stocks',
      name: 'NSE Stocks',
      description: 'Shares of companies listed on the Nairobi Securities Exchange.',
      riskLevel: 'Medium-High',
      returnRange: '5-20% annually',
      minInvestment: 'Varies by stock',
      icon: <TrendingUp className="h-6 w-6 text-green-600" />
    },
    {
      id: 'tbills',
      name: 'Treasury Bills & Bonds',
      description: 'Government securities with fixed interest rates.',
      riskLevel: 'Low',
      returnRange: '7-13% annually',
      minInvestment: 'KES 50,000',
      icon: <BarChart4 className="h-6 w-6 text-green-600" />
    }
  ];
  
  const runSimulation = () => {
    const yearArray = Array.from({ length: years + 1 }, (_, i) => i);
    const valueArray = yearArray.map(year => {
      return Math.round(amount * Math.pow(1 + rate / 100, year));
    });
    
    const totalInvested = amount;
    const totalReturn = valueArray[years];
    const returnPercentage = ((totalReturn - totalInvested) / totalInvested) * 100;
    
    setSimulationResult({
      years: yearArray,
      values: valueArray,
      totalInvested,
      totalReturn,
      returnPercentage
    });
  };
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Investment Opportunities</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Explore investment options available to Kenyan youth and simulate your potential returns.
        </p>
      </div>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
        <div className="flex border-b">
          <button
            className={`px-6 py-3 font-medium ${activeTab === 'options' ? 'bg-green-50 text-green-700 border-b-2 border-green-500' : 'text-gray-600'}`}
            onClick={() => setActiveTab('options')}
          >
            Investment Options
          </button>
          <button
            className={`px-6 py-3 font-medium ${activeTab === 'simulator' ? 'bg-green-50 text-green-700 border-b-2 border-green-500' : 'text-gray-600'}`}
            onClick={() => setActiveTab('simulator')}
          >
            Investment Simulator
          </button>
          <button
            className={`px-6 py-3 font-medium ${activeTab === 'platforms' ? 'bg-green-50 text-green-700 border-b-2 border-green-500' : 'text-gray-600'}`}
            onClick={() => setActiveTab('platforms')}
          >
            Investment Platforms
          </button>
        </div>
        
        <div className="p-6">
          {activeTab === 'options' && (
            <div className="grid md:grid-cols-2 gap-6">
              {investmentOptions.map((option) => (
                <div key={option.id} className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-green-100 p-2 rounded-full mr-3">
                      {option.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{option.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{option.description}</p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-500">Risk Level</p>
                      <p className="font-medium">{option.riskLevel}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Expected Returns</p>
                      <p className="font-medium">{option.returnRange}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Minimum Investment</p>
                      <p className="font-medium">{option.minInvestment}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {activeTab === 'simulator' && (
            <div className="md:flex">
              <div className="md:w-1/2 md:pr-6">
                <h3 className="text-xl font-semibold mb-4">Investment Growth Calculator</h3>
                <p className="text-gray-600 mb-6">
                  See how your investment could grow over time with compound interest.
                </p>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Initial Investment (KES)
                    </label>
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(Number(e.target.value))}
                      className="w-full p-2 border border-gray-300 rounded-md"
                      min="100"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Annual Return Rate (%)
                    </label>
                    <input
                      type="number"
                      value={rate}
                      onChange={(e) => setRate(Number(e.target.value))}
                      className="w-full p-2 border border-gray-300 rounded-md"
                      min="1"
                      max="30"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Investment Period (Years)
                    </label>
                    <input
                      type="number"
                      value={years}
                      onChange={(e) => setYears(Number(e.target.value))}
                      className="w-full p-2 border border-gray-300 rounded-md"
                      min="1"
                      max="50"
                    />
                  </div>
                </div>
                
                <button
                  className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                  onClick={runSimulation}
                >
                  Calculate Returns
                </button>
              </div>
              
              <div className="md:w-1/2 md:pl-6 mt-8 md:mt-0">
                {simulationResult && (
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-lg mb-4">Simulation Results</h4>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-white p-4 rounded-md shadow-sm">
                        <p className="text-gray-500 text-sm">Initial Investment</p>
                        <p className="font-semibold text-xl">KES {simulationResult.totalInvested.toLocaleString()}</p>
                      </div>
                      <div className="bg-white p-4 rounded-md shadow-sm">
                        <p className="text-gray-500 text-sm">Final Value</p>
                        <p className="font-semibold text-xl">KES {simulationResult.totalReturn.toLocaleString()}</p>
                      </div>
                      <div className="bg-white p-4 rounded-md shadow-sm">
                        <p className="text-gray-500 text-sm">Total Growth</p>
                        <p className="font-semibold text-xl">KES {(simulationResult.totalReturn - simulationResult.totalInvested).toLocaleString()}</p>
                      </div>
                      <div className="bg-white p-4 rounded-md shadow-sm">
                        <p className="text-gray-500 text-sm">Return Rate</p>
                        <p className="font-semibold text-xl">{simulationResult.returnPercentage.toFixed(2)}%</p>
                      </div>
                    </div>
                    
                    <div className="bg-white p-4 rounded-md shadow-sm">
                      <h5 className="font-medium mb-2">Year-by-Year Growth</h5>
                      <div className="space-y-2">
                        {simulationResult.years.map((year, index) => (
                          <div key={year} className="flex justify-between items-center">
                            <span>Year {year}</span>
                            <span className="font-medium">KES {simulationResult.values[index].toLocaleString()}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                
                {!simulationResult && (
                  <div className="flex flex-col items-center justify-center h-full bg-gray-50 p-8 rounded-lg">
                    <Calculator className="h-12 w-12 text-green-500 mb-4" />
                    <p className="text-gray-600 text-center">
                      Enter your investment details and click "Calculate Returns" to see your potential growth.
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
          
          {activeTab === 'platforms' && (
            <div>
              <h3 className="text-xl font-semibold mb-6">Popular Investment Platforms in Kenya</h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="border border-gray-200 rounded-lg p-6">
                  <h4 className="font-semibold text-lg mb-2">M-Pesa</h4>
                  <p className="text-gray-600 mb-4">
                    Use M-Pesa to invest in government securities through M-Akiba and save with M-Shwari.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      <span>Accessible to all M-Pesa users</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      <span>Low minimum investment (KES 300)</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      <span>Easy to use mobile interface</span>
                    </li>
                  </ul>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-6">
                  <h4 className="font-semibold text-lg mb-2">Money Market Funds</h4>
                  <p className="text-gray-600 mb-4">
                    Popular funds include CIC, Cytonn, Sanlam, and Britam Money Market Funds.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      <span>Low risk with good returns</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      <span>Accessible online and via mobile</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      <span>No lock-in periods</span>
                    </li>
                  </ul>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-6">
                  <h4 className="font-semibold text-lg mb-2">Stock Trading Apps</h4>
                  <p className="text-gray-600 mb-4">
                    Apps like EasyEquities and AIB-AXYS allow you to buy shares on the NSE.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      <span>Trade from your smartphone</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      <span>Educational resources included</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      <span>Real-time market data</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                <h4 className="font-semibold text-lg mb-2">Important Note</h4>
                <p className="text-gray-700">
                  All investments carry risk. Before investing, research thoroughly and consider consulting with a financial advisor. Start with small amounts as you learn.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <div className="bg-green-700 text-white rounded-lg p-8 shadow-md">
        <div className="md:flex items-center">
          <div className="md:w-2/3 mb-6 md:mb-0 md:pr-6">
            <h2 className="text-2xl font-bold mb-4">Ready to Start Investing?</h2>
            <p className="text-lg">
              Create an account to track your investments, set goals, and get personalized recommendations based on your risk profile.
            </p>
          </div>
          <div className="md:w-1/3 text-center">
            <button className="px-6 py-3 bg-white text-green-700 font-semibold rounded-lg shadow hover:bg-gray-100">
              Create Investment Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invest;