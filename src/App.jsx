import { Header } from './components/Header.jsx';
import { EmblaCarousel } from './components/EmblaCarousel.jsx';
import { Vantagens } from './components/Vantagens.jsx';

function App() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 bg-background-img opacity-30 z-[-1]"></div>
      <Header />
      <Vantagens />
    
      <EmblaCarousel />


    </div>
  );
}

export default App;