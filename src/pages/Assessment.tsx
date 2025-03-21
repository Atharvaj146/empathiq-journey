
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, HelpCircle, Clock } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Question, { QuestionType } from '../components/Question';

// Sample questions for demonstration
const sampleQuestions: QuestionType[] = [
  {
    id: '1',
    text: 'I find social situations easy to navigate.',
    options: [
      { id: '1a', text: 'Strongly Agree' },
      { id: '1b', text: 'Agree' },
      { id: '1c', text: 'Neutral' },
      { id: '1d', text: 'Disagree' },
      { id: '1e', text: 'Strongly Disagree' },
    ],
  },
  {
    id: '2',
    text: 'I prefer to do things on my own rather than with others.',
    options: [
      { id: '2a', text: 'Strongly Agree' },
      { id: '2b', text: 'Agree' },
      { id: '2c', text: 'Neutral' },
      { id: '2d', text: 'Disagree' },
      { id: '2e', text: 'Strongly Disagree' },
    ],
  },
  {
    id: '3',
    text: 'I find it easy to "read between the lines" when someone is talking to me.',
    options: [
      { id: '3a', text: 'Strongly Agree' },
      { id: '3b', text: 'Agree' },
      { id: '3c', text: 'Neutral' },
      { id: '3d', text: 'Disagree' },
      { id: '3e', text: 'Strongly Disagree' },
    ],
  },
  {
    id: '4',
    text: 'I find it hard to know what to do in a social situation.',
    options: [
      { id: '4a', text: 'Strongly Agree' },
      { id: '4b', text: 'Agree' },
      { id: '4c', text: 'Neutral' },
      { id: '4d', text: 'Disagree' },
      { id: '4e', text: 'Strongly Disagree' },
    ],
  },
  {
    id: '5',
    text: 'I often notice small sounds when others do not.',
    options: [
      { id: '5a', text: 'Strongly Agree' },
      { id: '5b', text: 'Agree' },
      { id: '5c', text: 'Neutral' },
      { id: '5d', text: 'Disagree' },
      { id: '5e', text: 'Strongly Disagree' },
    ],
  },
];

const Assessment = () => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [timeRemaining, setTimeRemaining] = useState<number | null>(null);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  useEffect(() => {
    // Calculate estimated time based on number of questions (30 seconds per question)
    const estimatedTime = sampleQuestions.length * 30;
    setTimeRemaining(estimatedTime);
    
    // Start the timer
    const timer = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime === null || prevTime <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  const handleAnswer = (questionId: string, optionId: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: optionId,
    }));
    
    // Auto-advance after a short delay
    setTimeout(() => {
      if (currentQuestionIndex < sampleQuestions.length - 1) {
        setCurrentQuestionIndex((prev) => prev + 1);
      } else {
        setIsCompleted(true);
      }
    }, 500);
  };
  
  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };
  
  const handleNext = () => {
    if (currentQuestionIndex < sampleQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };
  
  const handleSubmit = () => {
    setIsSubmitting(true);
    
    // Simulate submission and processing
    setTimeout(() => {
      navigate('/dashboard');
    }, 2000);
  };
  
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };
  
  const progress = (Object.keys(answers).length / sampleQuestions.length) * 100;
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 py-28 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="bg-white border border-border/50 rounded-xl shadow-sm p-6 md:p-10 animate-fade-in">
            {!isCompleted ? (
              <>
                <div className="mb-10">
                  <div className="flex items-center justify-between mb-2">
                    <h1 className="text-2xl font-bold">Autism Spectrum Assessment</h1>
                    <div className="flex items-center text-muted-foreground">
                      <Clock size={16} className="mr-1" />
                      <span className="text-sm">
                        {timeRemaining !== null && formatTime(timeRemaining)}
                      </span>
                    </div>
                  </div>
                  
                  {/* Progress bar */}
                  <div className="w-full h-1.5 bg-secondary rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary transition-all duration-500" 
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>Progress</span>
                    <span>{Math.round(progress)}%</span>
                  </div>
                </div>
                
                {/* Current question */}
                {sampleQuestions.map((question, index) => (
                  <Question
                    key={question.id}
                    question={question}
                    onAnswer={handleAnswer}
                    selectedOption={answers[question.id]}
                    isActive={index === currentQuestionIndex}
                    index={index}
                    total={sampleQuestions.length}
                  />
                ))}
                
                {/* Navigation */}
                <div className="mt-12 flex justify-between">
                  <button 
                    onClick={handlePrevious}
                    disabled={currentQuestionIndex === 0}
                    className={`flex items-center px-4 py-2 rounded-md ${
                      currentQuestionIndex === 0
                        ? 'text-muted-foreground cursor-not-allowed'
                        : 'hover:bg-secondary transition-colors'
                    }`}
                  >
                    <ChevronLeft size={18} className="mr-1" />
                    Previous
                  </button>
                  
                  <button
                    onClick={handleNext}
                    disabled={currentQuestionIndex === sampleQuestions.length - 1}
                    className={`flex items-center px-4 py-2 rounded-md ${
                      currentQuestionIndex === sampleQuestions.length - 1
                        ? 'text-muted-foreground cursor-not-allowed'
                        : 'hover:bg-secondary transition-colors'
                    }`}
                  >
                    Next
                    <ChevronRight size={18} className="ml-1" />
                  </button>
                </div>
              </>
            ) : (
              <div className="text-center py-10 animate-scale-in">
                <h2 className="text-2xl font-bold mb-4">Assessment Complete</h2>
                <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                  Thank you for completing the assessment. Your responses have been recorded and will be analyzed.
                </p>
                
                <div className="mb-8">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <HelpCircle size={32} className="text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    You answered {Object.keys(answers).length} out of {sampleQuestions.length} questions.
                  </p>
                </div>
                
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center justify-center mx-auto"
                >
                  {isSubmitting ? (
                    <div className="h-5 w-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin mr-2"></div>
                  ) : null}
                  View Results
                </button>
              </div>
            )}
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Need assistance? <a href="#" className="text-primary hover:underline">Contact support</a>
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Assessment;
