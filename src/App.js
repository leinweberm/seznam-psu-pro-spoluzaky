import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Layout from './components/Layout';

function App() {
  return (
    <Routes>
      {/* pri nacteni stranky, se nam nacte kostra webu(layout) */}
      <Route path='/' element={<Layout />}>
        {/* pri otevreni stranky se do kostry applikace automaticky vyrenderuje nas Home komponent jakozto index element*/}
        <Route index element={<Home />} />
        {/* pri zmene url adresy na /constact se vyrenderyje komponent Contact */}
        <Route path="contact" element={<Contact/>} />
      </Route>
    </Routes>
  );
}
export default App;
