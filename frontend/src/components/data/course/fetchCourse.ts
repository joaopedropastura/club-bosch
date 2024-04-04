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

export async function getCourses() {
    const response = await fetch("https://api.origamid.online/cursos")
    return (await response.json()) as Array<Course>
}

export async function getCourse(curso : string) {
    const response = await fetch(`https://api.origamid.online/cursos/${curso}`)
    return (await response.json()) as Course & { aulas : Aula }
}

export async function getAula(curso : string, aula: string) {
    const response = await fetch(`https://api.origamid.online/cursos/${curso}/${aula}`)
    return (await response.json()) as Aula
}
