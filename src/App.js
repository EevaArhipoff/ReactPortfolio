import React from 'react';
import './App.css';
import Header from './components/Header.js';
import EducationalBackground from './components/EducationalBackground';
import PersonalInfo from './components/PersonalInfo';
import Projects from './components/Projects';
import WorkExperience from './components/WorkExperience';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <PersonalInfo />
      <Projects />
      <EducationalBackground />
      <WorkExperience />
      <Footer />
    </div>
  );
}

export default App;
