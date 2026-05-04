'use client'

import { useState } from 'react'

type Props = {
  file: File
}

export function ThumbnailPreview({ file }: Props) {
  const [src, setSrc] = useState<string | null>(() => URL.createObjectURL(file))
  // useState com função inicializadora: cria a URL só uma vez,
  // evitando recriar a cada render

  if (!src) return null

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt=""
      className="w-full h-full object-cover"
      onLoad={() => URL.revokeObjectURL(src)}
    />
  )
}