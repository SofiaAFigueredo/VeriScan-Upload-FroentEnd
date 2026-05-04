'use client'

import Image from 'next/image'
import IaPessoaImg from '../../../public/RobôPessoa.png'
import { useArquivos } from './hooks/useArquivos'
import { DragOverlay } from './DragOverlay'
import { UploadBox } from './UploadBox'

export function Inicial() {
  const {
    arquivos,
    isDragOver,
    enviando,
    resultado,
    temArquivos,
    podeAnalisar,
    processarArquivos,
    remover,
    handleDrop,
    handleDragOver,
    handleDragLeave,
    handleAnalisar,
  } = useArquivos()

  // Quando o usuário arrasta algo, a tela inteira vira drop zone
  if (isDragOver) {
    return (
      <DragOverlay
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      />
    )
  }

  return (
    <section
      className="overflow-hidden relative min-h-screen"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
    >
      <div className="container mx-auto relative min-h-screen">

        {/* Imagem decorativa de fundo */}
        <Image
          src={IaPessoaImg}
          alt="Humano com dúvidas, robô com certeza"
          quality={100}
          priority
          sizes="(max-width: 768px) 60vw, (max-width: 1024px) 45vw, 600px"
          className="
            absolute bottom-0 left-0 z-0
            w-[99vw] max-w-[380px]
            md:w-[55vw] md:max-w-[480px]
            lg:w-[60vw] lg:max-w-[600px]
            h-auto object-contain
            opacity-30 md:opacity-100
          "
        />

        <article className="relative z-10 flex flex-col md:flex-row md:items-start md:justify-between gap-4">

          {/* Título */}
          <div className="px-6 md:px-8 md:flex-1 mt-10 md:mt-20 md:ml-10">
            <h1 className="font-semibold text-3xl md:text-4xl lg:text-5xl leading-tight text-center md:text-left">
              Saiba qual imagem é real
              <span className="mt-2 flex items-center justify-center md:justify-start flex-wrap gap-2">
                e qual é{' '}
                <b className="text-white bg-[#7860E1] px-2 py-1 rounded-md text-3xl md:text-4xl lg:text-5xl">
                  modificada
                </b>
              </span>
            </h1>
          </div>

          {/* Caixa de upload */}
          <UploadBox
            arquivos={arquivos}
            temArquivos={temArquivos}
            podeAnalisar={podeAnalisar}
            enviando={enviando}
            resultado={resultado}
            onProcessar={processarArquivos}
            onRemover={remover}
            onAnalisar={handleAnalisar}
          />

        </article>
      </div>
    </section>
  )
}