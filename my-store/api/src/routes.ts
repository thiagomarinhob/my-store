import { Router } from "express";
import { ensureAuthenticateUser } from "./middlewares/ensureAuthenticateUser";
import { AuthenticateStoresController } from "./modules/account/authenticateStores/AuthenticateStoresController";
import { CreateCategoriesController } from "./modules/categories/useCases/createCategories/createCategoriesController";
import { FindAllCategoriesController } from "./modules/categories/useCases/findAllCategories/findAllCategoriesController";
import { FindByIdCategoriesController } from "./modules/categories/useCases/findByIdCategories/findByIdCategoriesController";
import { CreateStoreController } from "./modules/stores/useCases/createStore/createStoreController";
import { CreateSupplierController } from "./modules/supplier/useCases/createSupplier/createSupplierController";
import { FindAllSupplierController } from "./modules/supplier/useCases/findAllSupplier/findAllSupplierController";
import { CreateProductsController } from "./modules/products/useCases/createProducts/createProductsController";
import { UpdateProductsController } from "./modules/products/useCases/updateProducts/updateProductsController";

const routes = Router();

const authenticateClientController = new AuthenticateStoresController();
const createCategoriesController = new CreateCategoriesController();
const findAllCategoriesController = new FindAllCategoriesController();
const findByIdCategoriesController = new FindByIdCategoriesController();
const createStoreController = new CreateStoreController();
const createSupplierController = new CreateSupplierController();
const findAllSupplierController = new FindAllSupplierController();
const createProductsController = new CreateProductsController();
const updateProductsController = new UpdateProductsController();

routes.post("/authenticate", authenticateClientController.handle);

routes.post("/stores", createStoreController.handle);

routes.post(
  "/products",
  ensureAuthenticateUser,
  createProductsController.handle
);

routes.put(
  "/products/:id",
  ensureAuthenticateUser,
  updateProductsController.handle
);

routes.post(
  "/supplier",
  ensureAuthenticateUser,
  createSupplierController.handle
);

routes.get(
  "/supplier",
  ensureAuthenticateUser,
  findAllSupplierController.handle
);

routes.post(
  "/categories",
  ensureAuthenticateUser,
  createCategoriesController.handle
);
routes.get(
  "/categories",
  ensureAuthenticateUser,
  findAllCategoriesController.handle
);
routes.get(
  "/categories/:id",
  ensureAuthenticateUser,
  findByIdCategoriesController.handle
);

export { routes };
