import React from 'react'
import imagemVantagem from '../assets/vantagem.png'
import icon1 from '../assets/icons/01.png'
import icon2 from '../assets/icons/02.png'

export function Vantagens() {
  return (
    <section id='vantagens' className="flex flex-col lg:flex-row items-center gap-8 lg:gap-[85px] px-4 py-12 max-w-6xl mx-auto">
      {/* Imagem à esquerda */}
      <div className="w-full lg:w-1/2">
        <div className="overflow-hidden rounded-2xl border shadow-md">
          <img
            src={imagemVantagem}
            alt="Imagem representando nossas vantagens"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Conteúdo à direita */}
      <div className="w-full lg:w-1/2">
        <h2 className="text-[34px] font-bold text-black mb-6">
          Por que encomendar com a gente?
        </h2>

        <div className="flex flex-col space-y-[45px]">
          {/* Vantagem 1 */}
          <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-md">
            <div className="w-[90px] h-[90px] bg-white rounded-full shadow-md flex items-center justify-center">
              <img
                src={icon1}
                alt="Ícone Entrega"
                className="w-10 h-10 object-contain"
              />
            </div>

            {/* Textos em coluna */}
            <div className="flex flex-col space-y-2">
              <h3 className="text-[28px] font-semibold text-black">
                Conveniência e Confiança
              </h3>
              <p className="text-[20px] font-medium text-gray-600">
                Comodidade e segurança em cada entrega.
              </p>
            </div>
          </div>

          {/* Vantagem 2 */}
          <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-md">
            <div className="w-[90px] h-[90px] bg-white rounded-full shadow-md flex items-center justify-center">
              <img
                src={icon2}
                alt="Ícone Cardápio"
                className="w-10 h-10 object-contain"
              />
            </div>

            {/* Textos em coluna */}
            <div className="flex flex-col space-y-2">
              <h3 className="text-[28px] font-semibold text-black">
                Variedade de Opções
              </h3>
              <p className="text-[20px] font-medium text-gray-600">
                Opções pra todos os gostos e momentos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
