interface TelaProps {
    voto: string;
    candidato: any;
}

export default function Tela({ voto, candidato }: TelaProps) {
    return (
        <div className="w-[500px] min-h-[350px] bg-white p-6 flex flex-col justify-between border-2 border-gray-300">
            {/* Parte de Cima*/}
            <div className="flex flex-col gap-4">
                <span className="text-sm font-bold">SEU VOTO PARA</span>
                <span className="text-3xl font-black text-center">PREFEITO</span>

                {/* VOTO VÁLIDO !BRANCO */}
                {voto !== "BRANCO" && voto !== "FIM - Voto Computado!" && (
                    <div className="flex gap-2 justify-center mt-4">
                        <div className="w-12 h-16 border-2 border-black flex items-center justify-center text-3xl font-bold">
                            {voto[0]}
                        </div>
                        <div className="w-12 h-16 border-2 border-black flex items-center justify-center text-3xl font-bold">
                            {voto[1]}
                        </div>
                    </div>
                )}
                {/* VOTO EM BRANCO */}
                {voto === "BRANCO" && (
                    <div className="flex-1 flex items-center justify-center mt-8">
                        <span className="text-5xl font-black uppercase text-gray-800 animate-pulse">Voto em Branco</span>
                    </div>
                )}

                {/* VOTO COMPUTADO */}
                {voto === "FIM - Voto Computado!" && (
                    <div className="flex-1 flex flex-col items-center justify-center mt-8 text-center">
                        <p className="text-7xl font-black uppercase text-gray-800 animate-pulse">FIM</p>
                        <p className="text-xl mt-4 font-semibold text-gray-600">Voto Computado!</p>
                    </div>
                )}
                {/* Candidato Existente */}
                {candidato && (
                    <div className="mt-6 flex flex-col">
                        <span className="text-lg">Nome: <b className="text-2xl">{candidato.nome}</b></span>
                        <span className="text-lg">Partido: <b className="text-2xl">{candidato.partido}</b></span>
                    </div>
                )}
                {/* Candidato inexistente */}
                {voto.length === 2 && !candidato && (
                    <div className="mt-6">
                        <span className="text-4xl font-bold text-black uppercase">VOTO NULO! </span>
                    </div>
                )}
            </div>
            {/* Parte de Baixo*/}
            <div className="border-t-2 border-black pt-2 text-xs">
                Aperte a tecla <br />
                <span className="font-bold text-green-600">VERDE</span> para CONFIRMAR <br />
                <span className="font-bold text-orange-500">LARANJA</span> para CORRIGIR <br />
            </div>
        </div>
    )
}