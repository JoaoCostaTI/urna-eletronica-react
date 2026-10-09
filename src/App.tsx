import Teclado from './Teclado'
import './App.css'
import { useState } from 'react'
import Tela from './Tela';

const candidatos = [
  { numero: '30', nome: 'Romeu Zema', partido: 'NOVO' },
  { numero: '55', nome: 'Alexandre Kalil', partido: 'PSD' },
  { numero: '22', nome: 'Carlos Viana', partido: 'PL' },
  { numero: '45', nome: 'Marcus Pestana', partido: 'PSDB' },
  { numero: '50', nome: 'Lorene Figueiredo', partido: 'PSOL' },
  { numero: '21', nome: 'Renata Regina', partido: 'PCB' }
];

function App() {
  const [voto, setVoto] = useState("");
  const candidatoEncontrado = candidatos.find((c)=> c.numero === voto);

  function handleNumeroClicado(numero: string) {
    if(voto.length < 2){
      setVoto(voto + numero)
    }
  }

  function handleCorrige(){
    setVoto("")
  }

  function handleBranco(){
    setVoto('BRANCO')
  }

  function handleConfirma(){
    if(voto.length < 2){
      return
    }
    setVoto('FIM - Voto Computado!')
  }
  return (
    <div className='h-screen flex justify-center items-center bg-zinc-800'>
      <div className='flex gap-8 bg-gray-200 p-8 rounded-xl shadow-2xl'>
        <div>
          <Tela voto={voto} candidato={candidatoEncontrado}/>
        </div>
        <div>
          <Teclado onNumeroClicado={handleNumeroClicado} onCorrige={handleCorrige} onBranco={handleBranco} onConfirma={handleConfirma}/>
        </div>
      </div>
    </div>
  )
}

export default App
