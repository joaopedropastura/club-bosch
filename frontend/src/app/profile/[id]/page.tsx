

interface profileParams {
    params : {
        id : string
    }
}

interface User {
    name: string;
    email: string;
  }

export default async function profilePage ({params} : profileParams) {

    const response = await fetch(`http://localhost:3000/users/${params.id}`)

    const data = await response.json() as User
    return (
        <main>
            <h1>profile page</h1>
            <div>
                <p>{data.email}</p>
                <p>{data.name}</p>
            </div>
        </main>
    )
}