import './App.css';
import Academies from './components/Academies';
import Footer from './components/Footer';
import Header from './components/Header';
import Join from './components/Join';
import Programs from './components/Programs';

function App() {
  return (
    <div className="App">
      <Header />
      <Programs />
      <Academies />
      <Join />
      <Footer />
    </div>
  );
}

export default App;