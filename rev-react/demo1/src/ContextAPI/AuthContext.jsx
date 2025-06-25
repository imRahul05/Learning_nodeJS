import { createContext, useState, useContext } from "react";
import axios from "axios";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(false);

  const login = async (email, password) => {
    setLoading(true);
    try {
      const res = await axios.post(
        "https://reqres.in/api/login",
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": "reqres-free-v1"
          },
        }
      );

      setToken(res.data.token);
      setIsAuth(true);
      setLoading(false);
      return { success: true };
    } catch (err) {
      setIsAuth(false);
      setToken(null);
      setLoading(false);
      return { success: false, error: err.response.data.error };
    }
  };

  const logout = () => {
    setIsAuth(false);
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ isAuth, token, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
