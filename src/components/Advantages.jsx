import React from 'react'
import advantageImage from '../assets/vantagem.png'
import iconDelivery from '../assets/icons/01.png'
import iconMenu from '../assets/icons/02.png'

export function Advantages() {
  return (
    <section id="vantagens" className="flex flex-col lg:flex-row items-center gap-8 lg:gap-[180px] px-4 sm:px-6 py-12 max-w-6xl mx-auto">
      {/* Left - Image */}
      <div className="w-full lg:w-1/2">
        <div className="overflow-hidden rounded-2xl border shadow-md">
          <img
            src={advantageImage}
            alt="Imagem representando nossas vantagens"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Right - Text content */}
      <div className="w-full lg:w-1/2">
        <h2 className="text-[28px] sm:text-[34px] font-bold text-black mb-6 text-center lg:text-left">
          Por que encomendar com a gente?
        </h2>

        <div className="flex flex-col space-y-10">
          {/* Advantage 1 */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-4 bg-white rounded-2xl shadow-md text-center sm:text-left">
            <div className="w-[90px] h-[90px] bg-white rounded-full shadow-md flex items-center justify-center flex-shrink-0">
              <img
                src={iconDelivery}
                alt="Ícone Entrega"
                className="w-10 h-10 object-contain"
              />
            </div>

            <div className="flex flex-col space-y-2">
              <h3 className="text-[22px] sm:text-[28px] font-semibold text-black">
                Conveniência e Confiança
              </h3>
              <p className="text-[18px] sm:text-[20px] font-medium text-gray-600">
                Comodidade e segurança em cada entrega.
              </p>
            </div>
          </div>

          {/* Advantage 2 */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-4 bg-white rounded-2xl shadow-md text-center sm:text-left">
            <div className="w-[90px] h-[90px] bg-white rounded-full shadow-md flex items-center justify-center flex-shrink-0">
              <img
                src={iconMenu}
                alt="Ícone Cardápio"
                className="w-10 h-10 object-contain"
              />
            </div>

            <div className="flex flex-col space-y-2">
              <h3 className="text-[22px] sm:text-[28px] font-semibold text-black">
                Variedade de Opções
              </h3>
              <p className="text-[18px] sm:text-[20px] font-medium text-gray-600">
                Opções pra todos os gostos e momentos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
