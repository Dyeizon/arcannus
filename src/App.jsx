import { Header } from "./components/Header";
import { HomePage } from "./pages/HomePage";
import { MyArcanePage } from "./pages/MyArcanePage";
import { Menu } from "./components/Menu";
import { Footer } from "./components/Footer";
import { ContextProvider } from './contexts/MenuContext';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <BrowserRouter>
      <ContextProvider>
        <Menu/>
        <Header/>
      </ContextProvider>
        <Routes>
          <Route element={ <HomePage/> } path="/" exact/>
          <Route element={ <MyArcanePage/> } path="/my-arcane"/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  );
}