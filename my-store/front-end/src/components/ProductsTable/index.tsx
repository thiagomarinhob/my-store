import React, { useState } from "react";
import { Container, Options } from "./styles";
import Image from "next/image";
import Update from "@/assets/Editar.svg";
import Delete from "@/assets/Excluir.svg";
import ModalUpdateProduct from "../ModalUpdateProduct";

interface IProductList {
  products: Product[];
  onDelete: (id: string) => void;
  onUpdate: (product: Product) => void;
}

interface Product {
  id: string;
  name: string;
  sellPrice: string;
  purchasePrice: string;
  quantity: string;
}

const ProductsTable = ({ products = [], onDelete, onUpdate }: IProductList) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [productUpdate, setProductUpdate] = useState<Product>();
  async function handleDelete(id: string) {
    onDelete(id);
  }

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
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.quantity}</td>
              <td>
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(parseInt(product.sellPrice))}
              </td>
              <td>
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(parseInt(product.purchasePrice))}
              </td>
              <td>
                <Options>
                  <Image
                    onClick={() => {
                      setIsOpenModal(true);
                      setProductUpdate(product);
                    }}
                    src={Update}
                    alt="update"
                  />
                  <Image
                    src={Delete}
                    onClick={() => handleDelete(product.id)}
                    alt="delete"
                  />
                </Options>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ModalUpdateProduct
        isOpen={isOpenModal}
        onRequestClose={() => setIsOpenModal(false)}
        product={productUpdate}
        onUpdate={onUpdate}
      />
    </Container>
  );
};

export default ProductsTable;
