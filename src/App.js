import React from "react";
import "./App.css"

import Header from "./components/Header"
//import HeroBanner from './components/HeroBanner'
//import Sidebar from "./components/Sidebar";
import CommunityOwner from "./components/CommunityOwner"
import CommunityGroups from "./components/CommunityGroups"
import FAQ from './components/FAQ'

import BottomNav from "./components/BottomNav";



function App() {


  return (
    <div className="App">

      <div className="MainContent">
        <Header />
        <CommunityOwner />
        <CommunityGroups />
        <FAQ />
      </div>

      <BottomNav />
    </div>
  );
}

export default App;