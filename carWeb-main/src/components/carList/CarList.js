import carImage from "../../assets/car.jpeg"
import AddIcon from "../../assets/addIcon.svg"
import styled from "../../style/carList.module.css"
import Image from "next/image";

const carItens = [
    {
        id: 1,
        imagem: carImage,
        desc: "volkswagen gol",
    },
    {
        id: 2,
        imagem: carImage,
        desc: "volkswagen gol",
    },
    {
        id: 3,
        imagem: carImage,
        desc: "volkswagen gol",
    },
    {
        id: 4,
        imagem: carImage,
        desc: "volkswagen gol",
    },
    {
        id: 5,
        imagem: carImage,
        desc: "volkswagen gol",
    },
    {
        id: 6,
        imagem: carImage,
        desc: "volkswagen gol",
    },
    {
        id: 7,
        imagem: carImage,
        desc: "volkswagen gol",
    },
    {
        id: 8,
        imagem: carImage,
        desc: "volkswagen gol",
    },
    {
        id: 9,
        imagem: carImage,
        desc: "volkswagen gol",
    },

]

export default function CarList() {
    return (
        <div className={styled.container}>
            <div className={styled.cardsContainer}>
                <div className={styled.cardAdicionar}>
                    <Image src={AddIcon} alt="" width={55} height={55} />
                    <button className={styled.button}>Adicionar Carro</button>
                </div>

                {carItens.map((item) => {
                    return (
                        <div className={styled.cards} key={item.id}>
                            <Image src={item.imagem} alt="" width={280} height={280} />
                            <p>{item.desc}</p>
                            <button className={styled.button}>Veja mais</button>
                        </div>

                    )
                })}

            </div>
        </div>
    )
}