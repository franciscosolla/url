import './App.css';
import { usePath } from './hooks/usePath';
import { Decoder } from './components/Decoder';
import { Home } from './pages';

function App() {
  const path = usePath();
  
  switch (path) {
    case '':
      return <Home />;
    
    default:
      return <Decoder />
  }
}

export default App;
