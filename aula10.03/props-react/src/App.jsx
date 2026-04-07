
import './App.css';
import Mensagem from './components/mensagem.jsx';
import MeuAvatar  from './componentes/MeuAvatar.jsx';
import imagem from "./assets/img/imagem.png";



function App() {
 

  return (
  <>
  <MeuAvatar
  nome = 'Micaelly'
  idade={18}
  foto= {imagem}
  estilo='Funk'
  disciplina='Matematica'
  />
  </>
  )
}
export default App

 
