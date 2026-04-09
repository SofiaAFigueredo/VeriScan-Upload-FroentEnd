import Image from 'next/image'
import IaPessoaImg from '../../../public/IaPessoa.png'

export function Inicial() {
  return (
    <>
      {/*
       * ── SEÇÃO 1: Título + Card ─────────────────────────────────────────────
       * Desktop (lg+): layout em 2 colunas — título/imagem à esquerda, card à direita.
       * Mobile: apenas título + card empilhados verticalmente (imagem vai para a seção 2).
       *
       * `h-screen` faz essa seção ocupar exatamente uma viewport de altura.
       */}
      <section className="relative overflow-hidden h-screen bg-[#C8F0F0]">
        <div className="container mx-auto h-full px-6 lg:px-8">

          <article className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 h-full items-center">

            {/* ── COLUNA ESQUERDA (desktop): título + imagem ancorada na base ── */}
            <div className="relative h-full flex flex-col">

              {/* Título — visível em todas as telas */}
              <div className="mt-10 lg:mt-20 flex-shrink-0">
                <h1 className="font-semibold text-3xl md:text-4xl lg:text-5xl leading-tight">
                  Saiba qual imagem é real
                  <span className="mt-2 flex items-center">
                    e qual é{' '}
                    <b className="text-white bg-[#7860E1] px-2 py-1 rounded-md ml-2 font-semibold">
                      modificada
                    </b>
                  </span>
                </h1>
              </div>

              {/*
               * Imagem — visível APENAS no desktop (hidden no mobile).
               * No mobile ela aparece na seção 2 abaixo do card.
               * `absolute bottom-0` ancora na base da coluna, criando o efeito
               * de "emergir" da parte inferior da tela.
               */}
              <div className="hidden lg:block absolute bottom-0 left-0 w-full">
                <Image
                  src={IaPessoaImg}
                  alt="Robô e humano com dúvidas sobre imagens modificadas"
                  quality={100}
                  priority
                  sizes="45vw"
                  className="
                    w-[clamp(300px,42vw,620px)]
                    h-auto
                    object-contain
                  "
                />
              </div>

            </div>

            {/*
             * ── COLUNA DIREITA (desktop) / Abaixo do título (mobile): card de upload ──
             *
             * Desktop: centralizado verticalmente via `items-center` do grid pai.
             * Mobile: aparece logo abaixo do título, centralizado na tela.
             *
             * O card NÃO tem hover/cursor — apenas o botão interno é interativo.
             */}
            <div className="flex items-center justify-center lg:justify-start">
              <div
                className="
                  bg-white
                  w-full max-w-sm lg:max-w-md
                  min-h-[180px] lg:min-h-[220px]
                  rounded-3xl border-2 border-gray-300 shadow-lg
                  flex flex-col items-center justify-center
                  gap-5 px-8 py-8
                "
              >
                {/* Botão — único elemento interativo do card */}
                <button className="
                  bg-[#D8ADEB] hover:bg-[#c99fe0] active:scale-95
                  transition-all duration-200
                  rounded-3xl px-6 py-4 w-full
                  font-semibold text-xl lg:text-2xl text-white
                  cursor-pointer
                ">
                  Faça upload
                </button>

                <p className="font-semibold text-xl lg:text-2xl text-gray-800">
                  Ou arraste sua imagem
                </p>
              </div>
            </div>

          </article>
        </div>
      </section>

      {/*
       * ── SEÇÃO 2 (mobile only): Imagem ─────────────────────────────────────
       * Visível APENAS no mobile — `lg:hidden` remove no desktop.
       * No desktop a imagem já aparece dentro da seção 1 (coluna esquerda).
       *
       * `h-[50vh]` dá espaço generoso para a imagem sem ocupar tela inteira.
       * `flex items-end justify-center` ancora a imagem na base desta seção.
       */}
      <section className="lg:hidden relative overflow-hidden h-[50vh] bg-[#C8F0F0] flex items-end justify-center">
        <Image
          src={IaPessoaImg}
          alt="Robô e humano com dúvidas sobre imagens modificadas"
          quality={100}
          sizes="90vw"
          className="
            w-[clamp(280px,85vw,480px)]
            h-auto
            object-contain
          "
        />
      </section>
    </>
  )
}