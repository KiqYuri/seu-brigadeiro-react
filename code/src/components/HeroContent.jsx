import heroImage from '../assets/heroImage.jpg';

export function HeroContent() {
  return (
    <main
      id="hero-content"
      className="flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 py-12 max-w-7xl mx-auto gap-12"
    >
      {/* Lado Esquerdo */}
      <div id="left" className="w-full lg:w-1/2 space-y-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black leading-tight flex flex-wrap items-center gap-2 text-center lg:text-left">
          Encontre o
          <span className="inline-block bg-[#794735] text-white px-4 py-2 rounded-[50px]">
            Brigadeiro
          </span>
          da sua preferência.
        </h1>

        <p className="text-lg sm:text-xl text-gray-600 max-w-md mx-auto lg:mx-0 text-center lg:text-left">
          O doce queridinho de todo mundo, agora com sabores novos. Receitas que agradam os mais diferentes gostos.
        </p>

        <div className="flex justify-center lg:justify-start">
          <a
            href="https://wa.me/5511979716726"
            target="_blank"
            className="inline-block bg-[#F03328] text-white font-semibold px-6 py-3 rounded-[38px] shadow-md hover:bg-red-600 transition text-lg"
          >
            Peça Já
          </a>
        </div>
      </div>

      {/* Lado Direito */}
      <div id="right" className="w-full lg:w-1/2 mt-10 lg:mt-0">
        <div className="overflow-hidden rounded-2xl shadow-lg border">
          <img
            src={heroImage}
            alt="Bandeja com brigadeiros sortidos em diferentes sabores e coberturas"
            className="w-full h-full max-h-[400px] lg:max-h-none object-cover"
          />
        </div>
      </div>
    </main>
  );
}