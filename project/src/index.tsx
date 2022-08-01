import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Provider } from 'react-redux';
import { store } from './store';
import { comments } from './components/mocks/comments';
import { offers } from './components/mocks/offers';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <Provider store={store}>
    <App
      offers ={offers} comments={comments}
    />
  </Provider>

);
