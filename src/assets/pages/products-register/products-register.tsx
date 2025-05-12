import { useRef } from "react";
import productsService from "../../../services/productsService";
import type { ProductRegister } from "../../types/products";

function ProductsRegister() {
  const inputName = useRef<HTMLInputElement | null>(null);
  const inputPrice = useRef<HTMLInputElement | null>(null);

  function formGetValue() {
    const product: ProductRegister = {
      name: "",
      price: 0,
    };

    product.name = inputName.current?.value || "";
    product.price = Number(inputPrice.current?.value) || 0;

    if (product.name.length > 2 && product.price > 0) {
      productsService
        .postProduct(product)
        .then((response) => {
          if (response) {
            alert("Produto cadastrado com sucesso!");
          } else {
            alert("Erro ao cadastrar produto.");
          }
        })
        .catch(() => {
          alert("Erro ao cadastrar produto.");
        });
        
      clearForm();
    } else {
      alert("Preencha os campos corretamente!");
    }
  }

  function clearForm() {
    if (inputName.current) {
      inputName.current.value = "";
    }
    if (inputPrice.current) {
      inputPrice.current.value = "";
    }
  }

  return (
    <>
      <section className="bg-[#f8f6ed] min-h-screen w-full flex items-center justify-center">
        <div className="bigger-container flex flex-col max-w-[60vw] mx-auto shadow-xl">
          <form className="bg-white rounded-lg shadow p-8  mx-auto">
            <div className="bg-[#7D5A3C] rounded-t-lg -mx-8 -mt-8 px-8 py-6 mb-6 border-b border-[#29543A] flex-col justify-center">
              <h2 className="text-2xl font-semibold text-white mb-1">
                Registrar Produto
              </h2>
              <p className="text-[#FFFFFF] text-sm opacity-80">
                Adicione uma nova commoditie agrícola ao seu inventário.
              </p>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-semibold mb-1"
                htmlFor="productName"
              >
                Nome do produto:
              </label>
              <input
                id="productName"
                type="text"
                placeholder="nome do produto (min: 3 caracteres)"
                className="w-full px-4 py-2 border border-[#29543A] rounded"
                maxLength={20}
                ref={inputName}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 font-semibold mb-1"
                htmlFor="price"
              >
                Preço (R$):
              </label>
              <input
                id="price"
                type="number"
                placeholder="R$ 0.00"
                className="w-full px-4 py-2 border border-[#29543A] rounded"
                name="price"
                ref={inputPrice}
                step="0.01"
              />
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-center border-t border-[#29543A]  pt-4 -mx-8 px-8">
              <button
                type="button"
                className="px-5 py-2 w-full sm:w-auto border border-[#29543A] rounded text-gray-700 hover:bg-gray-100 transition"
                title="Limpar"
                onClick={clearForm}
              >
                Limpar
              </button>
              <button
                type="button"
                className="px-6 my-3 sm:my-0 w-full sm:w-auto py-2 bg-[#29543A] text-white rounded font-semibold hover:bg-green-800 transition"
                title="Cadastrar produto"
                onClick={formGetValue}
              >
                Cadastrar
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default ProductsRegister;
