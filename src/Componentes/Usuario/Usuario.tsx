import { useState } from "react";
import { CriarUsuario } from "../../Servicos/MercadoFacilAPI";

const Cadastro = () => {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setUserData({
            ...userData,
            [name]: value
        });
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (userData.password !== userData.confirmPassword) {
            alert("As senhas não coincidem.");
            return;
        }

        try {
            const response = await CriarUsuario(userData);
            if (response.data && response.status === 200) {
                alert('Usuário criado com sucesso!');
            } else {
                alert('Erro ao criar o usuário.');
            }
        } catch (e) {
            console.error('Falha no cadastro: ', e);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
            <div className="bg-gray-800 shadow-lg rounded-lg w-full max-w-3xl p-10">
                <h2 className="text-3xl font-semibold text-white text-center mb-8">
                    Crie sua Conta
                </h2>
                <form onSubmit={handleSubmit} className="space-y-8">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                            Nome Completo
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            value={userData.name}
                            onChange={handleInputChange}
                            className="mt-1 block w-full px-6 py-4 rounded-lg bg-gray-700 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400"
                            placeholder="Digite seu nome completo"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={userData.email}
                            onChange={handleInputChange}
                            className="mt-1 block w-full px-6 py-4 rounded-lg bg-gray-700 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400"
                            placeholder="Digite seu email"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                            Senha
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            value={userData.password}
                            onChange={handleInputChange}
                            className="mt-1 block w-full px-6 py-4 rounded-lg bg-gray-700 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400"
                            placeholder="Digite sua senha"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300">
                            Confirmar Senha
                        </label>
                        <input
                            id="confirmPassword"
                            name="confirmPassword"
                            type="password"
                            value={userData.confirmPassword}
                            onChange={handleInputChange}
                            className="mt-1 block w-full px-6 py-4 rounded-lg bg-gray-700 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400"
                            placeholder="Confirme sua senha"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-pink-500 text-white font-medium py-4 rounded-lg hover:bg-pink-600 transition duration-200"
                    >
                        Criar Conta
                    </button>
                </form>
                <p className="mt-8 text-center text-sm text-gray-400">
                    Já tem uma conta?{' '}
                    <a href="/login" className="text-pink-400 hover:underline">
                        Faça login
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Cadastro;
