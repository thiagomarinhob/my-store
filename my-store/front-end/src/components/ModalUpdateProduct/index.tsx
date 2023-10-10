import React, { useState } from "react";

import { ContainerModal, Form, Prices } from "./styles";
import { Input } from "@/common/input";

interface IPropsModal {
  isOpen: boolean;
  onRequestClose: () => void;
  onUpdate: (data: Product) => void;
  product: Product;
}

interface Product {
  id: string;
  name: string;
  description: string;
  sellPrice: string;
  purchasePrice: string;
  quantity: string;
}

export default function ModalUpdateProduct({
  isOpen,
  onRequestClose,
  product,
  onUpdate,
}: IPropsModal) {
  const [name, setName] = useState(product.name);
  const [isErrorName, setIsErrorName] = useState(false);
  const [description, setDescription] = useState(product.description);
  const [isErrorDescription, setIsErrorDescription] = useState(false);
  const [sellPrice, setSellPrice] = useState(product.sellPrice);
  const [isErrorSellPrice, setIsErrorSellPrice] = useState(false);
  const [purchasePrice, setPurchasePrice] = useState(product.purchasePrice);
  const [isErrorPurchasePrice, setIsErrorPurchasePrice] = useState(false);
  const [quantity, setQuantity] = useState(product.quantity);
  const [isErrorQuantity, setIsErrorQuantity] = useState(false);

  function handleUpdateState(setState, value) {
    setState(value);
  }

  return (
    <ContainerModal isOpen={isOpen} onRequestClose={onRequestClose}>
      <h1>Editar Produto</h1>

      <Form>
        <Input
          InputType="text"
          name="Name"
          labelText="Nome"
          mask=""
          disabled={false}
          onChange={(e) => handleUpdateState(setName, e.target.value)}
          setErrorState={setIsErrorName}
          isErrorState={isErrorName}
          isRequired
          placeholder=""
          value={name}
        />
        <Input
          InputType="text"
          name="description"
          labelText="Descrição"
          mask=""
          disabled={false}
          onChange={(e) => handleUpdateState(setDescription, e.target.value)}
          setErrorState={setIsErrorDescription}
          isErrorState={isErrorDescription}
          isRequired
          placeholder=""
          value={description}
        />
        <Prices>
          <Input
            InputType="number"
            name="SellPrice"
            labelText="Preço de venda"
            mask=""
            disabled={false}
            onChange={(e) => handleUpdateState(setSellPrice, e.target.value)}
            setErrorState={setIsErrorSellPrice}
            isErrorState={isErrorSellPrice}
            isRequired
            placeholder=""
            value={sellPrice}
          />
          <Input
            InputType="number"
            name="purchasePrice"
            labelText="Preço de compra"
            mask=""
            disabled={false}
            onChange={(e) =>
              handleUpdateState(setPurchasePrice, e.target.value)
            }
            setErrorState={setIsErrorPurchasePrice}
            isErrorState={isErrorPurchasePrice}
            isRequired
            placeholder=""
            value={purchasePrice}
          />
        </Prices>
      </Form>
    </ContainerModal>
  );
}
