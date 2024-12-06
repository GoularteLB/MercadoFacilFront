import React, { useState } from "react";
import ShareComponent from "../../Componentes/Share/Acao";
import B3Logo from "../../assets/B3.png";

const Share = () => {
    const [codigoAcao, setCodigoAcao] = useState("");
    const [error, setError] = useState<string | null>(null);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputCodigo = event.target.value.toUpperCase();
        if (/^[A-Z]{4}[0-9]+$/.test(inputCodigo)) {
            setCodigoAcao(inputCodigo);
            setError(null);
        } else {
            setCodigoAcao(inputCodigo);
            setError("Código de ação inválido. Por favor, insira um código válido.");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
            <div className="bg-gray-800 shadow-lg rounded-lg w-full max-w-md p-10 min-h-[80vh] flex flex-col items-center justify-center">
                <div className="flex justify-center mb-8">
                    <img
                        src={B3Logo}
                        alt="Logo B3"
                        className="w-1/2 rounded-lg"
                    />
                </div>

                <h2 className="text-3xl font-semibold text-white text-center mb-8">
                    Buscar Ação
                </h2>

                <div className="space-y-4 w-full">
                    <div>
                        <label htmlFor="codigoAcao" className="block text-sm font-medium text-gray-300">
                            Código da Ação
                        </label>
                        <input
                            id="codigoAcao"
                            className="mt-1 block w-full px-6 py-4 rounded-lg bg-gray-700 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400"
                            placeholder="Digite o código da ação (Exemplo: PETR4, BOVA11)"
                            value={codigoAcao}
                            onChange={handleChange}
                        />
                        {error && <p className="text-red-500 mt-2">{error}</p>}
                    </div>

                    {codigoAcao && !error && (
                        <div className="mt-6">
                            <ShareComponent symbol={codigoAcao} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Share;
