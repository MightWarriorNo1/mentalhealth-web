import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/layout/Header';
import OnboardingPage from './pages/OnboardingPage';
import DashboardPage from './pages/DashboardPage';
import ChatPage from './pages/ChatPage';
import ModulesPage from './pages/ModulesPage';
import CoachingPage from './pages/CoachingPage';

function App() {
  // For demo purposes, we'll simulate a new user who hasn't completed onboarding
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = React.useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-slate-50 flex flex-col">
        {hasCompletedOnboarding && <Header />}
        
        <main className="flex-1">
          <Routes>
            <Route path="/" element={
              hasCompletedOnboarding 
                ? <Navigate to="/dashboard\" replace /> 
                : <OnboardingPage />
            } />
            
            <Route 
              path="/dashboard" 
              element={
                hasCompletedOnboarding 
                  ? <DashboardPage /> 
                  : <Navigate to="/\" replace />
              } 
            />
            
            <Route 
              path="/chat" 
              element={
                hasCompletedOnboarding 
                  ? <ChatPage /> 
                  : <Navigate to="/\" replace />
              } 
            />
            
            <Route 
              path="/modules" 
              element={
                hasCompletedOnboarding 
                  ? <ModulesPage /> 
                  : <Navigate to="/\" replace />
              } 
            />
            
            <Route 
              path="/coaching" 
              element={
                hasCompletedOnboarding 
                  ? <CoachingPage /> 
                  : <Navigate to="/\" replace />
              } 
            />
            
            <Route path="*" element={<Navigate to="/\" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;