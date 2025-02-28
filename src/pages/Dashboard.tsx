import React, { useState } from 'react';
import { useUser } from '../context/UserContext';
import { TrendingUp, Target, BookOpen, Lightbulb, PieChart, ArrowUpRight } from 'lucide-react';

interface FinancialGoal {
  id: string;
  name: string;
  targetAmount: number;
  currentAmount: number;
  deadline: string;
}

interface Investment {
  id: string;
  name: string;
  amount: number;
  returnRate: number;
  startDate: string;
  type: string;
}

interface LearningProgress {
  module: string;
  completed: number;
  total: number;
}

const Dashboard: React.FC = () => {
  const { user } = useUser();
  
  const [goals, setGoals] = useState<FinancialGoal[]>([
    {
      id: '1',
      name: 'Emergency Fund',
      targetAmount: 50000,
      currentAmount: 15000,
      deadline: '2025-12-31'
    },
    {
      id: '2',
      name: 'Laptop Purchase',
      targetAmount: 80000,
      currentAmount: 35000,
      deadline: '2025-08-15'
    },
    {
      id: '3',
      name: 'Business Startup',
      targetAmount: 200000,
      currentAmount: 25000,
      deadline: '2026-06-30'
    }
  ]);
  
  const [investments, setInvestments] = useState<Investment[]>([
    {
      id: '1',
      name: 'CIC Money Market Fund',
      amount: 10000,
      returnRate: 9.8,
      startDate: '2025-01-15',
      type: 'Money Market Fund'
    },
    {
      id: '2',
      name: 'Safaricom Shares',
      amount: 5000,
      returnRate: 7.5,
      startDate: '2025-02-20',
      type: 'Stocks'
    }
  ]);
  
  const learningProgress: LearningProgress[] = [
    { module: 'Financial Basics', completed: 3, total: 4 },
    { module: 'Investment Basics', completed: 1, total: 4 },
    { module: 'Digital Finance', completed: 2, total: 4 },
    { module: 'Financial Protection', completed: 0, total: 4 }
  ];
  
  const calculateTotalInvestments = () => {
    return investments.reduce((total, investment) => total + investment.amount, 0);
  };
  
  const calculateTotalSavings = () => {
    return goals.reduce((total, goal) => total + goal.currentAmount, 0);
  };
  
  const calculateCompletedLessons = () => {
    return learningProgress.reduce((total, module) => total + module.completed, 0);
  };
  
  const calculateTotalLessons = () => {
    return learningProgress.reduce((total, module) => total + module.total, 0);
  };
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, {user?.name || 'User'}!</h1>
        <p className="text-gray-600">Track your financial progress and continue your learning journey.</p>
      </div>
      
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-500 font-medium">Total Savings</h3>
            <div className="bg-green-100 p-2 rounded-full">
              <Target className="h-5 w-5 text-green-600" />
            </div>
          </div>
          <p className="text-2xl font-bold">KES {calculateTotalSavings().toLocaleString()}</p>
          <div className="mt-2 text-sm text-green-600 flex items-center">
            <ArrowUpRight className="h-4 w-4 mr-1" />
            <span>15% from last month</span>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-500 font-medium">Total Investments</h3>
            <div className="bg-blue-100 p-2 rounded-full">
              <TrendingUp className="h-5 w-5 text-blue-600" />
            </div>
          </div>
          <p className="text-2xl font-bold">KES {calculateTotalInvestments().toLocaleString()}</p>
          <div className="mt-2 text-sm text-blue-600 flex items-center">
            <ArrowUpRight className="h-4 w-4 mr-1" />
            <span>8% from last month</span>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-500 font-medium">Learning Progress</h3>
            <div className="bg-purple-100 p-2 rounded-full">
              <BookOpen className="h-5 w-5 text-purple-600" />
            </div>
          </div>
          <p className="text-2xl font-bold">{calculateCompletedLessons()}/{calculateTotalLessons()} Lessons</p>
          <div className="mt-2 text-sm text-purple-600">
            <span>{Math.round((calculateCompletedLessons() / calculateTotalLessons()) * 100)}% completed</span>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-500 font-medium">Financial Health</h3>
            <div className="bg-yellow-100 p-2 rounded-full">
              <PieChart className="h-5 w-5 text-yellow-600" />
            </div>
          </div>
          <p className="text-2xl font-bold">Good</p>
          <div className="mt-2 text-sm text-yellow-600">
            <span>3 goals in progress</span>
          </div>
        </div>
      </div>
      
      {/* Financial Goals */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Financial Goals</h2>
          <button className="text-green-600 hover:text-green-800 text-sm font-medium">+ Add New Goal</button>
        </div>
        
        <div className="space-y-6">
          {goals.map((goal) => (
            <div key={goal.id} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium">{goal.name}</h3>
                <span className="text-sm text-gray-500">Deadline: {new Date(goal.deadline).toLocaleDateString()}</span>
              </div>
              
              <div className="flex justify-between items-center text-sm mb-2">
                <span>KES {goal.currentAmount.toLocaleString()} of KES {goal.targetAmount.toLocaleString()}</span>
                <span className="font-medium">{Math.round((goal.currentAmount / goal.targetAmount) * 100)}%</span>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-green-600 h-2 rounded-full" 
                  style={{ width: `${(goal.currentAmount / goal.targetAmount) * 100}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Two Column Layout */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Investments */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">My Investments</h2>
            <button className="text-green-600 hover:text-green-800 text-sm font-medium">+ Add Investment</button>
          </div>
          
          {investments.length > 0 ? (
            <div className="space-y-4">
              {investments.map((investment) => (
                <div key={investment.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">{investment.name}</h3>
                      <p className="text-sm text-gray-500">{investment.type}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">KES {investment.amount.toLocaleString()}</p>
                      <p className="text-sm text-green-600">+{investment.returnRate}% return</p>
                    </div>
                  </div>
                  <div className="mt-2 text-xs text-gray-500">
                    Started: {new Date(investment.startDate).toLocaleDateString()}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500 mb-4">You haven't added any investments yet.</p>
              <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
                Explore Investment Options
              </button>
            </div>
          )}
          
          <div className="mt-6 text-center">
            <a href="/invest" className="text-green-600 hover:text-green-800 font-medium">
              View All Investment Options
            </a>
          </div>
        </div>
        
        {/* Learning Progress */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Learning Progress</h2>
            <a href="/learn" className="text-green-600 hover:text-green-800 text-sm font-medium">Continue Learning</a>
          </div>
          
          <div className="space-y-4">
            {learningProgress.map((module, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium">{module.module}</h3>
                  <span className="text-sm font-medium">{module.completed}/{module.total} completed</span>
                </div>
                
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-purple-600 h-2 rounded-full" 
                    style={{ width: `${(module.completed / module.total) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 bg-green-50 p-4 rounded-lg">
            <div className="flex">
              <div className="bg-green-100 p-2 rounded-full mr-4">
                <Lightbulb className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Recommended Next Lesson</h3>
                <p className="text-sm text-gray-600">Understanding Money Market Funds in Kenya</p>
                <a href="/learn" className="text-green-600 hover:text-green-800 text-sm font-medium mt-2 inline-block">
                  Start Lesson
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;