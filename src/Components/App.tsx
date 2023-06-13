import React from "react";
import { BrowserRouter, useLocation, useRoutes } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'

import { routes } from "../Router";

library.add(fas, faTwitter, faFontAwesome);

const AppRoutes = () => {
  const _routes = useRoutes(routes);
  const location = useLocation();

  React.useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);

  React.useEffect(() => {
    const defaultPageTitle = "Data.gouv.mc";

    document.title = defaultPageTitle;
  }, [location.pathname]);

  return <>{_routes}</>;
};

export const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>
  );
};

