import { React } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { history } from "./helpers";
import { alertActions } from "./actions";
import Paper from "@mui/material/Paper";

// auth -----------------------------------------------------------------------------------------------------------------
// import Auth from "./containers/Auth/Auth";
// import Login from "./containers/Auth/Login/Login";

// customer -------------------------------------------------------------------------------------------------------------
// import ProtectedCustomerRoute from "./components/common/auth/ProtectedCustomerRoute/ProtectedCustomerRoute.compoent";
// import CustomerDashboard from "./containers/Customer/CustomerDashboard";
// import CustomerStore from "./containers/Customer/CustomerStore";
// import CustomerStoreItem from "./containers/Customer/CustomerStoreItem";
// import CustomerStoreCart from "./containers/Customer/CustomerStoreCart/CustomerStoreCart";
// import CustomerStoreCheckoutSuccess from "./containers/Customer/CustomerStoreCheckoutSuccess";

// admin
// import ProtectedAdminRoute from "./components/common/auth/ProtectedAdminRoute/ProtectedAdminRoute.component";
// import AdminDashboard from "./containers/Admin/AdminDashboard";

// parameter management
// import ParamaeterManagementHome from "./containers/ParameterManagement/ParameterManagementHome";
// import ParameterList from "./containers/ParameterManagement/ParameterList";
// import ParameterAdd from "./containers/ParameterManagement/ParameterAdd";
// import ParameterEdit from "./containers/ParameterManagement/ParameterEdit";

// User management
// import UserList from "./containers/UserManagemet/UserList/index.";
// import UserAdd from "./containers/UserManagemet/UserAdd";

// Role management
// import RoleList from "./containers/RoleManagement/RoleList/index.";
// import RoleAdd from "./containers/RoleManagement/RoleAdd";

// Organiztion management
// import OrganizationList from "./containers/OrganizationManagement/OrganizationList";
// import OrganizationAdd from "./containers/OrganizationManagement/OrganizationAdd";
// import OrganizationEdit from "./containers/OrganizationManagement/OrganizationEdit";

// quotation
// import QuotationPage from "./Pages/QuotationPage";
// import AcceptQuotation from "./Pages/AcceptQuotation";

// procebook
// import PriceBookContainer from "./components/PriceBookComponents/PriceBookContainer";

// production orders
// import ProductionOrder from "./components/ProductionOrder/ProductionOrderContainer";

// invoices
// import InvoiceContainer from "./components/Invoice/InvoiceContainer";

// sales orders
// import SalesOrderPage from "./Pages/SalesOrderPage";
// import SalesOrderCustomer from "./Pages/SalesOrderCustomer";
// import SalesOrdersContainer from "./components/SalesOrders/SalesOrdersContainer";

// 404 ------------------------------------------------------------------------------------------------------------------
import NotFound from "./containers/misc/NotFound/NotFound";
// import QuotationsComponent from "./Pages/Quotations";
// import SalesOrderProceedComponent from "./components/SalesOrderCustomer/SalesOrderProceedComponent";

const App = (props) => {
  const dispatch = useDispatch();

  history.listen((location, action) => {
    dispatch(alertActions.clear());
  });

  return (
    <Paper className="App" elevation={0}>
      <BrowserRouter>
        <Routes>
          {/* Auth */}
          {/* <Route path="auth" element={<Auth />}>
            <Route path="login" element={<Login />} />
          </Route> */}

          {/* Customer */}
          {/* <Route path="/" element={<ProtectedCustomerRoute />}>
            <Route path="/dashboard" element={<CustomerDashboard />} />

            <Route path="/store">
              <Route index element={<CustomerStore />} />

              <Route path=":itemId" element={<CustomerStoreItem />} />
              <Route path="/store/cart">
                <Route index element={<CustomerStoreCart />} />
                <Route
                  path="/store/cart/success"
                  element={<CustomerStoreCheckoutSuccess />}
                />
              </Route>
            </Route>
          </Route> */}

          {/* Admin */}
          {/* <Route path="/admin" element={<ProtectedAdminRoute />}>
            <Route path="/admin/dashboard" element={<AdminDashboard />} />

            <Route path="/admin/parameter-management">
              <Route index element={<ParamaeterManagementHome />} />

              <Route path=":parameter">
                <Route index element={<ParameterList />} />
                <Route
                  path="/admin/parameter-management/:parameter/add"
                  element={<ParameterAdd />}
                />
                <Route
                  path="/admin/parameter-management/:parameter/:id/edit"
                  element={<ParameterEdit />}
                />
              </Route>
            </Route> */}

          {/* <Route path="/admin/user-management">
              <Route path="/admin/user-management/users">
                <Route index element={<UserList />} />
                <Route
                  path="/admin/user-management/users/add"
                  element={<UserAdd />}
                />
              </Route>

              <Route path="/admin/user-management/roles">
                <Route index element={<RoleList />} />
                <Route
                  path="/admin/user-management/roles/add"
                  element={<RoleAdd />}
                />
              </Route>
            </Route> */}

          {/* <Route path="/admin/organization-management">
              <Route index element={<OrganizationList />} />
              <Route
                path="/admin/organization-management/add"
                element={<OrganizationAdd />}
              />
              <Route
                path="/admin/organization-management/:id/edit"
                element={<OrganizationEdit />}
              />
            </Route>

            <Route path="/admin/quotation" element={<QuotationPage />} />

            <Route path="/admin/quotations" element={<QuotationsComponent />} />

            <Route
              path="/admin/quotation/:id/:admin"
              element={<AcceptQuotation />}
            />

            <Route path="/admin/priceBook" element={<PriceBookContainer />} />

            <Route
              path="/admin/production-orders"
              element={<ProductionOrder />}
            />

            <Route path="/admin/invoices">
              <Route index element={<InvoiceContainer />} />
              <Route path=":id" element={<InvoiceContainer />} />
            </Route>

            <Route
              path="/admin/sales-orders"
              element={<SalesOrdersContainer />}
            />
            <Route
              path="/admin/sales-orders/:id"
              element={<SalesOrderPage />}
            />
            <Route
              path="/admin/sales-orders/customer/:id"
              element={<SalesOrderCustomer />}
            />

            <Route
              path="/admin/sales-order/proceed/:id"
              element={<SalesOrderProceedComponent />}
            />
          </Route> */}

          {/* open routes */}
          {/* <Route path="/quotation/:id/accept" element={<AcceptQuotation />} /> */}

          {/* Not found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Paper>
  );
};

export default App;
