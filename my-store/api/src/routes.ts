import { Router } from "express";
import { ensureAuthenticateUser } from "./middlewares/ensureAuthenticateUser";
import { AuthenticateUsersController } from "./modules/account/authenticateUser/authenticateUsersController";
import { CreateCategoriesController } from "./modules/categories/useCases/createCategories/createCategoriesController";
import { FindAllCategoriesController } from "./modules/categories/useCases/findAllCategories/findAllCategoriesController";
import { FindByIdCategoriesController } from "./modules/categories/useCases/findByIdCategories/findByIdCategoriesController";
import { CreateStoreController } from "./modules/stores/useCases/createStore/createStoreController";
import { CreateSupplierController } from "./modules/supplier/useCases/createSupplier/createSupplierController";
import { FindAllSupplierController } from "./modules/supplier/useCases/findAllSupplier/findAllSupplierController";
import { CreateProductsController } from "./modules/products/useCases/createProducts/createProductsController";
import { UpdateProductsController } from "./modules/products/useCases/updateProducts/updateProductsController";
import { FindAllProductsController } from "./modules/products/useCases/findAllProducts/findAllProductsController";
import { RefreshTokenController } from "./modules/account/refreshToken/refreshTokenController";
import { CreateUsersController } from "./modules/users/useCases/createUsers/createUsersController";
import { CreateRoleController } from "./modules/roles/useCases/createRoles/createRolesController";
import { CreatePermissionsController } from "./modules/permissions/useCases/createPermissions/createPermissionsController";
import { UpdateRolesController } from "./modules/roles/useCases/updateRoles/updateRolesController";
import { FindByIdProductController } from "./modules/products/useCases/findByIdProducts/findByIdProductsController";
import { DeleteProductsController } from "./modules/products/useCases/deleteProducts/deleteProductsController";
import { UserActivedController } from "./modules/account/userActived/userActivedController";

const routes = Router();

const authenticateUserController = new AuthenticateUsersController();
const createCategoriesController = new CreateCategoriesController();
const findAllCategoriesController = new FindAllCategoriesController();
const findByIdCategoriesController = new FindByIdCategoriesController();
const createStoreController = new CreateStoreController();
const createSupplierController = new CreateSupplierController();
const findAllSupplierController = new FindAllSupplierController();
const createProductsController = new CreateProductsController();
const updateProductsController = new UpdateProductsController();
const findAllProductsController = new FindAllProductsController();
const refreshTokenController = new RefreshTokenController();
const createUsersController = new CreateUsersController();
const createRoleController = new CreateRoleController();
const createPermissionsController = new CreatePermissionsController();
const updateRolesController = new UpdateRolesController();
const findByIdProductController = new FindByIdProductController();
const deleteProductsController = new DeleteProductsController();
const userActivedController = new UserActivedController();

routes.post("/authenticate", authenticateUserController.handle);

routes.post("/refresh-token", refreshTokenController.handle);

routes.get("/actived", ensureAuthenticateUser, userActivedController.handle);

routes.post("/stores", createStoreController.handle);

routes.post("/users", createUsersController.handle);

routes.post("/roles", createRoleController.handle);
routes.post("/permissions", createPermissionsController.handle);

routes.put("/roles/:id", ensureAuthenticateUser, updateRolesController.handle);

routes.get(
  "/products/:id",
  ensureAuthenticateUser,
  findByIdProductController.handle
);

routes.delete(
  "/products/:id",
  ensureAuthenticateUser,
  deleteProductsController.handle
);

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

routes.get(
  "/products",
  ensureAuthenticateUser,
  findAllProductsController.handle
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
