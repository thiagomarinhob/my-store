import React from "react";
import { Container, Options } from "./styles";
import Image from "next/image";
import Update from "@/assets/Editar.svg";
import Delete from "@/assets/Excluir.svg";

interface IProductList {
  productList: {
    id: string;
    name: string;
    sellPrice: string;
    purchasePrice: string;
    quantity: string;
  }[];
}

const ProductsTable = ({ productList }: IProductList) => {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Quantidade</th>
            <th>Preço de Venda</th>
            <th>Preço de compra</th>
            <th>Opções</th>
          </tr>
        </thead>
        <tbody>
          {productList.map((products) => (
            <tr key={products.id}>
              <td>{products.name}</td>
              <td>{products.quantity}</td>
              <td>
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(parseInt(products.sellPrice))}
              </td>
              <td>
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(parseInt(products.purchasePrice))}
              </td>
              <td>
                <Options>
                  <Image src={Update} alt="update" />
                  <Image src={Delete} alt="delete" />
                </Options>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};

export default ProductsTable;
