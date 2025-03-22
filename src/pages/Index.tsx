import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Shield, Database, BarChart } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Index = () => {
  // Animation functionality for reveal effects
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up');
          entry.target.classList.remove('opacity-0');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.reveal');
    animatedElements.forEach(el => {
      el.classList.add('opacity-0');
      observer.observe(el);
    });

    return () => {
      animatedElements.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  const features = [
    {
      icon: <Brain className="h-6 w-6 text-primary" />,
      title: "AI-Powered Assessment",
      description: "Our machine learning model analyzes responses to detect patterns associated with autism spectrum conditions."
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Privacy Focused",
      description: "Your data is secure and private. We follow strict protocols to ensure confidentiality of all information."
    },
    {
      icon: <Database className="h-6 w-6 text-primary" />,
      title: "Research Backed",
      description: "Built on established research and validated screening methods for accurate early detection."
    },
    {
      icon: <BarChart className="h-6 w-6 text-primary" />,
      title: "Detailed Insights",
      description: "Receive comprehensive insights with actionable next steps based on assessment results."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-36 pb-20 px-4 md:pt-44 md:pb-28">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Advanced Autism Spectrum Detection Through AI
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              NeuroDetect uses advanced machine learning to provide accurate, accessible autism spectrum assessments through intuitive Q&A interactions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/assessment"
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center justify-center"
              >
                Start Assessment
                <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link 
                to="/#about"
                className="px-8 py-3 border border-border bg-secondary/50 rounded-lg font-medium hover:bg-secondary transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
          
          <div className="relative max-w-5xl mx-auto">
            <div className="rounded-xl overflow-hidden shadow-xl border border-border/50 subtle-shadow">
              <div className="aspect-video bg-gradient-to-tr from-secondary to-accent/20 flex flex-col items-center justify-center p-6">
                <div className="glass px-10 py-8 rounded-xl text-center mb-6">
                  <h2 className="text-xl font-medium mb-2">Assessment Interface</h2>
                  <p className="text-sm text-muted-foreground">Interactive Q&A system with advanced analysis</p>
                </div>
                <img 
                  src="/lovable-uploads/9ab59253-6238-4ccb-9cdb-8ac2954113d1.png" 
                  alt="Autism top early signs infographic" 
                  className="max-w-md w-full rounded-lg"
                />
              </div>
            </div>
            <div className="absolute -right-4 -bottom-4 w-1/3 h-1/2 bg-gradient-to-tr from-primary/10 to-accent/30 rounded-xl -z-10"></div>
            <div className="absolute -left-4 -top-4 w-1/4 h-1/3 bg-gradient-to-bl from-primary/5 to-secondary rounded-xl -z-10"></div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-secondary/50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <div className="relative">
                <div className="rounded-xl overflow-hidden border border-border/50 shadow-sm">
                  <div className="aspect-square bg-gradient-to-br from-accent/20 to-secondary"></div>
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 glass p-6 rounded-xl w-4/5 border border-white/20 shadow-lg">
                  <h3 className="text-lg font-medium mb-2">Why Early Detection Matters</h3>
                  <p className="text-sm text-muted-foreground">
                    Early identification of autism spectrum conditions can lead to better outcomes through timely intervention and support strategies.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="reveal">
              <h2 className="text-3xl font-bold mb-6">Our Approach</h2>
              <p className="text-muted-foreground mb-6">
                empathiQ combines behavioral science with advanced machine learning to create an accessible screening tool for autism spectrum conditions. Our approach focuses on analyzing response patterns to identify indicators that may suggest further professional assessment.
              </p>
              <p className="text-muted-foreground mb-6">
                Developed by a team of healthcare professionals and AI specialists, our system is designed to be a preliminary screening tool, not a replacement for clinical diagnosis.
              </p>
              <Link 
                to="/assessment" 
                className="inline-flex items-center text-primary font-medium hover:underline"
              >
                Take the assessment
                <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-16 reveal">
            <h2 className="text-3xl font-bold mb-4">Key Features</h2>
            <p className="text-muted-foreground">
              Our platform combines cutting-edge technology with clinical expertise to provide a comprehensive screening experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={feature.title} 
                className="reveal border border-border/50 rounded-xl p-6 hover:shadow-sm transition-all hover:border-border bg-white"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary/5 border-y border-border/50">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-3xl mx-auto text-center reveal">
            <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
            <p className="text-muted-foreground mb-8">
              Create an account to take the assessment and track your results over time, or learn more about our methodology.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/auth?mode=signup"
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Create Account
              </Link>
              <Link 
                to="/assessment"
                className="px-8 py-3 border border-border bg-secondary/50 rounded-lg font-medium hover:bg-secondary transition-colors"
              >
                Try Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
