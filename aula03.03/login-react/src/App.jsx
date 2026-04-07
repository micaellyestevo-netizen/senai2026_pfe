import'./App.css';
import logoSesi from './assets/img/image01.jpg';
 import logoSenai from './assets/img/image02.jpg';


function App() {
  return (
    <div className="container">
      <img src={logoSesi} alt="logo sesi" className='logo'/>
        <img src={logoSenai} alt="logo Senai" className='logo'/>
        <h1 className="titulo">Login</h1>
        <span className="subtitulo">para continuar</span>
        <label htmlFor='nome' className='label'>Nome</label>
        <input type="text" className="campo" id='nome' placeholder='Seu nome'/>
        <label htmlFor="senha" className="label">Senha</label>
        <input type="text" className="campo" id='senha' placeholder='*****'/>  
           <button className="botao">Log in </button>
          <a href='#' className='link'>Esqueceu a senha?</a>
          <a href='#' className='link'>Cadastre-se</a>
          </div>
       
  )
}

export default App