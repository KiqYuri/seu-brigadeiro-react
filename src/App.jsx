import { Header } from './components/Header.jsx';

function App() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 bg-background-img opacity-50"></div>
      <main className="relative z-10">
        <Header />
      </main>
    </div>
  );
}

export default App;
