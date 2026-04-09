import Image from 'next/image'
import IaPessoaImg from '../../../public/RobôPessoa.png'

export function Inicial(){
    return(
        <section className='overflow-hidden relative min-h-screen'>
            <div className="container mx-auto relative h-full">

                <article className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    <div className="container mx-auto h-full px-6 lg:px-8">

                        <div className='relative h-full flex flex-col'>

                            <div className="mt-10 md:mt-10 lg:mt-20 ml-10 flex items-center">
                                <h1 className="font-semibold text-4xl md:text-4xl lg:text-5xl leading-10 md:leading-11 lg:leading-12">
                                    Saiba qual imagem é real
                                    <p className="mt-1 md:mt-2 lg:mt-2 flex items-center justify-center">e qual é {' '}
                                        <b className="text-white bg-[#7860E1] px-2 py-1 rounded-md ml-2">modificada</b></p> 
                                </h1>
                            </div>

                            <div className='flex mt-4'>
                                <div className='w-32'>
                                    <Image
                                        src={IaPessoaImg}
                                        alt="Humano com dúvidas, robô com certeza"
                                        quality={100}
                                        priority
                                        sizes="(max-width: 1024px) 65vw, 620px"  
                                        className="
                                        fixed bottom-[-40px] left-0 z-50
                                        w-[clamp(600px,50vw,800px)]
                                        h-auto 
                                        object-contain 
                                        drop-shadow-2xl
                                        opacity-50 lg:opacity-100
                                        "
                                    />
                                </div>
                            </div>

                        </div>

                    </div>
                    
                    <div 
                        className="
                            relative bg-[#FFFFFF] 
                            h-50 w-100 lg:w-130 md:w-100
                            mt-0 lg:mt-55 md:mt-0
                            ml-10 lg:ml-20
                            rounded-4xl border-2 border-[#8F8F8F] shadow-xl 
                            flex flex-col items-center justify-center 
                    ">
                        
                        <button className='bg-[#D8ADEB] rounded-3xl px-20 py-5 font-semibold text-2xl lg:text-3xl md:text-2xl text-white '>
                            Faça upload
                        </button>
                        <p className='font-semibold text-2xl lg:text-3xl md:text-2xl mt-5'>Ou arraste sua imagem</p>
                     </div>

                </article>
            </div>
            
        </section>
    )
}