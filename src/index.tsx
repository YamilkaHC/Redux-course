import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from './pages/404';
import Home from './pages/Home';
import { store } from './redux/store/store';

const root = ReactDOM.createRoot(

  document.getElementById('root') as HTMLElement
);



root.render(

  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </Provider>,

);


