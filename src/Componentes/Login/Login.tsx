import { useState } from "react";
import { LoginData } from "../../Interfaces/LoginData";
import { LoginAPI } from "../../Servicos/MercadoFacilAPI";

const Login = () => {
    const [loginData, setLoginData] = useState<LoginData>({
        email: '',
        password: ''
    });

    const handleLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setLoginData({
            ...loginData,
            [name]: value
        });
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const response = await LoginAPI(loginData);
            if (response.data && response.status === 200) {
                sessionStorage.setItem('token', response.data.token);
            } else {
                alert('Falha no login');
            }
        } catch (e) {
            console.error('Falha no login: ', e);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-0 m-0">
            <div className="bg-gray-800 shadow-lg rounded-lg w-full sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-4xl p-10">
                <h2 className="text-3xl font-semibold text-white text-center mb-8">
                    Bem-vindo de volta!
                </h2>
                <form onSubmit={handleSubmit} className="space-y-8">
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-300"
                        >
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={loginData.email}
                            onChange={handleLogin}
                            className="mt-1 block w-full px-6 py-4 rounded-lg bg-gray-700 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400"
                            placeholder="Digite seu email"
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-300"
                        >
                            Senha
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            value={loginData.password}
                            onChange={handleLogin}
                            className="mt-1 block w-full px-6 py-4 rounded-lg bg-gray-700 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400"
                            placeholder="Digite sua senha"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-pink-500 text-white font-medium py-4 rounded-lg hover:bg-pink-600 transition duration-200"
                    >
                        Entrar
                    </button>
                </form>
                <p className="mt-8 text-center text-sm text-gray-400">
                    Esqueceu sua senha?{' '}
                    <a href="#" className="text-pink-400 hover:underline">
                        Clique aqui
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Login;
