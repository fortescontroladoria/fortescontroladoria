import LogoFav from '@/assets/logo-fav.webp'
import Image from 'next/image'

export function Logo() {
  return (
    <div className="flex h-24 items-center justify-center sm:h-32">
      <Image
        src={LogoFav}
        alt="Logo Fortes Contabilidade"
        className="h-3/4 w-auto pr-1 sm:pr-2"
      />

      <div className="font-mont text-[#142249] sm:max-w-[400px]">
        <div className="text-2xl font-bold sm:text-4xl sm:leading-[1.7rem]">
          <p>Fortes</p>
          <p>Contabilidade</p>
        </div>
      </div>
    </div>
  )
}

export function LogoFull() {
  return (
    <div className="flex h-20 items-center sm:h-44">
      <Image
        src={LogoFav}
        alt="Logo Fortes Contabilidade"
        className="h-full w-auto pr-1 sm:h-[180px] sm:border-r-2 sm:border-[#142249] sm:pr-4"
      />

      <div className="font-mont pl-2 text-[#142249] sm:max-w-[400px] sm:pl-6">
        <p className="text-xl font-bold sm:text-3xl">Fortes Contabilidade</p>
        <div className="space-y-1">
          <p className="text-base font-light tracking-widest sm:text-xl">
            Confiança e Clareza
          </p>
          <p className="hidden text-base sm:block">
            Especializada em Gestão Financeira de empresas em crescimento.
          </p>
        </div>
      </div>
    </div>
  )
}
