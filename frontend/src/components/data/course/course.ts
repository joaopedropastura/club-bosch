interface Course {
    id: string
    slug: string
    nome: string
    descricao: string
    total_aulas: string
    total_horas: string
}

interface Aula {
    id: string
    slug: string
    nome: string
    descricao: string
    tempo: number
    curso_id: number
    order: number
}