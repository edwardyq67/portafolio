
import './App.css'

function App() {
  

  return (
    <div className="App">
      <div className="conteiner">
        <div className="btn-menu">
          <label htmlFor="btn-menu" className='icon-menu'><i className="fa-solid fa-bars"></i></label>
        </div>
        <div className="logo">
          <a href="">E</a>
        </div>
        <nav className='menu'>
          <a href="">inicio</a>
          <a href="">Habilidades</a>
          <a href="">Proyectos</a>
          <a href="">Contacto</a>
          
          
        </nav>

      </div>
      <input type="checkbox" id='btn-menu' />
      <div className="container-menu">
        <div className="cont-menu">
          <nav>
            <a href="">inicio</a>
          <a href="">Habilidades</a>
          <a href="">Proyectos</a>
          <a href="">Contacto</a>
          </nav>
          <label htmlFor="btn-menu" className='icon-equis'><i className="fa-solid fa-xmark"></i></label>
        </div>
      </div>
      <div className="cont-info">
      <div className="inf-title">
        <p>Hola, soy  </p>
        
        <ul>
          <li>Edward</li>
          <li>programador frontend</li>
        </ul>
      </div>
    <p className='info-p'>Me especializo en React Js para el desarrollo de aplicaciones web fullstack completamente responsive y que se ajusten a tus necesidades como cliente.</p>
    </div>
    <div className="info-yo">
      <h2>soy Edward Yllanes Quirari</h2>
      <p>Desarrollador web especializado en React.js. soy un apasionado de la tecnología con una increíble capacidad del auto aprendizaje, tengo 18 años y soy del departameto Lima, provincia Lima; me encantaría ser parte de tu equipo, si tienes alguna duda o quieres saber más de mi, puedes contactarme a través de mis redes sociales o por un mensaje a traves del formulario de contacto.</p>
      <h3><b>Nombre: </b>Edward Yllanes Quirari</h3>
      <h3><b>Edad: </b>18</h3>
      <h3><b>telefono: </b>916628409</h3>
      <h3><b>Correo: </b>edwardyq67@gmail.com</h3>
    </div>
    </div>
  )
}

export default App
