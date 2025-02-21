'use client'
import Image from "next/image"
import styled from "../../style/header.module.css"
import Logo from "../../assets/logo.svg"
import HamburgueMenu from "../../assets/Hamburger.svg"
import Search from "../../assets/search.svg"
import Perfil from "../../assets/perfil.svg"

export default function Header() {
    return (
        <div className={styled.container}>
            <div>
                <Image src={Logo} alt="" width={55} height={55} className={styled.logo} />
                <button className={styled.btnMenu}>
                    <Image src={HamburgueMenu} alt="" width={45} height={55} className={styled.menuIcon} />
                </button>
            </div>

            <div className={styled.containerPesquise}>
                <input type="text" placeholder="Pesquise" />
                <button className={styled.btnPesquisa}><Image src={Search} alt="" width={25} height={25} /></button>
            </div>

            <div>
                <button className={styled.perfil}>
                    <Image src={Perfil} alt="" width={45} height={45} />
                </button>
            </div>
        </div>
    )
}