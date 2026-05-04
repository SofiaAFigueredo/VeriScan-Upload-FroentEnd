'use client'

type Props = {
  onDrop: (e: React.DragEvent) => void
  onDragOver: (e: React.DragEvent) => void
  onDragLeave: (e: React.DragEvent) => void
}

export function DragOverlay({ onDrop, onDragOver, onDragLeave }: Props) {
  return (
    <section
      className="min-h-screen flex items-center justify-center bg-[#D4FBFF]"
      onDrop={onDrop}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
    >
      <div className="w-[min(90vw,420px)] aspect-square rounded-3xl bg-[#D8ADEB]/30 border-2 border-dashed border-[#D8ADEB] flex items-center justify-center">
        <p className="text-[#7860E1] font-semibold text-2xl">Solte a imagem aqui</p>
      </div>
    </section>
  )
}