import { useState } from 'react'
import './App.css'
import Cadastrar from './components/cadastrar'
import Listagem from './components/listagem'
 
 
function App() {
 
  const[ listaAnimais, setListaAnimais] = useState([
    { id: 1,
      descricao: "gatinho 1" ,
  foto: "https://www.petz.com.br/blog/wp-content/uploads/2023/08/como-saber-quantos-meses-o-gato-tem2-1280x720.jpg",
  cor: "laranja" ,
  idade:" 2 meses",
  descricaogato: "Femea",
  isConcluido: false},
    { id: 2,
      descricao: "gatinho 2",
  foto: "https://blog-static.petlove.com.br/wp-content/uploads/2020/11/Gato-filhote-Petlove-2.jpg",
  cor: "Branco com manchas laranjas" ,
  idade:" 4 meses",
  descricaogato: "Macho",
  isConcluido: false},
    { id: 3,
      descricao: "gatinho 3" ,
  foto: "https://www.otempo.com.br/image/contentid/policy:1.3268985:1699275904/image-10-dicas-para-passear-com-o-gato-na-rua.jpg",
  cor: "Preto com manchas brancas",
  idade:" 1 ano",
  descricaogato: "Macho",
  isConcluido: false},
  ])
 
  const addAnimais = (descricao, foto, cor, idade, descricaogato) =>{
    const newListaAnimais = [...listaAnimais,{
      id: Math.floor(Math.random()*100000),
  descricao: descricao,
  foto: foto,
  cor: cor,
  idade: idade,
  descricaogato: descricaogato,
  isConcluido: false
  }]
  setListaAnimais(newListaAnimais);
}
  const concluirAnimal = (id) => {
    const newListaAnimais = [...listaAnimais];
 
  newListaAnimais.map(item => {
    if(item.id === id)
      item.isConcluido = !item.isConcluido;
  })
  setListaAnimais(newListaAnimais);
  }
 
 
  const removerAnimais = (id) => {
    const newListaAnimais = [...listaAnimais].filter(item =>
      item.id !== id
    )
    setListaAnimais(newListaAnimais);
  }
  const [search, setSearch] = useState ('');
  const [filtro, setfiltro] = useState ('');
  const[ordem,setordem] = useState('')
 
  return (
    <>
    <div className='cabecalho'>
      <center><h1>Gatinhos</h1></center>
    </div>
    <div className='cadastrar2'>
    <Cadastrar addAnimais={addAnimais}/>
    </div>
    <div className='listagem'>
 {listaAnimais
          .slice()
          .sort((a, b) => {
            if (ordem === 'Crescente') {
              return a.descricao.localeCompare(b.descricao);
            } else {
              return b.descricao.localeCompare(a.descricao);
            }
          })
          .filter((item) => {
            if (search && !item.descricao.toLowerCase().includes(search.toLowerCase())) {
              return false;
            }

            if (filtro === 'Pendentes' && item.isConcluido) {
              return false;
            }
 
            return true;
          })
          .map((item) => (
            <Listagem
              key={item.id}
              item={item}
              concluirAnimal={concluirAnimal}
              removerAnimais={removerAnimais}
            />
          ))}
      </div>
      <div className='rodape'>
        desenvolvido por bianca fuentes e laisa alba
      </div>
    </>
  );
}
 
export default App;