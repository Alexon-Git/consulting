import './App.css';
import Header from './components/header/Header';
import About from './pages/about/About';
import Faqs from './pages/faqs/Faqs';
import Main from './pages/main/Main';
import Question from './pages/question/Question';
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
    </>
  );
}

export default App;
