import { Header } from "./components/Header";
import { Carousel } from "./components/Carousel";
import { Services } from "./components/Services";
import { Menu } from "./components/Menu";
import { ContextProvider } from './contexts/MenuContext';

export const App = () => {
  return (
    <>
      <ContextProvider>
        <Menu/>
        <Header/> 
      </ContextProvider>
      <Carousel/>
      <Services/>
    </>
  );
}