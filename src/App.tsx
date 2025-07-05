import x from './assets/img-3.jpg'
import y from './assets/img-4.jpg'
import z from './assets/img-5.jpg'
import a from './assets/img-6.jpg'


function App() {
  

  return (
    <>
      <section className='card'>
        <img className='card_bg' src={a} alt="image" />
        <div className='card__blur'></div>

        <div className='card__container container'>
          <article className='card__artical'>
            <img className='caed__img' src={y} alt="image" />
            <div className='card__shadow '></div>

            <div className='card-__data'>
              <h2 className='card__name'></h2>
              <span className='card__profession'></span>
            </div>

            <div className='card__clip'>
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
              <h2 className='card__name'></h2>
              <span className='card__profession'></span>
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
