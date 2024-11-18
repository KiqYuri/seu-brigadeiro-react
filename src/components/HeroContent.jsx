export function HeroContent() {
  return (
    <section className="bg-white	w-[85.375rem]" id="hero-content">
      <div id="hero-content-left" className="flex flex-col items-start gap-4">
        <h2 className="text-[3.75rem] font-bold leading-tight">
          Encontre o
          <div className="relative w-[361px] h-[90px] bg-[#794735] rotate-[-12deg] px-10 py-2 rounded-full mt-2">
            <p className="text-[#FFFFFF] text-[3.625rem] leading-[120%] tracking-[0%] text-center">Brigadeiro</p>
          </div>
          da sua preferência.
        </h2>
        <p className="text-base text-gray-700">
          O doce queridinho de todo mundo, agora com sabores novos. Receitas que agradam os mais diferentes gostos.
        </p>
        <button className="px-6 py-3 bg-[#794735] text-white rounded-lg text-lg font-medium hover:bg-[#633924]">
          Peça Já
        </button>
      </div>

      <div id="hero-content-right">

      </div>
    </section>
  )
}