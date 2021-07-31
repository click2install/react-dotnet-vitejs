import { useState } from "react";
import { useUser } from "../context/UserContext";

const style =
{
  margin: 5,
  width: 30,
  height: 30
};

export function Counter()
{
  const [count, setCount] = useState(0);
  const { email, id } = useUser();

  return (
    <>
      <section style={{ margin: "10px 0" }}>
        <h2>{count}</h2>
        <button style={style} onClick={() => setCount(val => ++val)}>+</button>
        <button style={style} onClick={() => setCount(val => --val)}>-</button>
      </section>
      <p>
        User id: {id}, email: {email}
      </p>
    </>
  );
}