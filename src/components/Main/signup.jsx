import { Link } from "@tanstack/react-router";
import logo from "../../assets/logo.svg";
import { InputSignUP } from "../Forms/inputSignUp";

export function Register() {
  return (
    <main className="container flex items-center m-auto flex-col min-h-screen bg-signup">
      <Link to="/" className=" p-[40px] ">
        <img src={logo} alt="logo" />
      </Link>
      <h2 className="text-white font-black text-3xl mb-[90px]">
        Crie sua conta
      </h2>
      <InputSignUP label="Endereço de email" />
      <InputSignUP label="Nome de usuário" />
      <InputSignUP label="Senha" type="password" />
      <button className="mt-[10px] bg-purple px-[30px] py-[10px] rounded-lg text-white font-black text-xl hover:bg-dark-purple cursor-pointer mr-[365px]">
        Registrar
      </button>
      <div className="flex gap-[2px] italic text-white font-light text-xl my-[30px]">
        <p>Já tem uma conta?</p>
        <Link to="/login" className="font-black text-pink hover:underline">
          Entrar
        </Link>
      </div>
    </main>
  );
}
