
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BarChart2, 
  Calendar, 
  FileText, 
  User, 
  Settings, 
  ArrowRight,
  Download,
  Share2,
  Clock,
  AlertCircle,
  CheckCircle
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart2 },
    { id: 'assessments', label: 'Assessments', icon: FileText },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];
  
  // Mock data for the dashboard
  const recentAssessment = {
    date: 'July 15, 2023',
    score: 68,
    duration: '12 minutes',
    status: 'Completed',
    indicators: [
      { name: 'Social Interaction', value: 75, flag: false },
      { name: 'Communication', value: 62, flag: false },
      { name: 'Restricted Interests', value: 48, flag: true },
      { name: 'Sensory Sensitivity', value: 85, flag: true },
    ],
  };
  
  const recommendations = [
    'Consider consulting with a specialist for a comprehensive evaluation',
    'Review detailed assessment results with your healthcare provider',
    'Explore resources for understanding sensory sensitivities',
    'Consider follow-up assessment in 6 months to track changes',
  ];
  
  const upcomingAssessments = [
    { id: 1, name: 'Follow-up Assessment', date: 'December 15, 2023', type: 'Standard' },
  ];
  
  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="glass p-6 rounded-xl">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">Assessment Score</h3>
                    <p className="text-3xl font-bold">{recentAssessment.score}/100</p>
                  </div>
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <BarChart2 size={20} className="text-primary" />
                  </div>
                </div>
                <p className="text-xs text-muted-foreground flex items-center">
                  <Clock size={12} className="mr-1" />
                  Last updated {recentAssessment.date}
                </p>
              </div>
              
              <div className="glass p-6 rounded-xl">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">Assessments Completed</h3>
                    <p className="text-3xl font-bold">1</p>
                  </div>
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <CheckCircle size={20} className="text-primary" />
                  </div>
                </div>
                <p className="text-xs text-muted-foreground flex items-center">
                  <Clock size={12} className="mr-1" />
                  First assessment on {recentAssessment.date}
                </p>
              </div>
              
              <div className="glass p-6 rounded-xl">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">Next Assessment</h3>
                    <p className="text-3xl font-bold">Dec 15</p>
                  </div>
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Calendar size={20} className="text-primary" />
                  </div>
                </div>
                <p className="text-xs text-muted-foreground flex items-center">
                  <Clock size={12} className="mr-1" />
                  Follow-up assessment scheduled
                </p>
              </div>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Recent Assessment Results</h2>
              <div className="glass p-6 rounded-xl">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h3 className="font-medium">Assessment on {recentAssessment.date}</h3>
                    <p className="text-sm text-muted-foreground">Duration: {recentAssessment.duration}</p>
                  </div>
                  <div className="flex space-x-2">
                    <button className="p-2 text-muted-foreground hover:text-foreground rounded-md">
                      <Download size={18} />
                    </button>
                    <button className="p-2 text-muted-foreground hover:text-foreground rounded-md">
                      <Share2 size={18} />
                    </button>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm font-medium mb-3">Key Indicators</h4>
                  <div className="space-y-4">
                    {recentAssessment.indicators.map((indicator) => (
                      <div key={indicator.name}>
                        <div className="flex justify-between items-center mb-1">
                          <div className="flex items-center">
                            <span className="text-sm">{indicator.name}</span>
                            {indicator.flag && (
                              <AlertCircle size={14} className="ml-1 text-destructive" />
                            )}
                          </div>
                          <span className="text-sm font-medium">{indicator.value}%</span>
                        </div>
                        <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                          <div 
                            className={`h-full ${
                              indicator.flag ? 'bg-destructive/80' : 'bg-primary/80'
                            }`} 
                            style={{ width: `${indicator.value}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium mb-3">Recommendations</h4>
                  <ul className="space-y-2">
                    {recommendations.map((recommendation, index) => (
                      <li key={index} className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs mr-2 mt-0.5">
                          {index + 1}
                        </div>
                        <span className="text-sm">{recommendation}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Upcoming Assessments</h2>
                <Link 
                  to="/assessment" 
                  className="text-sm text-primary hover:underline flex items-center"
                >
                  Take new assessment
                  <ArrowRight size={14} className="ml-1" />
                </Link>
              </div>
              
              {upcomingAssessments.length > 0 ? (
                <div className="glass p-6 rounded-xl">
                  {upcomingAssessments.map((assessment) => (
                    <div key={assessment.id} className="flex justify-between items-center">
                      <div>
                        <h3 className="font-medium">{assessment.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {assessment.date} • {assessment.type}
                        </p>
                      </div>
                      <button className="px-4 py-2 bg-primary text-primary-foreground text-sm rounded-md hover:bg-primary/90 transition-colors">
                        Schedule
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="glass p-6 rounded-xl text-center">
                  <p className="text-muted-foreground">No upcoming assessments scheduled.</p>
                  <Link 
                    to="/assessment" 
                    className="mt-2 inline-block px-4 py-2 bg-primary text-primary-foreground text-sm rounded-md hover:bg-primary/90 transition-colors"
                  >
                    Take New Assessment
                  </Link>
                </div>
              )}
            </div>
          </div>
        );
        
      case 'assessments':
        return (
          <div className="glass p-6 rounded-xl text-center py-12 animate-fade-in">
            <h3 className="text-xl font-medium mb-2">Assessment History</h3>
            <p className="text-muted-foreground mb-6">View and manage your previous assessments.</p>
            <p className="text-muted-foreground">This feature is coming soon.</p>
          </div>
        );
        
      case 'profile':
        return (
          <div className="glass p-6 rounded-xl text-center py-12 animate-fade-in">
            <h3 className="text-xl font-medium mb-2">User Profile</h3>
            <p className="text-muted-foreground mb-6">Manage your personal information and preferences.</p>
            <p className="text-muted-foreground">This feature is coming soon.</p>
          </div>
        );
        
      case 'settings':
        return (
          <div className="glass p-6 rounded-xl text-center py-12 animate-fade-in">
            <h3 className="text-xl font-medium mb-2">Account Settings</h3>
            <p className="text-muted-foreground mb-6">Configure your account settings and notifications.</p>
            <p className="text-muted-foreground">This feature is coming soon.</p>
          </div>
        );
        
      default:
        return null;
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 py-28 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Welcome, Alex</h1>
            <p className="text-muted-foreground">
              Here's an overview of your assessment results and recommendations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <div className="glass rounded-xl overflow-hidden sticky top-28">
                <div className="p-6 border-b border-border/50">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="font-medium text-primary">A</span>
                    </div>
                    <div>
                      <h3 className="font-medium">Alex Johnson</h3>
                      <p className="text-xs text-muted-foreground">alex@example.com</p>
                    </div>
                  </div>
                </div>
                
                <nav className="p-3">
                  {tabs.map((tab) => {
                    const Icon = tab.icon;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`w-full text-left px-3 py-2 rounded-md flex items-center transition-colors mb-1 ${
                          activeTab === tab.id
                            ? 'bg-primary/10 text-primary'
                            : 'hover:bg-secondary text-foreground/80'
                        }`}
                      >
                        <Icon size={18} className="mr-3" />
                        <span>{tab.label}</span>
                      </button>
                    );
                  })}
                </nav>
                
                <div className="p-6 border-t border-border/50 mt-2">
                  <Link
                    to="/assessment"
                    className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:bg-primary/90 transition-colors flex items-center justify-center"
                  >
                    New Assessment
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-3">
              {renderTabContent()}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
