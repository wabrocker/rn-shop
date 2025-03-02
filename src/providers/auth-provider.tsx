import { Session } from "@supabase/supabase-js";
<<<<<<< HEAD
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
=======
import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";
>>>>>>> 960928abd84cdb738a946b7c9e5329d41ebf356b

import { supabase } from "../lib/supabase";

type AuthData = {
  session: Session | null;
  mounting: boolean;
  user: any;
};

const AuthContext = createContext<AuthData>({
  session: null,
  mounting: true,
  user: null,
});

<<<<<<< HEAD
export default function AuthProvider({ children }: PropsWithChildren) {
=======
export default function AuthProvider({children}: PropsWithChildren) {
>>>>>>> 960928abd84cdb738a946b7c9e5329d41ebf356b
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState(null);
  const [mounting, setMounting] = useState(true);

  useEffect(() => {
    const fetchSession = async () => {
<<<<<<< HEAD
      const {
=======
      const { 
>>>>>>> 960928abd84cdb738a946b7c9e5329d41ebf356b
        data: { session },
      } = await supabase.auth.getSession();

      setSession(session);

      // if (session) {
      //   const { data: user, error} = await supabase
      //     .from("users")
      //     .select('*')
      //     .eq('id', session.user.id)
      //     .single();

      //   if (error) {
      //     console.error('***error in fetchSession', error);
      //   } else {
      //     setUser(user);
      //   };
      // };
<<<<<<< HEAD

=======
      
>>>>>>> 960928abd84cdb738a946b7c9e5329d41ebf356b
      setMounting(false);
    };

    fetchSession();
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ session, mounting, user }}>
      {children}
    </AuthContext.Provider>
  );
}

<<<<<<< HEAD
export const useAuth = () => useContext(AuthContext);
=======
export const useAuth = () => useContext(AuthContext);
>>>>>>> 960928abd84cdb738a946b7c9e5329d41ebf356b
