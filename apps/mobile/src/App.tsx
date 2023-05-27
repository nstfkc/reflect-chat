import { AuthProvider } from "auth";

const App = () => {
  return <AuthProvider authURL="/api/auth">Hi</AuthProvider>;
};

export default App;
