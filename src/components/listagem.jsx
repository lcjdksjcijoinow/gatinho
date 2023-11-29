function Listagem({ item, removerAnimais }) {
    return (
        <>
            <div className="app">
                <div>
            <h3 style={{textDecoration: item.isConcluido ? 'line-through':''}}>{item.descricao}</h3>
                    <img className="foto" src={item.foto} />
                    <div>
                        <button className="bt_remover"
                        onClick={()=> removerAnimais(item.id)}>Encontrado</button>
                    </div>
                </div>
           

                <div className='informacoes'>
                    
                    <p>O nome do gato é:{item.nome}</p>
                    <p>Idade do gato: {item.idade}</p>
                    <p>Cor: {item.cor}</p>
                    <p>Descrição:{item.descricaogato}</p>
               
                </div>
                
            </div>
           
        </>
    )
}
export default Listagem;