'use client'
import Image from "next/image";
import  IconSenha  from "../assets/iconSenha.svg"
import Logo  from "../assets/logo.svg"
import styled from "../style/login.module.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main className={styled.container}>

      <section className={styled.esquerda}>
        <div className={styled.esquerdaTitulo}>
          <h1>Bem-Vindo</h1>
          <p>Crie sua conta agora mesmo</p>
        </div>
      </section>

      <div>
        <div className={styled.logo}>
        <Image src={Logo} alt="aa" width={55} height={55}/>
        <p>Web Cars</p>
        </div>
      </div>

      <section className={styled.direita}>
        <p>Criar sua conta</p>
        <div className={styled.containerForm}>
          <main className={styled.form}>
            <div>
              <label>Nome:</label>
              <input type="text" placeholder="Nome" />
            </div>

            <div>
              <label>CNPJ:</label>
              <input type="number" placeholder="00000000000000" />
            </div>

            <div>
              <label>Telefone:</label>
              <input type="number" placeholder="99 99999-9999" />
            </div>

            <div>
              <label>Localização:</label>

              <input type="text" placeholder="IFRO" />  
            </div>

            <div>
              <label>Senha:</label>
              <input type="password" placeholder="****" />
            </div>

            <div>
              <label>Confirmar senha:</label>
              <input type="password" placeholder="****" />
            </div>

          </main>
          <div className={styled.footerForm}>
              <button type="submit" className={styled.btnCriarConta} onClick={() => router.push('../listaDesejos')}>Criar Conta</button>
              <p>Já possui uma conta? <a href="#">Login</a></p>
          </div>

        </div>
      </section>
    </main>
  );
}
