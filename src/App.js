import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import theme from './theme/index';



function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/sign-in" element={<SignIn/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="*" element={<h1>not found</h1>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
