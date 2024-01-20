import { useLayoutEffect} from 'react';

import Layout from './component/Layout';
import Navbar from './component/Navbar';

function App() {
  useLayoutEffect(()=>{

    const hamburger = document.querySelector(".hamburger");
  const links = document.querySelector(".nav-links");

  const handleClick = () => {
    hamburger.classList.toggle("toggle");
    links.classList.toggle("open");
  };

  if (hamburger && links) {
    hamburger.addEventListener("click", handleClick);
  } else {
    console.error("Hamburger or Links not found");
  }

  return () => {
    // Cleanup: Remove the event listener when the component unmounts
    if (hamburger) {
      hamburger.removeEventListener("click", handleClick);
    }
  };


  },[]);
  return (
    <main > 
      <Navbar/>
      <Layout/>  
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#" target="_blank">Rishabh Singh</a>.
        
      </div>
    </main>
  );
}

export default App;
