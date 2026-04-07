const estudantes = [
    {id:1, nome: 'Júlia', idade:17, ra:189900, diciplina: 'Biologia'},
    {id:2, nome: 'Micaelly', idade:18, ra:17700, disciplina: 'Ed Física'},
    {id:3, nome: 'Lucas', idade:17, ra:190909, disciplina: 'Matemática'}
]

export default function ListaFilter({titulo}){
    const lista = estudantes.filter(estudante => estudante.diciplina == 'Ed Física')
    const listaEstudantes = estudantes.map((estudante) =>{
        return <li key={estudante.id}>
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