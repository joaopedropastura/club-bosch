import Image from "next/image";
import ClubeBoschLogo from "../../../public/clubBosch.svg";
import Link from "next/link";

export default function Login() {
  return (
    <main className="mainFrame">
      <div className="container">
        <div className="logoImage">
          <Image
            src={ClubeBoschLogo}
            alt={"icone do clube bosch"}
            height={92}
            width={92}
          ></Image>
        </div>
        <div>
          <div>
            <label htmlFor="email">email</label>
            <input type="text" className="input-style" placeholder="email"/>

          </div>
          <div>
            <label htmlFor="password">senha</label>
            <input type="text" className="input-style" placeholder="senha"/>
          </div>
          <div className="loginBtn">
            <button className="signIn" >Entrar</button>
            <Link href="/register" className="signUp" >registre-se</Link>
          </div>
        </div>

        
      </div>
    </main>
  );
}
