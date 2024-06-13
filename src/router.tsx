import { createBrowserRouter } from "react-router-dom";
import { ErrorBoundaryPage } from "./modules/error/boundary";
import AppLayout from "./modules/app/AppLayout";
import { HOME_URL } from "./urls";
import ProtectedComponent from "./modules/app/ProtectComponent";
import Home from "./modules/home";

export const router = createBrowserRouter([
  {
    path: HOME_URL,
    element: <AppLayout />,
    errorElement: (
      <AppLayout>
        <ErrorBoundaryPage />
      </AppLayout>
    ),
    children: [
      {
        path: HOME_URL,
        element: (
          <ProtectedComponent Element={Home} title='Trang chủ' url={HOME_URL} />
        ),
      },
    ],
  },
]);
