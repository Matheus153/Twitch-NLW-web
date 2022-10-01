
import './styles/main.css'
import logoImg from './assets/logo.svg'

import { MagnifyingGlassPlus } from 'phosphor-react';

function App() {
 
  return(
    <div /* className="w-8 h-8 bg-violet-500 sm:bg-green-400 dark:bg-blue-700" */
    className="max-w-[1344px] mx-auto flex flex-col items-center my-20">

        <img src={logoImg}/>

        <h1 className='text-6xl font-black my-20'>
          Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'>duo</span> está aqui.
        </h1>

        <div className='grid grid-cols-6 gap-6'>

          <a href="" className='relative rounded-lg overflow-hidden'>
            <img src="/game-1.png"/>

            <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
              <strong className='font-bold block mt-1'>League of Legends </strong>
              <span className="text-zinc-300 text-sm">4 anúncios</span>
            </div>
          </a>

          <a href="" className='relative rounded-lg overflow-hidden'>
            <img src="/game-2.png"/>

            <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
              <strong className='font-bold block mt-1'>Dota 2</strong>
              <span className="text-zinc-300 text-sm">4 anúncios</span>
            </div>
          </a>

          <a href="" className='relative rounded-lg overflow-hidden'>
            <img src="/game-3.png"/>

            <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
              <strong className='font-bold block mt-1'>Counter Strike </strong>
              <span className="text-zinc-300 text-sm">4 anúncios</span>
            </div>
          </a>

          <a href="" className='relative rounded-lg overflow-hidden'>
            <img src="/game-4.png"/>

            <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
              <strong className='font-bold block mt-1'>Apex Legends </strong>
              <span className="text-zinc-300 text-sm">4 anúncios</span>
            </div>
          </a>

          <a href="" className='relative rounded-lg overflow-hidden'>
            <img src="/game-5.png"/>

            <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
              <strong className='font-bold block mt-1'>Fortnite </strong>
              <span className="text-zinc-300 text-sm">4 anúncios</span>
            </div>
          </a>

          <a href="" className='relative rounded-lg overflow-hidden'>
            <img src="/game-6.png"/>

            <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
              <strong className='font-bold block mt-1'>World of Warcraft</strong>
              <span className="text-zinc-300 text-sm">4 anúncios</span>
            </div>
          </a>


        </div>

        
        <div className='pt-1 bg-nlw-gradient self-stretch rounded-lg mt-8 overflow-hidden'>
          
          <div className='bg-[#2a2634] px-8 py-6 flex justify-between'>
            <div >
              <strong className='text-2xl font-black block'>Nao encontrou seu duo?</strong>
              <span>Publique um anúncio para encontrar novos players.</span>
            </div>

            <button className="py-3 px-4 bg-violet-500 hover:bg-violet-700 rounded flex items-center gap-3">
              <MagnifyingGlassPlus size={24}/>
              Publicar anúncio
            </button>
          </div>

        </div>

    </div>
  )

}

export default App
