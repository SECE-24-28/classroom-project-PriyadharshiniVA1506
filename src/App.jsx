import React from "react";
import RectangleBox from "./rectangle-box/rectangle-box-component";
import Mycomponent from "./Galance/galance-component";
import ContactSection from "./Contact/ContactSection";
import OurPromisesComponent from "./our-promises/our-promises";
import TrustedbyComponent from "./trusted-by/trusted-by-component";
// import College from "./college/college-component.jsx";
import NotFound from "./NotFound";
import FetchApiComponent from "./fetch-api/fetch-api-component";
import UseEffectPracticeTwo from "./use-effect-practice/use-effect-practice-2";
import { Routes, Route } from "react-router-dom";
//import UseStateComponent  from "./usestate/use-state-component.jsx";
import AdditionOperationComponent   from "./addition-operation-in-state/addition-operation-component.jsx";



function App() {
  return (
    <Routes>
      {/* Main sections */}
      <Route path="/" element={<RectangleBox />} />
      <Route path="/galance" element={<Mycomponent />} />
      <Route path="/trusted-by" element={<TrustedbyComponent />} />
      <Route path="/our-promises" element={<OurPromisesComponent />} />
      <Route path="/contact" element={<ContactSection />} />
      {/* <Route path="/college" element={<College />} /> */}

      {/* Practice pages */}
      <Route path="/api-fetch" element={<FetchApiComponent />} />
      <Route path="/use-effect-practice-2" element={<UseEffectPracticeTwo />} />
      <Route path="/addition-operation" element={<AdditionOperationComponent />} />

      
      {/* 404 Page */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;