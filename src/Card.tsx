
import x from './assets/img-3.jpg'
import y from './assets/img-4.jpg'
import z from './assets/img-5.jpg'
import a from './assets/img-7.jpg'
import { Menu } from 'lucide-react';
import { Github } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Instagram } from 'lucide-react';


const Card = ({name, full_name, specialty, dis, button, link_social_1, bg, color }: any) => {
  return (
    <div>
        <article className='card__artical group relative rounded-[2rem] overflow-hidden min-h-[466px]'>
                    <img className='caed__img rounded-[2rem] transition duration-700 group-hover:scale-110' src={bg} alt="image" />
                    <div className='card__shadow absolute top-50 left-0 h-[100%] w-[100%] bg-gradient-to-b from-transparent to-neutral-900'></div>
                    
                    <div className='card-data text-white absolute left-[1.5rem] bottom-[2rem]'>
                      <h2 className='card__name font-bold text-2xl'>{name}</h2>
                      <span className='card__profession block text-sm'>{specialty}</span>
                    </div>
        
                    <div className='card__clip absolute top-[1.5rem] right-[1rem] bg-gradient-to-b from-[#dfcb84] via-[#d7cf97] to-[#e3b753] shadow-[#b12417] shadow-custom-hue 
                    w-[2rem] h-[2rem] rounded-[50%] grid items-center justify-center cursor-pointer z-5 transition-transform duration-300
                    group-hover:-rotate-180 '>
                      <Menu className='h-5 text-black'/>
                    </div>
        
                    <div className='info text-white group-hover:[clip-path:circle(100%)] [clip-path:circle(8px_at_88%_9%)] absolute top-0 left-0 w-[100%] h-[100%] bg-neutral-400/5 backdrop-blur-[2px] pt-12 px-6 pb-6 transition-all duration-500 ease-in-out'>
                      <div className="info_data">
                        <h2 className='info_name font-extrabold text-2xl mb-4'>{full_name}</h2>
                        <p className='info_description text-sm mb-4'>
                          {dis}
                        </p>
                        <a className={`info_button inline-flex px-4 py-2 border rounded-2xl m-2 bg-[${color}] shadow-[#b12417] shadow-custom-hue  font-light hover:scale-105 hover:shadow-custom-hue1
                         transition duration-300 `} href=""> {button}</a>
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
    </div>
  )
}

export default Card