'use client'

import { ThumbnailPreview } from './ThumbnailPreview'
import type { ArquivoItem as ArquivoItemType } from './hooks/useArquivos'

type Props = {
  item: ArquivoItemType
  onRemover: (id: string) => void
}

export function ArquivoItem({ item, onRemover }: Props) {
  return (
    <div className="flex items-center gap-3 py-2 border-b border-gray-100">

      {/* Miniatura */}
      <div className="w-10 h-10 rounded-lg bg-gray-200 flex-shrink-0 overflow-hidden">
        <ThumbnailPreview file={item.file} />
      </div>

      {/* Nome e tamanho */}
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-900 truncate">{item.nome}</p>
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-500">{item.tamanho}</span>
          <button
            onClick={() => onRemover(item.id)}
            className="text-xs text-red-500 hover:text-red-700 cursor-pointer"
          >
            Excluir
          </button>
        </div>
      </div>

      {/* Ícones de ação */}
      <div className="flex items-center gap-1 flex-shrink-0">
        <span className="w-5 h-5 rounded-full bg-gray-600 flex items-center justify-center text-white text-[10px]">
          🔗
        </span>
        <span className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-white text-[10px]">
          ✓
        </span>
        <button
          onClick={() => onRemover(item.id)}
          className="w-5 h-5 rounded-full bg-red-500 flex items-center justify-center text-white text-[10px] cursor-pointer hover:bg-red-600"
        >
          ✕
        </button>
      </div>
    </div>
  )
}