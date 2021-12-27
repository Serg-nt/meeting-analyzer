import React from 'react'
import './App.css'
import {Header} from "./components/Header/Header";
import {MeetingPage} from "./components/Meeting/MeetingPage";

function App() {
  return (
      <div className='app-wrapper'>
          <Header />
          <div className='app-wrapper-content'>
              <MeetingPage />
          </div>
      </div>
  );
}

export default App;
