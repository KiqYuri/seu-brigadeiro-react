import { Header } from './components/Header.jsx';
import { HeroContent } from './components/HeroContent.jsx';
import { Advantages } from './components/Advantages.jsx';
import { EmblaCarousel } from './components/EmblaCarousel.jsx';
import InstagramEmbed from './components/InstagramEmbed.jsx';

function App() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 bg-background-img opacity-30 z-[-1]"></div>
      <Header />
      <HeroContent />
      <Advantages />
      <h2 id='redes-sociais' className='text-[34px] font-bold text-black mb-6 justify-center flex'>Direto do nosso Instagram 📸</h2>
      <InstagramEmbed />
      <h2 className='text-[34px] font-bold text-black mb-6 justify-center flex'>Mais Vendidos 🔥</h2>
      <EmblaCarousel />
    </div>
  );
}

export default App;