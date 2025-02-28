import React, { createContext, useState, useContext, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface User {
  id: string;
  name: string;
  email: string;
  goals: string[];
  investmentPreferences: string[];
}

interface UserContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const isAuthenticated = !!user;

  const navigate = useNavigate()

  const login = async (email: string, password: string): Promise<boolean> => {
    // Mock login - in a real app, this would call an API
    if (email && password) {
      setUser({
        id: '1',
        name: 'John Doe',
        email,
        goals: ['Save for university', 'Start a business'],
        investmentPreferences: ['Low risk', 'Tech startups']
      });
      return true;
    }
    return false;
  };

  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    // Mock registration - in a real app, this would call an API
    if (name && email && password) {
      setUser({
        id: '1',
        name,
        email,
        goals: [],
        investmentPreferences: []
      });
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    navigate('/')
  };

  return (
    <UserContext.Provider value={{ user, setUser, isAuthenticated, login, register, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};