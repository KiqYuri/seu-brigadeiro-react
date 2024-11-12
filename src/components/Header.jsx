import styles from './Header.module.css';
import logo from '../assets/logo.svg';

export function Header() {
  return (
    <header id="header" className="flex items-center justify-between p-6">
      <img src={logo} alt="Logo da Loja Seu Brigadeiro" className="h-12 w-auto" />
      <nav>
        <ul className="flex gap-20 text-lg font-bold text-gray-800">
          <li>
            <a href="#header" className="text-[#794735] hover:text-[#65342d]">Página Inicial</a>
          </li>
          <li>
            <a href="#sobre" className="hover:text-[#65342d]">Sobre</a>
          </li>
          <li>
            <a href="#sabores" className="hover:text-[#65342d]">Sabores</a>
          </li>
          <li>
            <a href="#redes-sociais" className="hover:text-[#65342d]">Redes Sociais</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
