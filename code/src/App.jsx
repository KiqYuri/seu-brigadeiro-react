import { Header } from './components/Header.jsx';
import { EmblaCarousel } from './components/EmblaCarousel.jsx';

function App() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 bg-background-img opacity-30"></div>
      <Header />
      
      <EmblaCarousel />



    </div>
  );
}

export default App;