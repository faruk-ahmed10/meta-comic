import { useState } from 'react';
import './App.css';
import 'swiper/css';

// Importing components
import Header from './components/Header';
import Hero from './components/Hero';
import Publishing from './components/Pubishing';
import TakeAlook from './components/Takealook';
import BookSlide from './components/BookSlide';
import SocialPort from './components/SocialPort';
import FeaturedMagic from './components/FeaturedMagic';
import Reality from './components/Reality';
import Team from './components/Team';
import Footer from './components/Footer';


import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {

  const [count, setCount] = useState(0)

  return (
    <div className="w-full min-h-screen bg-dark text-white">
     <Header />
     <Hero />
     <Publishing />
     <TakeAlook />
     <BookSlide />
     <SocialPort />
     <FeaturedMagic />
     <Reality/>
     <Team />
     <Footer />
    </div>
  )
}

export default App
