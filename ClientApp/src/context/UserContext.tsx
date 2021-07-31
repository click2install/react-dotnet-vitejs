import { createContext, PropsWithChildren, useContext } from "react";

type UserContext =
  {
    id: string;
    email: string;
  };

const Context = createContext({} as UserContext);

export function useUser()
{
  return useContext(Context);
}

export function UserContextProvider<T>({ children }: PropsWithChildren<T>)
{
  const jsonStr = atob(document.body.dataset.id ?? "{}");
  const user = JSON.parse(jsonStr) as UserContext;

  return (
    <Context.Provider value={user}>
      {children}
    </Context.Provider>
  );
}