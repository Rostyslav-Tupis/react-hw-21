import { Routes, Route } from "react-router-dom"
import SignIn from "./Components/forms/form 1(sign in)/sign_in";
import SignUp from "./Components/forms/form 2(sign up)/sing_up"; 
import AfterReg from "./Components/afterRegist/afterreg";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignIn/>} />
        <Route path="/SignUp" element={<SignUp/>}/>
        <Route path="/welcomePage" element={<AfterReg/>}/>
      </Routes>
    </div>
  );
}

export default App;
