import Image from 'next/image'
import IaPessoaImg from '../../../public/RobôPessoa.png'

export function Inicial() {
    return (
        <section className="overflow-hidden relative min-h-screen">
            <div className="container mx-auto relative min-h-screen">

                {/* IMAGEM — posicionada absolute, canto inferior esquerdo */}
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

                    {/* TÍTULO */}
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

                    {/* CAIXA DE UPLOAD */}
                    <div
                        className="
                            bg-white
                            w-[min(85vw,300px)] md:w-[260px] lg:w-[420px]
                            shrink-0
                            mt-6 md:mt-50 lg:mt-56
                            mx-auto md:mx-0 md:mr-6 lg:mr-10
                            rounded-3xl border-2 border-[#8F8F8F] shadow-xl
                            flex flex-col items-center justify-center
                            px-5 py-5 md:py-6 lg:py-12
                            z-10 relative
                        "
                    >
                        <button className="bg-[#D8ADEB] rounded-3xl px-8 py-3 font-semibold text-xl lg:text-3xl text-white w-full">
                            Faça upload
                        </button>
                        <p className="font-semibold text-xl lg:text-3xl mt-3 text-center">
                            Ou arraste sua imagem
                        </p>
                    </div>

                </article>

            </div>
        </section>
    )
}