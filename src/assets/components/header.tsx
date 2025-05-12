import { Link } from "react-router-dom";
import { FaBuildingWheat } from "react-icons/fa6";
import { HiMenu, HiX } from "react-icons/hi";
import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="border-b border-[#d5ddd7] bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto flex h-16 justify-between items-center">
          <Link to="/home">
            <div className="flex items-center gap-2 pl-4">
              <div className="flex items-center justify-center bg-[#29543A] w-11 h-10 rounded-md">
                <FaBuildingWheat className="w-8 h-8 m-auto text-[#F9F9F5]" />
              </div>
              <p className="text-2xl font-bold text-[#29543A]">
                <span className="text-[#7D5A3C]">Agro</span>Mercado
              </p>
            </div>
          </Link>

          <button
            className="md:hidden text-[#29543A]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiMenu className="w-6 h-6" />
            )}
          </button>

          {/* Links Desktop */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              to="/home"
              className="text-[#29543A] font-medium hover:underline"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="text-[#29543A] font-medium hover:underline"
            >
              Produtos
            </Link>
            <Link
              to="/products/register"
              className="text-[#29543A] font-medium hover:underline"
            >
              Cadastrar Produtos
            </Link>
            <Link
              to="/"
              className="bg-[#29543A] text-white px-4 py-2 rounded-md font-semibold ml-2 hover:bg-[#1e3d2a] transition"
            >
              Login
            </Link>
          </nav>
        </div>
      </header>
      {/* Menu Sidebar - Mobile */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white/90 text-[#0f2e22]/100 transform transition-transform duration-300 ease-in-out z-50 rounded-l-2xl border-l-4 border-[#29543A] shadow-lg ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="relative flex justify-center items-center p-4 border-b border-[#0f2e22]/100">
          <h2 className="text-xl font-semibold text-[#0f2e22]/100/90">Menu</h2>
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute right-4 text-[#0f2e22]/100/80"
          >
            <HiX className="w-6 h-6" />
          </button>
        </div>
        <nav className="flex flex-col text-center h-full space-y-6 px-4">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="w-full border-b border-[#0f2e22]/50 py-4 text-[#0f2e22]/100/90 text-lg font-medium transition"
          >
            Login
          </Link>
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="w-full border-b border-[#0f2e22]/50 py-4 text-[#0f2e22]/100/90 text-lg font-medium transition"
          >
            Home
          </Link>
          <Link
            to="/products"
            onClick={() => setMenuOpen(false)}
            className="w-full border-b border-[#0f2e22]/50 py-4 text-[#0f2e22]/100/90 text-lg font-medium transition"
          >
            Produtos
          </Link>
          <Link
            to="/products/register"
            onClick={() => setMenuOpen(false)}
            className="w-full border-b border-[#0f2e22]/50 py-4 text-[#0f2e22]/100/90 text-lg font-medium transition"
          >
            Cadastrar Produtos
          </Link>
        </nav>
      </div>

      {/* Backdrop */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </>
  );
}

export default Header;
