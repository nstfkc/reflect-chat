import { AuthProvider } from "auth";

const App = () => {
  return <AuthProvider authURL="http://localhost:8080/auth">Hi</AuthProvider>;
};

export default App;
