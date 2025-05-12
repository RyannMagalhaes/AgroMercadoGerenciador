import { useRef } from "react";
import { FaBuildingWheat } from "react-icons/fa6";
import authenticationService from "../../../services/authenticationService";
import { useNavigate } from "react-router-dom";

function Login() {
  const username = useRef<HTMLInputElement | null>(null);
  const password = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();

  function getToken() {
    console.log("Obtendo token...");

    const credenciais: { username: string; password: string } = {
      username: username.current?.value || "",
      password: password.current?.value || "",
    };

    authenticationService.login(credenciais.username, credenciais.password)
      .then((response) => {
        console.log("Resposta do servidor:", response);
        if (response.status === 200) {
          alert("Login bem-sucedido!");
          navigate("/home");
        } else {
          alert("Credenciais inválidas. Tente novamente.");
        }
      }) 
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#fcfbf7]">
      <div className="flex flex-col items-center mb-8">
        <div className="bg-[#17472C] rounded-md w-20 h-18 flex items-center justify-center mb-4">
          <FaBuildingWheat className="w-15 h-15 m-auto text-[#F9F9F5]" />
        </div>
        <h1 className="text-2xl font-bold text-[#17472C]">
          <span className="text-[#7D5A3C]">Agro</span>Mercado
        </h1>
        <p className="text-[#17472C]/80 text-base mb-2 text-center font-medium">
          Entre para ter acesso a lista e cadastro de produtos
        </p>
      </div>
      <div className="bg-white rounded-xl shadow-md px-10 py-8 w-full max-w-md border border-[#f5eddc]">
        <h2 className="text-2xl font-bold text-[#17472C] mb-1">Login</h2>
        <p className="text-[#17472C]/80 mb-6 text-sm font-medium">
          Digite suas credenciais para acessar o sistema
        </p>
        <form
        // onSubmit={e => {
        //   e.preventDefault();
        //   handleLogin();
        // }}
        >
          <div className="mb-4">
            <label
              htmlFor="usuario"
              className="block text-[#29543A] font-medium mb-1"
            >
              Usuario
            </label>
            <input
              id="usuario"
              type="text"
              placeholder="Seu nome de Usuário"
              className="w-full px-4 py-2 border border-[#e6e6e6] rounded-md focus:outline-none focus:ring-2 focus:ring-[#29543A]/30 transition"
              required
              ref={username}
            />
          </div>
          <div className="mb-2 flex items-center justify-between">
            <label htmlFor="senha" className="block text-[#29543A] font-medium">
              Senha
            </label>
          </div>
          <div className="mb-6">
            <input
              id="senha"
              type="password"
              className="w-full px-4 py-2 border border-[#e6e6e6] rounded-md focus:outline-none focus:ring-2 focus:ring-[#29543A]/30 transition"
              placeholder="**********"
              required
              ref={password}
            />
          </div>
          <button
            type="button"
            className="w-full bg-[#29543A] text-white font-semibold rounded-md py-2 text-lg hover:bg-[#20432d] transition"
            onClick={getToken}
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
