import User from "@/components/data/user/user";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre",
  description: "Página sobre o projeto",
};

const SobrePage = () => {
  return (
    <div>
      <h1>Sobre</h1>
      <User/>
    </div>
  );
};

export default SobrePage;
