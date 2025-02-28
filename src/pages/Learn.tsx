import React, { useState } from 'react';
import { BookOpen, DollarSign, TrendingUp, Shield } from 'lucide-react';

interface Module {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  lessons: Lesson[];
}

interface Lesson {
  id: string;
  title: string;
  duration: string;
  completed?: boolean;
}

interface Quiz {
  question: string;
  options: string[];
  correctAnswer: number;
}

const Learn: React.FC = () => {
  const [activeModule, setActiveModule] = useState<string | null>(null);
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  
  const modules: Module[] = [
    {
      id: 'basics',
      title: 'Financial Basics',
      description: 'Learn the fundamentals of personal finance and money management',
      icon: <BookOpen className="h-6 w-6 text-green-600" />,
      lessons: [
        { id: 'budget', title: 'Creating a Budget', duration: '15 min' },
        { id: 'savings', title: 'Saving with M-Pesa', duration: '10 min' },
        { id: 'debt', title: 'Understanding Debt', duration: '12 min' },
        { id: 'goals', title: 'Setting Financial Goals', duration: '8 min' }
      ]
    },
    {
      id: 'investing',
      title: 'Investment Basics',
      description: 'Discover how to grow your money through various investment options',
      icon: <TrendingUp className="h-6 w-6 text-green-600" />,
      lessons: [
        { id: 'mmf', title: 'Money Market Funds', duration: '15 min' },
        { id: 'stocks', title: 'NSE Stocks Basics', duration: '20 min' },
        { id: 'sacco', title: 'SACCO Investments', duration: '10 min' },
        { id: 'risk', title: 'Understanding Risk', duration: '12 min' }
      ]
    },
    {
      id: 'digital',
      title: 'Digital Finance',
      description: 'Master digital financial tools popular in Kenya',
      icon: <DollarSign className="h-6 w-6 text-green-600" />,
      lessons: [
        { id: 'mpesa', title: 'M-Pesa Advanced Features', duration: '15 min' },
        { id: 'banking', title: 'Mobile Banking Apps', duration: '12 min' },
        { id: 'crypto', title: 'Cryptocurrency Basics', duration: '18 min' },
        { id: 'security', title: 'Digital Security', duration: '10 min' }
      ]
    },
    {
      id: 'protection',
      title: 'Financial Protection',
      description: 'Learn how to protect yourself and your assets',
      icon: <Shield className="h-6 w-6 text-green-600" />,
      lessons: [
        { id: 'insurance', title: 'Insurance Basics', duration: '15 min' },
        { id: 'scams', title: 'Avoiding Financial Scams', duration: '12 min' },
        { id: 'emergency', title: 'Emergency Funds', duration: '10 min' },
        { id: 'planning', title: 'Long-term Planning', duration: '15 min' }
      ]
    }
  ];
  
  const quizzes: Quiz[] = [
    {
      question: "Which of these is a popular mobile money service in Kenya?",
      options: ["PayPal", "M-Pesa", "Venmo", "Cash App"],
      correctAnswer: 1
    },
    {
      question: "What is a Money Market Fund?",
      options: [
        "A physical marketplace to exchange currency",
        "A low-risk investment that puts money in short-term debt securities",
        "A high-risk stock investment",
        "A government savings program"
      ],
      correctAnswer: 1
    },
    {
      question: "What percentage of your income is recommended for saving?",
      options: ["5%", "10-20%", "50%", "100%"],
      correctAnswer: 1
    },
    {
      question: "Which of these is NOT a benefit of using M-Pesa?",
      options: [
        "Convenient money transfers",
        "Bill payments",
        "Free international transfers",
        "Savings accounts"
      ],
      correctAnswer: 2
    },
    {
      question: "What does NSE stand for in Kenya?",
      options: [
        "National Savings Entity",
        "Nairobi Stock Exchange",
        "National Security Enforcement",
        "New Savings Endeavor"
      ],
      correctAnswer: 1
    }
  ];
  
  const handleModuleClick = (moduleId: string) => {
    setActiveModule(activeModule === moduleId ? null : moduleId);
  };
  
  const startQuiz = () => {
    setShowQuiz(true);
    setCurrentQuizIndex(0);
    setScore(0);
    setQuizCompleted(false);
  };
  
  const handleAnswerClick = (selectedIndex: number) => {
    if (selectedIndex === quizzes[currentQuizIndex].correctAnswer) {
      setScore(score + 1);
    }
    
    if (currentQuizIndex < quizzes.length - 1) {
      setCurrentQuizIndex(currentQuizIndex + 1);
    } else {
      setQuizCompleted(true);
    }
  };
  
  const resetQuiz = () => {
    setShowQuiz(false);
    setQuizCompleted(false);
  };
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Learn Financial Literacy</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Explore our interactive modules designed specifically for Kenyan youth to build financial knowledge and skills.
        </p>
      </div>
      
      {!showQuiz ? (
        <>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {modules.map((module) => (
              <div key={module.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div 
                  className={`p-6 cursor-pointer ${activeModule === module.id ? 'bg-green-50' : ''}`}
                  onClick={() => handleModuleClick(module.id)}
                >
                  <div className="flex items-start">
                    <div className="bg-green-100 p-3 rounded-full mr-4">
                      {module.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{module.title}</h3>
                      <p className="text-gray-600">{module.description}</p>
                    </div>
                  </div>
                </div>
                
                {activeModule === module.id && (
                  <div className="px-6 pb-6">
                    <h4 className="font-medium text-gray-700 mb-3">Lessons:</h4>
                    <ul className="space-y-3">
                      {module.lessons.map((lesson) => (
                        <li key={lesson.id} className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className={`w-4 h-4 rounded-full mr-3 ${lesson.completed ? 'bg-green-500' : 'bg-gray-200'}`}></div>
                            <span>{lesson.title}</span>
                          </div>
                          <span className="text-sm text-gray-500">{lesson.duration}</span>
                        </li>
                      ))}
                    </ul>
                    <button 
                      className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                      onClick={(e) => {
                        e.stopPropagation();
                        startQuiz();
                      }}
                    >
                      Take Quiz
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="bg-green-50 rounded-lg p-8 shadow-md">
            <h2 className="text-2xl font-bold mb-4">Did You Know?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-4 rounded-md shadow">
                <p className="font-medium mb-2">M-Pesa Fact</p>
                <p className="text-gray-600">M-Pesa processes over 1.7 billion transactions annually in Kenya, making it one of the most successful mobile money services globally.</p>
              </div>
              <div className="bg-white p-4 rounded-md shadow">
                <p className="font-medium mb-2">Investment Fact</p>
                <p className="text-gray-600">Money Market Funds in Kenya typically offer returns of 8-10% annually, much higher than regular savings accounts.</p>
              </div>
              <div className="bg-white p-4 rounded-md shadow">
                <p className="font-medium mb-2">Startup Fact</p>
                <p className="text-gray-600">Kenya is home to over 300 fintech companies, making it one of Africa's leading financial innovation hubs.</p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="bg-white rounded-lg shadow-md p-8 max-w-2xl mx-auto">
          {!quizCompleted ? (
            <>
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Question {currentQuizIndex + 1} of {quizzes.length}</span>
                  <span className="text-sm text-gray-500">Score: {score}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-green-600 h-2 rounded-full" 
                    style={{ width: `${((currentQuizIndex) / quizzes.length) * 100}%` }}
                  ></div>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-4">{quizzes[currentQuizIndex].question}</h3>
              
              <div className="space-y-3">
                {quizzes[currentQuizIndex].options.map((option, index) => (
                  <button
                    key={index}
                    className="w-full text-left p-4 border border-gray-300 rounded-md hover:bg-green-50 hover:border-green-300"
                    onClick={() => handleAnswerClick(index)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Quiz Completed!</h3>
              <p className="text-xl mb-6">Your score: {score} out of {quizzes.length}</p>
              
              {score === quizzes.length ? (
                <p className="text-green-600 font-medium mb-6">Perfect score! You're a financial whiz!</p>
              ) : score >= quizzes.length / 2 ? (
                <p className="text-green-600 font-medium mb-6">Good job! You're on your way to financial literacy.</p>
              ) : (
                <p className="text-orange-600 font-medium mb-6">Keep learning! Review the modules to improve your knowledge.</p>
              )}
              
              <button
                className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700"
                onClick={resetQuiz}
              >
                Back to Lessons
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Learn;