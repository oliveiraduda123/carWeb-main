import CarList from "@/components/carList/CarList";
import styled from "../../style/listaDesejos.module.css";
import Header from "@/components/header/Header";

export default function ListaDesejos() {
    return (
        <div className={styled.container}>
            <Header />

            <button className={styled.btnVoltar}>Voltar</button>

            <div className={styled.title}>
                <h1>Lista de Desejos</h1>
                <button className={styled.btnCompartilhar}>Compartilhar</button>
            </div>

            <CarList />


        </div>
    )
}