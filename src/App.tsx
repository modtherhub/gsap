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

        <div className='card__container relative grid grid-cols-[260px] justify-center gap-[2rem] md:grid-cols-[260px_260px] lg:grid-cols-[260px_260px_260px]  '>
          {/* card1 */}
          <article className='card__artical group relative rounded-[2rem] overflow-hidden shadow-custom-hue shadow-[#4c6b6b] lg:shadow-[#974626]'>
            <img className='caed__img rounded-[2rem] transition duration-700 group-hover:scale-110' src={y} alt="image" />
            <div className='card__shadow absolute top-50 left-0 h-[100%] w-[100%] bg-gradient-to-b from-transparent to-neutral-900'></div>
            
            <div className='card-data text-white absolute left-[1.5rem] bottom-[2rem]'>
              <h2 className='card__name font-bold text-2xl'>MODTHER</h2>
              <span className='card__profession block text-sm'>DEV</span>
            </div>

            <div className='card__clip absolute top-[1.5rem] right-[1rem] bg-[#c7713b] shadow-[#b12417] shadow-custom-hue 
            w-[2rem] h-[2rem] rounded-[50%] grid items-center justify-center cursor-pointer z-5 transition-transform duration-300
            group-hover:-rotate-180 '>
              <Menu className='h-5 text-black'/>
            </div>

            <div className='info text-white group-hover:[clip-path:circle(100%)] [clip-path:circle(8px_at_88%_9%)] absolute top-0 left-0 w-[100%] h-[100%] bg-neutral-400/10 backdrop-blur-[2px] pt-12 px-6 pb-6 transition-all duration-500 ease-in-out'>
              <div className="info_data">
                <h2 className='info_name font-extrabold text-2xl mb-4'>Modther Abdalhag</h2>
                <p className='info_description text-sm mb-4'>
                  Passionate Software Developer crafting robust back-end systems and clean front-end experiences. Focused on building impactful tech to solve real-world problems.
                </p>
                <a className='info_button inline-flex px-4 py-2 border rounded-2xl m-2 bg-[#7e4827] shadow-[#b12417] shadow-custom-hue  font-light hover:scale-105 hover:shadow-custom-hue1
                 transition duration-300 ' href="">Welcome there</a>
              </div>

              <div className="info_social flex absolute mt-4 ml-2 gap-4 left-6 bottom-6 ">
                <a className=' shadow-custom-hue w-[2rem] h-[2rem] flex justify-center items-center rounded-full bg-[#d46b29] shadow-[#b12417] hover:-translate-y-4 transition-all duration-300 transform' href="">
                  <Github />
                </a>
                <a className=' shadow-custom-hue w-[2rem] h-[2rem] flex justify-center items-center rounded-full bg-[#e7742f] shadow-[#b12417] hover:-translate-y-4 transition-all duration-300 transform' href="">
                  <Linkedin/>
                </a>
                <a className=' shadow-custom-hue w-[2rem] h-[2rem] flex justify-center items-center rounded-full bg-[#e7742f] shadow-[#b12417] hover:-translate-y-4 transition-all duration-300 transform' href="">
                  <Instagram/>
                </a>
              </div>

            </div>

          </article>

          {/* card2 */}
          <article className='card__artical group relative rounded-[2rem] overflow-hidden shadow-custom-hue shadow-neutral-900'>
            <img className='caed__img rounded-[2rem] transition duration-700 group-hover:scale-110' src={x} alt="image" />
            <div className='card__shadow absolute top-50 left-0 h-[100%] w-[100%] bg-gradient-to-b from-transparent to-neutral-900'></div>
            
            <div className='card-data text-white absolute left-[1.5rem] bottom-[2rem]'>
              <h2 className='card__name font-bold text-2xl'>ALI</h2>
              <span className='card__profession block text-sm'>SEO</span>
            </div>

            <div className='card__clip absolute top-[1.5rem] right-[1rem] bg-[#dcfdf7] shadow-[#7ef3cebb] shadow-custom-hue 
            w-[2rem] h-[2rem] rounded-[50%] grid items-center justify-center cursor-pointer z-5 transition-transform duration-300
            group-hover:-rotate-180 '>
              <Menu className='h-5 text-black'/>
            </div>

            <div className='info text-white group-hover:[clip-path:circle(100%)] [clip-path:circle(8px_at_88%_9%)] absolute top-0 left-0 w-[100%] h-[100%] bg-neutral-400/10 backdrop-blur-[2px] pt-12 px-6 pb-6 transition-all duration-500 ease-in-out'>
              <div className="info_data">
                <h2 className='info_name font-extrabold text-2xl mb-4'>Ali Ahmed</h2>
                <p className='info_description text-sm mb-4'>
                  Frontend Developer with a passion for pixel-perfect UI and seamless user experiences.
                </p>
                <a className='info_button inline-flex px-4 py-2 border rounded-2xl m-2 bg-[#272018] shadow-[#7ef3cebb] shadow-custom-hue  font-light hover:scale-105 hover:shadow-custom-hue1
                 transition duration-300 text-[#a0908d] ' href="">Contact Me</a>
              </div>

              <div className="info_social flex absolute mt-4 ml-2 gap-4 left-6 bottom-6 ">
                <a className=' shadow-custom-hue w-[2rem] h-[2rem] flex justify-center items-center rounded-full bg-[#dcfdf7] shadow-[#7ef3cebb] hover:-translate-y-4 transition-all duration-300 transform text-[#a8290f]' href="">
                  <Github />
                </a>
                <a className=' shadow-custom-hue w-[2rem] h-[2rem] flex justify-center items-center rounded-full bg-[#dcfdf7] shadow-[#7ef3cebb] hover:-translate-y-4 transition-all duration-300 transform text-[#a8290f]' href="">
                  <Linkedin/>
                </a>
                <a className=' shadow-custom-hue w-[2rem] h-[2rem] flex justify-center items-center rounded-full bg-[#dcfdf7] shadow-[#7ef3cebb] hover:-translate-y-4 transition-all duration-300 transform text-[#a8290f]' href="">
                  <Instagram/>
                </a>
              </div>

            </div>

          </article>

          {/* card3 */}
          <article className='card__artical group relative rounded-[2rem] overflow-hidden shadow-custom-hue shadow-[#2e616c]'>
            <img className='caed__img rounded-[2rem] transition duration-700 group-hover:scale-110' src={z} alt="image" />
            <div className='card__shadow absolute top-50 left-0 h-[100%] w-[100%] bg-gradient-to-b from-transparent to-neutral-900'></div>
            
            <div className='card-data text-white absolute left-[1.5rem] bottom-[2rem]'>
              <h2 className='card__name font-bold text-2xl'>MONTI</h2>
              <span className='card__profession block text-sm'>Designer</span>
            </div>

            <div className='card__clip absolute top-[1.5rem] right-[1rem] bg-[#f7f3bf] shadow-[#a0b88cd3] shadow-custom-hue 
            w-[2rem] h-[2rem] rounded-[50%] grid items-center justify-center cursor-pointer z-5 transition-transform duration-300
            group-hover:-rotate-180 '>
              <Menu className='h-5 text-black'/>
            </div>

            <div className='info text-white group-hover:[clip-path:circle(100%)] [clip-path:circle(8px_at_88%_9%)] absolute top-0 left-0 w-[100%] h-[100%] bg-neutral-400/10 backdrop-blur-[2px] pt-12 px-6 pb-6 transition-all duration-500 ease-in-out'>
              <div className="info_data">
                <h2 className='info_name font-extrabold text-2xl mb-4'>Monti</h2>
                <p className='info_description text-sm mb-4'>
                  Creative Designer turning ideas into meaningful visual experiences through UI/UX and branding.
                </p>
                <a className='info_button inline-flex px-4 py-2 border rounded-2xl m-2 bg-[#51232c] shadow-[#7ef3cebb] shadow-custom-hue  font-light hover:scale-105 hover:shadow-custom-hue1
                 transition duration-300 text-[#fffdfd] ' href="">Follow me</a>
              </div>

              <div className="info_social flex absolute mt-4 ml-2 gap-4 left-6 bottom-6 ">
                <a className=' shadow-custom-hue w-[2rem] h-[2rem] flex justify-center items-center rounded-full bg-[#f7f3bf] shadow-[#a0b88cd3] hover:-translate-y-4 transition-all duration-300 transform text-[#51232c]' href="">
                  <Github />
                </a>
                <a className=' shadow-custom-hue w-[2rem] h-[2rem] flex justify-center items-center rounded-full bg-[#f7f3bf] shadow-[#a0b88cd3] hover:-translate-y-4 transition-all duration-300 transform text-[#51232c]' href="">
                  <Linkedin/>
                </a>
                <a className=' shadow-custom-hue w-[2rem] h-[2rem] flex justify-center items-center rounded-full bg-[#f7f3bf] shadow-[#a0b88cd3] hover:-translate-y-4 transition-all duration-300 transform text-[#51232c]' href="">
                  <Instagram/>
                </a>
              </div>

            </div>

          </article>

        </div>
      </section>


    </>
  )
}

export default App
