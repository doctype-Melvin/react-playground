import React from "react";
import ReactDOM from "react-dom/client";
import './App.css'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Contact from "./components/Contact";
import img1 from './assets/pexels-ihsan-adityawarman-1056251.jpg'
import img2 from './assets/pexels-pixabay-57416.jpg'
import img3 from "./assets/pexels-pixabay-104827.jpg"
import img4 from "./assets/pexels-pixabay-416160.jpg"


function Page(){
  return (
    <div className="contacts">
      {/* <Header />
      <Main />  
      <Footer /> */}
      <Contact 
      img={img1}
      name="Mr Fluffers"
      phone="040 588 9675"
      email="fluffers@kitten.com"
      />
      <Contact 
      img={img2}
      name="Ms Beans"
      phone="040 877 0021"
      email="ms.beans@kitten.com"
      />
      <Contact 
      img={img3}
      name="Whiskin"
      phone="040 501 9809"
      email="whiskin@kitten.com"
      />
      <Contact 
      img={img4}
      name="Anton"
      phone="040 343 8709"
      email="anton@kitten.com"
      />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Page />)