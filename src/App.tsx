import x from './assets/img-1.jpg'
import y from './assets/img-2.jpg'

function App() {
  

  return (
    <>
      <nav>
        <div>
          <a href="#">Void Construct</a>
        </div>
        <div>
          <p>Menu</p>
          <p>Close</p>
        </div>
      </nav>

      <div className="container">
        <div className="menu-contants">
          <div className="menuitem">
            <div className="col-lg">
              <div className="menupreviewimg"><img src={x} alt="" /></div>
            </div>
            <div className="col-sm">
              <div className="menu-links">
                <div>
                  <a href="#">Home</a>
                </div>
                <div>
                  <a href="#">About</a> 
                </div>
                <div>
                  <a href="#">Services</a>
                </div>
                <div>
                  <a href="#">Projects</a>
                </div>
              </div>
              <div className="menu-social">
                <div>
                  <a href="#">LinkedIn</a>
                </div>
                <div>
                  <a href="#">YouTube</a>
                </div>
                <div>
                  <a href="#">Instgram</a>
                </div>
                <div>
                  <a href="#">Email</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="menufotter">
            <div>
              <a href="#">Run Sequence</a>
            </div>
            <div>
              <a href="#">Origin</a>
              <a href="">Modther Abdalhag</a>
            </div>
          </div>
        </div>
      </div>

      <div className='container'>
        <section className='hero'>
          <div><img src={y} alt="" /></div>
          <h1>Welcome there I wish for you the best </h1>
        </section>
      </div>


    </>
  )
}

export default App
