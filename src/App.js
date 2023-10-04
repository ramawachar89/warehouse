import logo from './logo.svg';
import './App.css';
import WarehouseListing from './warehouse';
import { Provider } from 'react-redux';
function App() {
return(
  <>
  <Provider>

  <WarehouseListing/>
  </Provider>
  </>
)
}

export default App;
