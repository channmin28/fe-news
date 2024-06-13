import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./modules/app/AppLayout";
import ProtectedComponent from "./modules/app/ProtectComponent";
import Culture from "./modules/culture/Culture";
import { ErrorBoundaryPage } from "./modules/error/boundary";
import Homepages from "./modules/home/Homepages";
import SinglePage from "./modules/singlePage/SinglePage";
import { CULTURE_URL, HOME_URL, SINGLE_URL } from "./urls";

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
          <ProtectedComponent
            Element={Homepages}
            title='Trang chủ'
            url={HOME_URL}
          />
        ),
      },
      {
        path: SINGLE_URL,
        element: (
          <ProtectedComponent Element={SinglePage} title='' url={SINGLE_URL} />
        ),
      },
      {
        path: CULTURE_URL,
        element: (
          <ProtectedComponent
            Element={Culture}
            title='Culture'
            url={CULTURE_URL}
          />
        ),
      },
    ],
  },
]);
