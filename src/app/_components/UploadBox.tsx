'use client'

import { useRef } from 'react'
import { ArquivoItem } from './ArquivoItem'
import type { ArquivoItem as ArquivoItemType } from './hooks/useArquivos'

type Props = {
  arquivos: ArquivoItemType[]
  temArquivos: boolean
  podeAnalisar: boolean
  enviando: boolean
  resultado: string | null
  onProcessar: (files: FileList | File[]) => void
  onRemover: (id: string) => void
  onAnalisar: () => void
}

export function UploadBox({
  arquivos,
  temArquivos,
  podeAnalisar,
  enviando,
  resultado,
  onProcessar,
  onRemover,
  onAnalisar,
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null)

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files) onProcessar(e.target.files)
    e.target.value = ''
  }

  return (
    <div className="
      bg-white
      w-[min(85vw,300px)] md:w-[280px] lg:w-[420px]
      shrink-0
      mt-6 md:mt-50 lg:mt-56
      mx-auto md:mx-0 md:mr-6 lg:mr-10
      rounded-3xl border-2 border-[#8F8F8F] shadow-xl
      flex flex-col items-center
      px-5 py-5 md:py-6 lg:py-8
      z-10 relative
    ">
      {/* Input de arquivo oculto */}
      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg"
        multiple
        className="hidden"
        onChange={handleFileChange}
      />

      {!temArquivos ? (
        /* Estado vazio */
        <>
          <button
            onClick={() => inputRef.current?.click()}
            className="bg-[#D8ADEB] rounded-3xl px-8 py-3 font-semibold text-xl lg:text-3xl text-white w-full hover:bg-[#c97aea] cursor-pointer transition-colors"
          >
            Faça upload
          </button>
          <p className="font-semibold text-xl lg:text-3xl mt-3 text-center">
            Ou arraste sua imagem
          </p>
        </>
      ) : (
        /* Estado com arquivos */
        <div className="w-full">
          <button
            onClick={() => inputRef.current?.click()}
            className="w-full bg-[#D8ADEB] text-white text-sm font-semibold rounded-full py-2 px-4 text-center mb-4 hover:bg-[#c97aea] transition-colors cursor-pointer"
          >
            Arraste seus arquivos aqui (Mínimo 2 imagens)
          </button>

          {/* Lista de arquivos */}
          <div className="flex flex-col gap-2 w-full">
            {arquivos.map((item) => (
              <ArquivoItem key={item.id} item={item} onRemover={onRemover} />
            ))}
          </div>

          {/* Botão de análise */}
          {podeAnalisar && (
            <button
              onClick={onAnalisar}
              disabled={enviando}
              className="mt-5 w-full bg-[#7860E1] text-white font-semibold rounded-full py-3 text-sm lg:text-base hover:bg-[#6450c9] transition-colors cursor-pointer disabled:opacity-60"
            >
              {enviando ? 'Enviando...' : 'Fazer análise VeriScan'}
            </button>
          )}

          {/* Mensagem de retorno */}
          {resultado && (
            <p className={`mt-3 text-sm font-semibold text-center ${resultado.includes('Erro') ? 'text-red-500' : 'text-green-600'}`}>
              {resultado}
            </p>
          )}

          {!podeAnalisar && (
            <p className="mt-3 text-xs text-gray-400 text-center">
              Adicione pelo menos 2 imagens para analisar
            </p>
          )}
        </div>
      )}
    </div>
  )
}