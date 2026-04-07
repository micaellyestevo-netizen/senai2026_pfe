const estudantes = [
    {nome: 'Júlia', idade:17, ra:189900},
    {nome: 'Micaelly', idade:18, ra:17700},
    {nome: 'Lucas', idade:17, ra:190909}
]

export default function ListaMap({titulo}){
    const listaEstudantes = estudantes.map((estudante) =>{
        return <li>
            <h3>{estudante.nome}</h3>
            <p>{estudante.idade}</p>
            <p>{estudante.ra}</p>
        </li>
    })
    return(
        <>
        <h1>{titulo}</h1>
         <ul>
            {listaEstudantes}
        </ul>
        </>
       
    )
}