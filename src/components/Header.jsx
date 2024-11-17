import { useState } from 'react';
import logo from '../assets/logo.svg';

export function Header() {
  const [activeLink, setActiveLink] = useState("Nosso Brigadeiro");

  const linkClasses = (link) => `
    text-[1.25rem] m-6 group relative w-max cursor-pointer
    ${activeLink === link ? 'text-[#3A3A3A] font-bold' : 'text-[#000000] font-medium'}
    hover:text-[#794735]
  `;

  const underlineClasses = (link) => `
    absolute -bottom-1 left-0 transition-all h-0.5 
    ${activeLink === link ? 'w-full bg-[#794735]' : 'w-0 bg-transparent group-hover:w-full group-hover:bg-[#794735]'}
  `;

  const handleClick = (link, id) => {
    setActiveLink(link);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className='flex items-center justify-between p-6'>
      <img src={logo} alt="Logo da Loja Seu Brigadeiro" className="h-12 w-auto" />
      <nav className="relative flex justify-between flex-wrap gap-3">
        <p 
          className={linkClasses("Nosso Brigadeiro")}
          onClick={() => handleClick("Nosso Brigadeiro", "header")}
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
          className={linkClasses("Sabores")}
          onClick={() => handleClick("Sabores", "sabores")}
        >
          <span>Sabores</span>
          <span className={underlineClasses("Sabores")}></span>
        </p>
        <p 
          className={linkClasses("Depoimentos")}
          onClick={() => handleClick("Depoimentos", "depoimentos")}
        >
          <span>Depoimentos</span>
          <span className={underlineClasses("Depoimentos")}></span>
        </p>
        <p 
          className={linkClasses("Faça sua Encomenda")}
          onClick={() => handleClick("Faça sua Encomenda", "encomenda")}
        >
          <span>Faça sua Encomenda</span>
          <span className={underlineClasses("Faça sua Encomenda")}></span>
        </p>
        <p 
          className={linkClasses("Redes Sociais")}
          onClick={() => handleClick("Redes Sociais", "redes-sociais")}
        >
          <span>Redes Sociais</span>
          <span className={underlineClasses("Redes Sociais")}></span>
        </p>
      </nav>
    </header>
  );
}