import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";
import { Home } from "./Components/Home";
import { Login } from "./Components/Login/Login";
import { UserStorage } from "./UserContext";
import { User } from "./Components/User/User";
import { ProtectedRoute } from "./Components/Helper/ProtectedRoute";
import { Photo1 } from "./Components/Photo/Photo1";
import "./App.css";
import { UserProfile } from "./Components/User/UserProfile";
import { NotFound } from "./Components/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login/*" element={<Login />} />
            <ProtectedRoute path="conta/*" element={<User />} />
            <Route path="foto/:id" element={<Photo1 />} />
            <Route path="perfil/:user" element={<UserProfile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
