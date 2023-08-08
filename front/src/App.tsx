/** React */
import { BrowserRouter, Route, Routes } from "react-router-dom";
/** Page */
import HomePage from "@page/HomePage.tsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<HomePage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
