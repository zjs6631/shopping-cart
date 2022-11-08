import Header from './components/Header';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { Home } from './components/Home';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
