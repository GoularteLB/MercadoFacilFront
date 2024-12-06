import { Link } from "react-router-dom";
import { useState } from "react";
import User from "@mui/icons-material/Person";
import Search from "@mui/icons-material/Search";
import List from "@mui/icons-material/List";
import Menu from "@mui/icons-material/Menu";
import X from "@mui/icons-material/Close";
import Logout from "@mui/icons-material/Logout";
import Favorite from "@mui/icons-material/Favorite";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleLogout = () => {
        sessionStorage.removeItem("token");
        window.location.href = "/";
    };

    return (
        <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-purple-700 via-blue-600 to-indigo-600 text-white shadow-lg z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <h1 className="text-2xl font-bold text-white">Minha Aplicação</h1>
                    </div>

                    <div className="flex sm:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                        >
                            {isOpen ? (
                                <X className="h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Menu className="h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>

                    <div className="hidden sm:flex sm:space-x-6">
                        <Link
                            to="/share"
                            className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition duration-300"
                        >
                            <Search className="mr-2" />
                            Pesquisar ações
                        </Link>
                        <Link
                            to="/shareList"
                            className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition duration-300"
                        >
                            <List className="mr-2" />
                            Listar ações
                        </Link>
                        <Link
                            to="/shareFavList"
                            className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition duration-300"
                        >
                            <Favorite className="mr-2" />
                            Ações favoritadas
                        </Link>
                        <Link
                            to="/CadastroUsuarios"
                            className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition duration-300"
                        >
                            <User className="mr-2" />
                            Cadastro
                        </Link>
                    </div>

                    <div className="ml-4">
                        <button
                            onClick={handleLogout}
                            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg flex items-center transition duration-300"
                        >
                            <Logout className="mr-2" />
                            Sair
                        </button>
                    </div>
                </div>
            </div>

            <div
                className={`${
                    isOpen ? "block" : "hidden"
                } sm:hidden bg-purple-700`}
            >
                <div className="px-4 py-2 space-y-2">
                    <Link
                        to="/share"
                        className="block px-3 py-2 rounded-md text-base font-medium hover:bg-purple-800"
                    >
                        <Search className="mr-2" />
                        Pesquisar ações
                    </Link>
                    <Link
                        to="/shareList"
                        className="block px-3 py-2 rounded-md text-base font-medium hover:bg-purple-800"
                    >
                        <List className="mr-2" />
                        Listar ações
                    </Link>
                    <Link
                        to="/shareFavList"
                        className="block px-3 py-2 rounded-md text-base font-medium hover:bg-purple-800"
                    >
                        <Favorite className="mr-2" />
                        Ações favoritadas
                    </Link>
                    <Link
                        to="/CadastroUsuarios"
                        className="block px-3 py-2 rounded-md text-base font-medium hover:bg-purple-800"
                    >
                        <User className="mr-2" />
                        Cadastro
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
