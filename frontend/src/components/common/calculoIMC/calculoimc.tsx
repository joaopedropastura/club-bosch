"use client";

import { useState } from "react";

export default function CalculoIMC(): JSX.Element {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState('');

  const calcularIMC = () => {
    const height = (Number(altura)/100)
    const total = (Number(peso) / (height * height)).toFixed(2);

    setImc(total);
  };

  return (
    <div>
      <h1>IMC</h1>
      <label htmlFor="weight">peso(em kg)</label>
      <input type="text" id="weight" value={peso} onChange={(e) => setPeso(e.target.value)} />
      <label htmlFor="height">altura (em cm)</label>
      <input type="text" id="height" value={altura} onChange={(e) => setAltura(e.target.value)} />
      
      <button onClick={() => calcularIMC()}>Calcular</button>
      <div>O imc foi de: {imc}</div>
    </div>
  );
}
