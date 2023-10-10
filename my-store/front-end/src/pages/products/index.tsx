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
import { GetServerSidePropsContext } from "next";

interface IProductList {
  products: IProduct[];
}

interface IProduct {
  id: string;
  name: string;
  sellPrice: string;
  purchasePrice: string;
  quantity: string;
}

export default function Products({ products }: IProductList) {
  const [list, setList] = useState(products);

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    const response = await api.get("/products");
    setList(response.data.products);
  }

  async function handleDelete(id: string) {
    await api.delete(`/products/${id}`).then((response) => {
      if (response.status === 200) {
        getProducts();
      }
    });
  }

  async function handleUpdateProducts(product: IProduct) {
    await api.put(`/products/${product.id}`).then((response) => {
      if (response.status === 200) {
        getProducts();
      }
    });
  }

  return (
    <Container>
      <HeaderMenu>
        <h1>Produtos</h1>
        <Menu></Menu>
      </HeaderMenu>
      <ContainerTable>
        <ProductsTable
          onUpdate={handleUpdateProducts}
          onDelete={handleDelete}
          products={list}
        />
      </ContainerTable>
    </Container>
  );
}

export const getServerSideProps = withSSRAuth(
  async (ctx: GetServerSidePropsContext) => {
    const api = setupAPIClient(ctx);

    const response = await api.get("/products");
    const products = response.data.products;

    return {
      props: {
        products,
      },
    };
  }
);
