import bb from '../../assets/bb.svg'
import bob from '../../assets/bob.svg'
import himym from '../../assets/himym.svg'
import naruto from '../../assets/naruto.svg'
import pb from '../../assets/pb.svg'
import st from '../../assets/st.svg'

export function Main() {
  return (
    <main className="container flex justify-center items-center m-auto flex-col">
      <div className="container flex justify-center items-center m-auto flex-col mt-[150px]">
        <h2 className="text-white font-black text-3xl ">
          Acompanhe as séries e desenhos que você assistiu.
        </h2>
        <h2 className="text-white font-black text-3xl ">
          Salve aqueles que você quer ver.
        </h2>
        <h2 className="text-white font-black text-3xl ">
          Conte aos seus amigos o que é bom.
        </h2>
      </div>

      <a
        href="#"
        className="bg-green-600 text-white px-4 py-3 rounded mt-[39px] hover:bg-green-500 font-bold text-xl"
      >
        Comece agora mesmo - é grátis!
      </a>

      <h3 className="text-white mt-[17px] text-xl font-light">
        A rede social para os amantes de séries e desenhos.
      </h3>

      <div className="flex gap-[17px] mt-[132px] mb-[121px]">
        <img className="" src={bb} alt="Breaking Bad" />
        <img src={pb} alt="Prison Break" />
        <img src={himym} alt="How I Met Yout Mother" />
        <img src={naruto} alt="Naruto" />
        <img src={bob} alt="Bob Esponja" />
        <img src={st} alt="Stranger Things" />
      </div>
    </main>
  )
}
