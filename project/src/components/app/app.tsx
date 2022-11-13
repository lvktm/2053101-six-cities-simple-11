import {Route, BrowserRouter, Routes} from 'react-router-dom';
import { AppRoute } from '../../mocks/const';
import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Property from '../../pages/property/property';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import { Offer } from '../../types/offer';

type AppMainProps = {
  rentCount: number;
  offers: Offer;
}

function App({rentCount, offers}: AppMainProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<Main rentCount={rentCount} />}
        />
        <Route
          path={AppRoute.Login}
          element={<Login />}
        />
        <Route
          path={AppRoute.Property}
          element={<Property />}
        />
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
