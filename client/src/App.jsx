import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/home/Layout';
import Projects from './components/Projects';
import { useEffect, useState } from 'react';
import Loader from './components/Loader';
import ScrollToTop from './components/common/ScrollToTop';


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    // If everything is already loaded
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  useEffect(() => {
    const tg = window.Telegram?.WebApp;

    if (tg) {
      tg.ready();
      tg.expand();
    }
  }, []);

  if (loading) {
    return <Loader />;
  }


  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;