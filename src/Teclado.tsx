interface TecladoProps {
    onNumeroClicado: (numero: string) => void;
    onCorrige: () => void;
    onBranco: () => void;
    onConfirma: () => void;
}

export default function Teclado({ onNumeroClicado, onBranco, onConfirma, onCorrige}: TecladoProps) {
    return (
        <div className="grid grid-cols-3 gap-3">
            <button onClick={() => onNumeroClicado('1')} className="bg-zinc-800 text-white p-4 rounded text-2xl font-bold shadow-md hover:bg-zinc-700">1</button>
            <button onClick={() => onNumeroClicado('2')} className="bg-zinc-800 text-white p-4 rounded text-2xl font-bold shadow-md hover:bg-zinc-700">2</button>
            <button onClick={() => onNumeroClicado('3')} className="bg-zinc-800 text-white p-4 rounded text-2xl font-bold shadow-md hover:bg-zinc-700">3</button>
            <button onClick={() => onNumeroClicado('4')} className="bg-zinc-800 text-white p-4 rounded text-2xl font-bold shadow-md hover:bg-zinc-700">4</button>
            <button onClick={() => onNumeroClicado('5')} className="bg-zinc-800 text-white p-4 rounded text-2xl font-bold shadow-md hover:bg-zinc-700">5</button>
            <button onClick={() => onNumeroClicado('6')} className="bg-zinc-800 text-white p-4 rounded text-2xl font-bold shadow-md hover:bg-zinc-700">6</button>
            <button onClick={() => onNumeroClicado('7')} className="bg-zinc-800 text-white p-4 rounded text-2xl font-bold shadow-md hover:bg-zinc-700">7</button>
            <button onClick={() => onNumeroClicado('8')} className="bg-zinc-800 text-white p-4 rounded text-2xl font-bold shadow-md hover:bg-zinc-700">8</button>
            <button onClick={() => onNumeroClicado('9')} className="bg-zinc-800 text-white p-4 rounded text-2xl font-bold shadow-md hover:bg-zinc-700">9</button>
            <div></div>
            <button onClick={() => onNumeroClicado('0')} className="bg-zinc-800 text-white p-4 rounded text-2xl font-bold shadow-md hover:bg-zinc-700">0</button>
            <div></div>
            <button onClick={() => onBranco()} className="bg-white text-black text-sm p-4 rounded font-bold">BRANCO</button>
            <button onClick={() => onCorrige()} className="bg-orange-500 text-black text-sm p-4 rounded font-bold">CORRIGE</button>
            <button onClick={() => onConfirma()} className="bg-green-500 text-black text-sm py-6 p-4 rounded font-bold">CONFIRMA</button>
        </div>
    )
}