import { Link } from "react-router-dom";

function PresentationSection() {
  return (
    <>
      <section className="flex items-center justify-center bg-[#f8f6ed] min-h-screen">
        <div className="bigger-container flex flex-col lg:flex-row lg:content-center max-w-[80vw] max-h-8/10 mx-auto gap-15">
          {/* Bloco esquerda */}
          <div className="items-center gap-12 p-6 flex flex-col justify-center text-center lg:text-left lg:items-start">
            <div className="flex-1">
              <span className="inline-block mb-4 px-4 py-1 text-sm bg-[#e6ece7] rounded-full">
                Gerenciador de Commodities Agrícolas
              </span>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                Gerencie seus produtos <br />
                com <span className="text-[#7D5A3C]">facilidade</span>
              </h1>
              <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto lg:mx-0">
                Uma plataforma abrangente para registrar e gerenciar produtos de
                commodities agrícolas. Monitore sua mercadoria e otimize o seu
                negócio agrícola.
              </p>
              <div className="flex flex-col gap-4 items-center lg:flex-row lg:justify-center lg:items-start lg:gap-4 lg:justify-start">
                <Link
                  to="/products"
                  className="bg-[#29543A] text-white px-6 py-3 rounded-md font-semibold"
                >
                  Ver Produtos
                </Link>
                <Link
                  to="/products/register"
                  className="border border-[#29543A] px-6 py-3 rounded-md font-semibold text-[#29543A]"
                >
                  Registrar Produto
                </Link>
              </div>
            </div>
          </div>

          {/* Bloco direita */}

          <div className="flex justify-center items-center mt-8 lg:mt-0">
            <div className="bg-white p-6 rounded-lg shadow-md text-center w-[450px] h-80 border-10 border-[#7D5A3C]">
              <div className="mb-4">
                <div className="w-14 h-14 mx-auto bg-[#e6ece7] rounded-full flex items-center justify-center">
                  <span role="img" aria-label="grain">
                    🌾
                  </span>
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-4">
                Simples e intuitivo
              </h3>
              <ul className="text-left text-xl text-sm text-gray-700 space-y-3 font-medium">
                <li>✅ Cadastre novos produtos</li>
                <li>✅ Mantenha controle sob seu inventário</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PresentationSection;
