import { useState } from "react";
 
function Cadastrar({addAnimais}) {
 
    const[descricao, setDescricao] = useState('');
    const[foto, setFoto] = useState('');
    const[cor, setCor] = useState('');
    const[idade, setIdade] = useState('');
    const[descricaogato, setDescricaogato] = useState('');
 
    const cadastrar = () =>{
        addAnimais(descricao, foto, cor, idade, descricaogato);
    }
 
    return(
        <>
<h2>Cadastrar</h2>
  <div className="cadastrar">
            <input type="text" onChange={(e) => setDescricao(e.target.value)} placeholder="informar o numero do gato..." />
            <input type="text" onChange={(e) => setFoto(e.target.value)} placeholder="informar a foto do gato..." />
            <input type="text" onChange={(e) => setCor(e.target.value)} placeholder="informar a Cor ..." />
            <input type="text" onChange={(e) => setIdade(e.target.value)} placeholder="informar a idade ..." />
            <input type="text" onChange={(e) => setDescricaogato(e.target.value)} placeholder="Mais descrições do gato..." />
     <button className="bt_concluir" onClick={cadastrar}>Cadastrar</button>
           
        </div>
        </>
    )
}
export default Cadastrar;