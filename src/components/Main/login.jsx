import { Link } from "@tanstack/react-router";
import logo from "../../assets/logo.svg";
import { Input } from "../Forms/input";
export function Enter() {
  return (
    <main className=" container flex items-center m-auto flex-col min-h-screen bg-login">
      <Link to="/" className=" p-[40px] ">
        <img src={logo} alt="logo" />
      </Link>
      <h2 className="text-white font-bold text-4xl mb-[70px]">Entre agora!</h2>
      <Input label="Usuário"/>
      <Input label="Senha" type="password"/>
      <div className="flex gap-[2px] italic text-white font-light text-xl">
        <p>Não tem uma conta?</p>
        <Link to='/signup' className="font-black text-pink hover:underline"> Registre-se</Link>
      </div>
      <button className="mt-[60px] bg-blue px-[175px] py-[12px] rounded-2xl text-white font-black text-2xl hover:bg-light-blue cursor-pointer">
        Entrar
      </button>
      
    </main>
  );
}
