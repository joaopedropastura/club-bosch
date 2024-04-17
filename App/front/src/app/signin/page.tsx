"use client";

import Image from "next/image";
import ClubeBoschLogo from "../../../public/clubBosch.svg";
import Link from "next/link";

import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Login() {
  return (
    <main className="mainFrame">

      <Card className="w-[350px]">
        <CardHeader>
          <div className="logoImage">
            <Image
              src={ClubeBoschLogo}
              alt={"icone do clube bosch"}
              height={92}
              width={92}
            ></Image>
          </div>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">email</Label>
                <Input
                  type="email"
                  className="grid w-full max-w-sm items-center gap-1.5"
                  placeholder="email"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">senha</Label>
                <Input
                  type="password"
                  className="grid w-full max-w-sm items-center gap-1.5"
                  placeholder="senha"
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col justify-around">
          <div className="flex w-11/12 px-2">
            {/* <Button className="w-32" onClick={() => signIn("github", { callbackUrl: "/" })}>
              github
            </Button> */}
            <Button className="w-32" onClick={() => signIn("google", { callbackUrl: "/" })}>
              google
            </Button>
            <Button className="w-32" onClick={() => signIn("facebook", { callbackUrl: "/" })}>
              facebook
            </Button>
            <Button className="w-32" onClick={() => signIn("instagram", { callbackUrl: "/" })}>
              instagram
            </Button>
          </div >
          <div className="flex w-full justify-around px-2">
          <Button className="w-11/12">
            entrar
          </Button>

          </div>
          <Link href="/signup" className="signUp cursor-pointer">
            registre-se
          </Link>
        </CardFooter>
      </Card>
    </main>
  );
}
