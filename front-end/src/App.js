
//import './App.css';
//import Header from './components/Header'
import Route from './Routes'
//import Footer from './components/Footer'

//import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter} from 'react-router-dom'

function App() {
 
  return (
    <BrowserRouter>
    <Route/>
    {/* <div className="App">
      <Header></Header>
      <Container></Container>
      <Footer></Footer>

    </div> */}
    </BrowserRouter>
  );
}

export default App;
