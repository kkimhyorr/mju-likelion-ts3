import { useNavigate, Routes, Route } from "react-router-dom";
import UserList from "./pages/UserList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { ThemeProvider } from "styled-components";
import { theme } from "./DS/theme";
import { GlobalFont } from "./DS/GlobalFont";
import GlobalStyle from "./DS/GlobalStyle";
import Header from "./components/Header";

function App() {
  const navigate = useNavigate();
  const tabs = [
    {
      id: 0,
      title: "로그인",
      url: "/api/auth/login",
    },
    {
      id: 1,
      title: "회원가입",
      url: "/api/auth/register",
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <GlobalFont />
      <GlobalStyle />
      <Header onClickLogo={() => navigate("/")} tabs={tabs} />
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/api/auth/register" element={<Register />} />
        <Route path="/api/auth/login" element={<Login />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
