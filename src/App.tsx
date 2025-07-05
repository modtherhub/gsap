import x from './assets/img-3.jpg'
import y from './assets/img-4.jpg'
import z from './assets/img-5.jpg'
import a from './assets/img-7.jpg'
import { Menu } from 'lucide-react';
import { Github } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Instagram } from 'lucide-react';


function App() {
  

  return (
    <>
      <section className='card relative py-[5rem] '>
        <img className='card_bg    absolute top-0 left-0 w-[100%] h-[100%] object-center object-cover' src={a} alt="image" />
        <div className='card__blur absolute top-0 left-0 w-[100%] h-[100%] backdrop-blur-[2px]'></div>

        <div className='card__container relative grid grid-cols-[260px] justify-center gap-[2rem]'>
          <article className='card__artical group relative rounded-[2rem] overflow-hidden'>
            <img className='caed__img rounded-[2rem] transition duration-700 group-hover:scale-110' src={y} alt="image" />
            <div className='card__shadow absolute top-50 left-0 h-[100%] w-[100%] bg-gradient-to-b from-transparent to-black'></div>
            
            <div className='card-data text-white absolute left-[1.5rem] bottom-[2rem]'>
              <h2 className='card__name font-bold text-2xl'>MODTHER</h2>
              <span className='card__profession block text-sm'>DEV</span>
            </div>

            <div className='card__clip absolute top-[1.5rem] right-[1rem] bg-amber-400 shadow-custom-hue shadow-[#b28c00] 
            w-[2rem] h-[2rem] rounded-[50%] grid items-center justify-center cursor-pointer z-5 transition-transform duration-300
            group-hover:-rotate-180 '>
              <Menu className='h-5 text-black'/>
            </div>

            <div className='info group-hover:[clip-path:circle(100%)] [clip-path:circle(8px_at_88%_9%)] absolute top-0 left-0 w-[100%] h-[100%] bg-neutral-400/20 backdrop-blur-[2px] pt-12 px-6 pb-6 transition-all duration-500 ease-in-out'>
              <div className="info_data">
                <h2 className='info_name font-extrabold text-2xl mb-4'>Modther Abdalhag</h2>
                <p className='info_description text-sm mb-4'>
                  Passionate Software Developer crafting robust back-end systems and clean front-end experiences. Focused on building impactful tech to solve real-world problems.
                </p>
                <a className='info_button inline-flex px-4 py-2 border rounded-2xl m-2 bg-amber-400 shadow-custom-hue shadow-[#b28c00] font-light hover:scale-105 hover:shadow-custom-hue1
                 transition duration-300 ' href="">Contact Me</a>
              </div>

              <div className="info_social flex absolute mt-4 ml-2 gap-4 left-6 bottom-6 ">
                <a className='bg-amber-400 shadow-custom-hue w-[2rem] h-[2rem] flex justify-center items-center rounded-full shadow-[#b28c00] hover:-translate-y-4 transition-all duration-300 transform' href="">
                  <Github />
                </a>
                <a className='bg-amber-400 shadow-custom-hue w-[2rem] h-[2rem] flex justify-center items-center rounded-full shadow-[#b28c00] hover:-translate-y-4 transition-all duration-300 transform' href="">
                  <Linkedin/>
                </a>
                <a className='bg-amber-400 shadow-custom-hue w-[2rem] h-[2rem] flex justify-center items-center rounded-full shadow-[#b28c00] hover:-translate-y-4 transition-all duration-300 transform' href="">
                  <Instagram/>
                </a>
              </div>

            </div>

          </article>

          <article className='card__artical'>
            <img className='caed__img' src={x} alt="image" />
            <div className='card__shadow '></div>

            <div className='card-__data'>
              <h2 className='card__name'>ALI</h2>
              <span className='card__profession'>Frontend Developer</span>
            </div>

            <div className='card__clip'>
              <Menu/>
            </div>
          </article>

          <article className='card__artical'>
            <img className='caed__img' src={z} alt="image" />
            <div className='card__shadow '></div>

            <div className='card-__data'>
              <h2 className='card__name'>MOHAMMED</h2>
              <span className='card__profession'>DESIGNER</span>
            </div>

            <div className='card__clip'>
              <i class="ri-menu-5-fill"></i>
            </div>
          </article>
        </div>
      </section>


    </>
  )
}

export default App
