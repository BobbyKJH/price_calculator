/** React */
import { BrowserRouter, Route, Routes } from "react-router-dom";
/** Page */
import HomePage from "@page/HomePage.tsx";
import CalculatorPage from "@page/CalculatorPage.tsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<HomePage/>}/>

        <Route path={"/calculator"} element={<CalculatorPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
