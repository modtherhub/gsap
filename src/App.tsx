import x from './assets/img-3.jpg'
import y from './assets/img-4.jpg'
import z from './assets/img-5.jpg'
import a from './assets/img-6.jpg'


function App() {
  

  return (
    <>
      <section className='card relative py-[5rem] '>
        <img className='card_bg    absolute top-0 left-0 w-[100%] h-[100%] object-center object-cover' src={a} alt="image" />
        <div className='card__blur absolute top-0 left-0 w-[100%] h-[100%] backdrop-blur-[20px]'></div>

        <div className='card__container relative grid grid-cols-[260px] justify-center gap-[2rem]'>
          <article className='card__artical relative rounded-[2rem] overflow-hidden'>
            <img className='caed__img rounded-[2rem] transition-transform' src={y} alt="image" />
            <div className='card__shadow absolute top-50 left-0 h-[100%] w-[100%] bg-gradient-to-b from-transparent to-black'></div>
            
            <div className='card-data text-white absolute left-[1.5rem] bottom-[2rem]'>
              <h2 className='card__name font-bold text-2xl'>MODTHER</h2>
              <span className='card__profession block text-sm'>DEV</span>
            </div>

            <div className='card__clip absolute'>
              <i class="ri-menu-5-fill"></i>
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
              <i class="ri-menu-5-fill"></i>
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
