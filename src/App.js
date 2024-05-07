import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import About from './pages/about/About';
import Experts from './pages/experts/Experts';
import Faqs from './pages/faqs/Faqs';
import InputApplication from './pages/input_application/InputApplication';
import Main from './pages/main/Main';
import Partners from './pages/partners/Partners';
import Project from './pages/project/Project';
import Question from './pages/question/Question';
import Reviews from './pages/reviews/Reviews';
import Sector from './pages/sector/Sector';

function App() {
  return (
    <>
    <Header/>
    <Main/>
    <Faqs/>
    <Sector/>
    <Question/>
    <About/>
    <Experts/>
    <Project/>
    <Partners/>
    {/* <Reviews/> */}
    <InputApplication/>
    <Footer/>
    </>
  );
}

export default App;
