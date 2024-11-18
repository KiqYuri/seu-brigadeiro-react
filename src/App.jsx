import { Header } from './components/Header.jsx';
import { HeroContent } from './components/HeroContent.jsx';

function App() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 bg-background-img opacity-50"></div>
      <Header />
      <main className="relative z-10 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Conteúdo principal vai aqui */}
        <HeroContent />
      </main>
    </div>
  );
}

export default App;