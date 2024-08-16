import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddBooks from "./AddBooks";
import BooksList from "./BooksList";

function App() {
  return (
    <>

    <BrowserRouter>
    <Routes>
        <Route path="/" exact element={<BooksList />} />
        <Route path="/add-book" element={<AddBooks />} /> 
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

