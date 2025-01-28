import React, { createContext, useState, ReactNode, useContext, useEffect } from "react";


interface User {
  id: string;
  name: string;
  username: string;
}


interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  logout: () => void;
}


const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }): React.ReactElement => {
  const [user, setUser] = useState<User | null>(null);
 
  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setUser(JSON.parse(user));
    }
  }, []);


  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user"); 

  };

  return (
    <UserContext.Provider value={{ user, setUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};


// Custom hook for consuming the context
export const useUserContext = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};
