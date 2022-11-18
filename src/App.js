import './App.css';
import { DataView } from './features/components/DataView'
import { Provider } from 'react-redux';
import { store } from './app/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <DataView/>
      </Provider>
    </div>
  );
}

export default App;
