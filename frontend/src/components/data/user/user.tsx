interface User {
  name: string;
  email: string;
}


export default async function user() {
  const response = await fetch("http://localhost:3000/users");
  const data = await response.json() as Array<User>;

  console.log(data);

  return (
    <div>
      {data.map((person: User, index : number) => (
          <li key={index}>
            <p>Nome: {person.name}</p>
            <p>Email: {person.email}</p>
          </li>
        ))}
    </div>
  );
};

