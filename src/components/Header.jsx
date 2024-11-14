import { useState } from 'react';
import logo from '../assets/logo.svg';

export function Header() {
  const [activeLink, setActiveLink] = useState("Página Inicial");

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
          className={linkClasses("Página Inicial")}
          onClick={() => handleClick("Página Inicial", "header")}
        >
          <span>Página Inicial</span>
          <span className={underlineClasses("Página Inicial")}></span>
        </p>
        <p 
          className={linkClasses("Sabores")}
          onClick={() => handleClick("Sabores", "sabores")}
        >
          <span>Sabores</span>
          <span className={underlineClasses("Sabores")}></span>
        </p>
        <p 
          className={linkClasses("Sobre")}
          onClick={() => handleClick("Sobre", "sobre")}
        >
          <span>Sobre</span>
          <span className={underlineClasses("Sobre")}></span>
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