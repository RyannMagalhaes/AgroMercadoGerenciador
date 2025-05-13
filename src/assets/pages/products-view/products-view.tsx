import { HiPlus } from "react-icons/hi";
import BasicTable from "../../components/table-component";
import { Link } from "react-router-dom";

function ProductsView() {
  return (
    <>
      <section className="bg-[#f8f6ed] min-h-screen"> 
        <div className="info flex flex-col md:flex-row md:items-center md:justify-between max-w-[70vw] mx-auto pt-8 pb-4">
          <div>
            <h1 className="text-3xl font-bold text-[#29543A] mb-2 mt-4">
              Produtos Agrícolas
            </h1>
            <p className="text-[#29543A] text-base">
              Visualize e registre seus produtos.
            </p>
          </div>
          <Link
            to="/products/register"
            className="mt-4 md:mt-0 flex items-center gap-2 bg-[#29543A] text-white px-6 py-2 rounded-md font-semibold transition hover:bg-[#20402c]"
          >
            <HiPlus className="w-5 h-5" />
            Adicionar Produto
          </Link>
        </div>
        <div className="max-w-[70vw] mx-auto">
          <BasicTable></BasicTable>
        </div>
      </section>
    </>
  );
}

export default ProductsView;
