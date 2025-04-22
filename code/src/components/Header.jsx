import { useState } from 'react';
import logo from '../assets/SeuBrigadeiroLogo.png';
import cardapio from '../assets/cardapio.pdf';

export function Header() {
  const [activeLink, setActiveLink] = useState("Nosso Brigadeiro");

  const linkClasses = (link) => `
    text-[1.25rem] md:text-[1.5rem] m-6 group relative w-max cursor-pointer
    ${activeLink === link ? 'text-[#3A3A3A] font-bold' : 'text-[#000000] font-medium'}
    hover:text-[#794735]
  `;

  const underlineClasses = (link) => `
    absolute -bottom-1 left-0 transition-all h-0.5
    ${activeLink === link ? 'w-full bg-[#794735]' : 'w-0 bg-transparent group-hover:w-full group-hover:bg-[#794735]'}
  `;

  const handleClick = (link, id) => {
    setActiveLink(link);

    if (link === "Cardápio") {
      window.open(
        "https://raw.githubusercontent.com/KiqYuri/seu-brigadeiro-react/main/code/src/assets/cardapio.pdf",
        "_blank"
      );
      return;
    }

    if (id) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className='flex items-center justify-between p-6'>
      <a href="/"><img src={logo} alt="Logo da Loja Seu Brigadeiro" className="h-20 w-auto" /></a>
      <nav className="relative flex flex-wrap gap-2 justify-center md:justify-between">
        <p
          className={linkClasses("Nosso Brigadeiro")}
          onClick={() => handleClick("Nosso Brigadeiro", "hero-content")}
        >
          <span>Nosso Brigadeiro</span>
          <span className={underlineClasses("Nosso Brigadeiro")}></span>
        </p>
        <p
          className={linkClasses("Vantagens")}
          onClick={() => handleClick("Vantagens", "vantagens")}
        >
          <span>Vantagens</span>
          <span className={underlineClasses("Vantagens")}></span>
        </p>

        <p
          className={linkClasses("Cardápio")}
          onClick={() => handleClick("Cardápio", "cardapio")}
        >
          <span>Cardápio</span>
          <span className={underlineClasses("Cardápio")}></span>
        </p>
        <a
          href="https://wa.me/5511979716726"
          target="_blank"
          className={linkClasses("Faça sua Encomenda")}
        >
          <span>Faça sua Encomenda</span>
          <span className={underlineClasses("Faça sua Encomenda")}></span>
        </a>

        <p
          className={linkClasses("Redes Sociais")}
          onClick={() => handleClick("Redes Sociais", "redes-sociais")}
        >
          <span>Redes Sociais</span>
          <span className={underlineClasses("Redes Sociais")}></span>
        </p>
        <p
          className={linkClasses("Mais Vendidos")}
          onClick={() => handleClick("Mais Vendidos", "mais-vendidos")}
        >
          <span>Mais Vendidos</span>
          <span className={underlineClasses("Mais Vendidos")}></span>
        </p>
      </nav>
    </header>
  );
}
