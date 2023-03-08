import Header from "./components/Header/Header";
import store from "./store/store";
import {Provider} from 'react-redux'
import {Routes,Route} from 'react-router-dom'
import Home from "./components/Home/Home";
import Detail from "./components/Detail/Detail";
function App() {
  return (
    <Provider store={store}>
      <Header/>
      {/* <Home/> */}
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Home' element={<Home/>}></Route>
        <Route path='/detail' element={<Detail/>}></Route>
     </Routes>
    </Provider>

  );
}

export default App;
