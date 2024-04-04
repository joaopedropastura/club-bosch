import { getCourse, getCourses } from "@/components/data/course/fetchCourse"


interface PageParams {
    params: {
        curso: string
    }
}

export default async function cursoPage({params} : PageParams) {

    const course = await getCourse(params.curso)
    
    return (
        <main>
            <h1>Curso: {course.nome}</h1>
            <p>{course.descricao}</p>
        </main>
    )
}