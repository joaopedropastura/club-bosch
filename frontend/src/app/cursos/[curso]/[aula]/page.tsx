interface pageParams {
    params : {
        curso: string
        aula: {
            id: string
            slug: string
            name: string
            descricao: string
            curso_id: string
            tempo: string
            ordem: string
        }
        tempo: number
    }
}




export default function AulaPage({params} : pageParams) {



    return (
        <main>
            <h1>pagina da aula</h1>
            <h2>Aula: {params.curso} / {params.aula.name}</h2>
            <p>tempo da aula: {params.tempo}</p>
        </main>
    )
}