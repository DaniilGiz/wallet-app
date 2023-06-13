import { Navigate, RouteObject } from "react-router";
import { Home } from "../Pages/Home/Home";
import { TransactionsList } from "../Pages/Transactions/Transactions";
import { TransactionDetail } from "../Pages/TransactionDetail/TransactionDetail";


const routePaths = {
  home: {
    path: "/",
  },
  transactions: {
    list: {
      path: "/transactions/list"
    }
  },
  transaction: {
    detail: {
      path: "/transaction/detail/:id"
    }
  }
};

const routes: RouteObject[] = [
  {
    path: "",
    element: <Navigate to="/transactions/list"/>
  },
  {
    element: <Home/>,
    path: routePaths.home.path
  },
  {
    element: <TransactionsList/>,
    path: routePaths.transactions.list.path
  },
  {
    element: <TransactionDetail/>,
    path: routePaths.transaction.detail.path
  }
];

export { routePaths, routes };