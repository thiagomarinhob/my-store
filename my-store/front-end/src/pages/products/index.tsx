import React, { useEffect, useState } from "react";
import {
  Container,
  ContainerTable,
  HeaderMenu,
  Menu,
} from "../../styles/pages/products";
import ProductsTable from "@/components/ProductsTable";
import { withSSRAuth } from "@/utils/withSSRAuth";
import { setupAPIClient } from "../api/api";
import { api } from "../api/apiClient";

interface IProductList {
  products: {
    id: string;
    name: string;
    sellPrice: string;
    purchasePrice: string;
    quantity: string;
  }[];
}

export default function Products({ products }: IProductList) {
  const [list, setList] = useState(products);

  useEffect(() => {
    async function getProducts() {
      const response = await api.get("/products");

      setList(response.data);
    }

    getProducts();
  }, []);

  return (
    <Container>
      <HeaderMenu>
        <h1>Produtos</h1>
        <Menu></Menu>
      </HeaderMenu>
      <ContainerTable>
        <ProductsTable productList={list} />
      </ContainerTable>
    </Container>
  );
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const api = setupAPIClient(ctx);
  const response = await api.get("/products");
  const products = response.data;

  return {
    props: {
      products,
    },
  };
});
