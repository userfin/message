import { AppRouter } from './router/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
