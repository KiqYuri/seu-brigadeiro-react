import React from 'react'
import imagemVantagem from '../assets/vantagem.png'
import icon1 from '../assets/icons/01.png'
import icon2 from '../assets/icons/02.png'

export function Vantagens() {
  return (
    <section className="flex flex-col lg:flex-row items-center gap-8 px-4 py-12 max-w-6xl mx-auto">
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
      <div className="w-full lg:w-1/2 space-y-6">
        <h2 className="text-3xl font-bold text-pink-600">
          Por que encomendar com a gente?
        </h2>

        {/* Vantagem 1 */}
        <div className="flex items-start gap-4">
          <img
            src={icon1}
            alt="Ícone Entrega"
            className="w-8 h-8"
          />
          <p className="text-lg">
            Conveniência e Confiança
          </p>
        </div>

        {/* Vantagem 2 */}
        <div className="flex items-start gap-4">
          <img
            src={icon2}
            alt="Ícone Cardápio"
            className="w-8 h-8"
          />
          <p className="text-lg">
            Variedade de Opções
          </p>
        </div>
      </div>
    </section>
  )
}
