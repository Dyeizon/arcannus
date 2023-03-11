import { Header } from "./components/Header";
import { Carousel } from "./components/Carousel";
import { Services } from "./components/Services";
import { Menu } from "./components/Menu";
import { Footer } from "./components/Footer";
import { ContextProvider } from './contexts/MenuContext';
import { Route, BrowserRouter } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <ContextProvider>
        <Menu/>
        <Header/> 
      </ContextProvider>
      <Carousel/>
      <Services/>
      <Footer/>
    </>
  );
}