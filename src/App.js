import './App.css';
import About from './pages/Block/About';
import Contact from './pages/Block/Contact';
import Interests from './pages/Block/Interests';
import Navigation from './pages/Block/Navigation';
import Project from './pages/Block/Project';
import Header from './pages/Header';
import useLoader from './hook/useLoader';
import Loader from './loader/index';

function App() {
  const {loading} = useLoader()
  if (loading){
    return <Loader/>
  }
  document.title = 'My project';
  return (
    <div className="App">
      <Header/>
      <Navigation/>
      <About/>
      <Project/>
      <Interests/>
      <Contact/>
    </div>
  );
}

export default App;
