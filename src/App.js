import logo from './logo.svg';
import React from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import Output from "./components/Output";
import Footer from "./components/Footer";

export const CertificateContext = React.createContext();

function App() {
  return (
    <CertificateContext.Provider value="QSCU approved">
      <>
       <Header/>
       <Input/>
       <Footer/> 
      </>
    </CertificateContext.Provider>
  );
}

export default App;
