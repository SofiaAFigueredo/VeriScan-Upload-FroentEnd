import { useState, useCallback } from 'react'

export type ArquivoItem = {
  id: string
  file: File
  nome: string
  tamanho: string
  status: 'ok' | 'erro'
  mensagemErro?: string
}

function formatarTamanho(bytes: number) {
  return bytes < 1024 * 1024
    ? `${Math.round(bytes / 1024)} kb`
    : `${(bytes / (1024 * 1024)).toFixed(1)} mb`
}

export function useArquivos() {
  const [arquivos, setArquivos] = useState<ArquivoItem[]>([])
  const [isDragOver, setIsDragOver] = useState(false)
  const [enviando, setEnviando] = useState(false)
  const [resultado, setResultado] = useState<string | null>(null)

  async function processarArquivos(files: FileList | File[]) {
    const novos: ArquivoItem[] = Array.from(files).map((file) => ({
      id: crypto.randomUUID(),
      file,
      nome: file.name,
      tamanho: formatarTamanho(file.size),
      status: 'ok',
    }))
    setArquivos((prev) => [...prev, ...novos])
    setResultado(null)
  }

  function remover(id: string) {
    setArquivos((prev) => prev.filter((a) => a.id !== id))
  }

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
    if (e.dataTransfer.files) processarArquivos(e.dataTransfer.files)
  }, [])

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
  }, [])

  async function handleAnalisar() {
    
    if (arquivos.length < 2) return
    setEnviando(true)
    setResultado(null)

    try {
      const promises = arquivos.map((item) => {
        const formData = new FormData()
        formData.append('file', item.file)
        return fetch('/api/posts', { method: 'POST', body: formData }).then((r) => r.json())
      })
      await Promise.all(promises)
      setResultado('Análise enviada com sucesso!')
    } catch {
      setResultado('Erro ao enviar para o servidor.')
    } finally {
      setEnviando(false)
    }
  }

  return {
    arquivos,
    isDragOver,
    enviando,
    resultado,
    temArquivos: arquivos.length > 0,
    podeAnalisar: arquivos.length >= 2,
    processarArquivos,
    remover,
    handleDrop,
    handleDragOver,
    handleDragLeave,
    handleAnalisar,
  }
}