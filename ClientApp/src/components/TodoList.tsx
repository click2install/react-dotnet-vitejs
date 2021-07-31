import { FormEvent, useState } from "react";
import { useUser } from "../context/UserContext";

type Todo =
  {
    id: number;
    text: string;
  };

export function TodoList()
{
  const [list, setList] = useState([] as Todo[]);
  const [text, setText] = useState("");
  const { email, id } = useUser();

  function addItem(e: FormEvent<HTMLFormElement>)
  {
    e.preventDefault();

    if (text !== "")
    {
      setList(val => val.concat({ id: new Date().valueOf(), text }));
      setText("");
    }
  }

  function removeItem(id: number)
  {
    setList(val => val.filter(x => x.id !== id));
  }

  return (
    <>
      <div style={{ margin: "10px 0", padding: "10px 0" }}>
        <form onSubmit={addItem}>
          <input onChange={(e) => setText(e.target.value)} value={text} />
        </form>
      </div>
      {list.map(({ id, text }) => (
        <div style={{ margin: "10px 0", padding: 10, border: "1px solid #bbb" }}>
          <div>{text}</div>
          <em>{new Date(id).toISOString()}</em>
          <button style={{ float: "right" }} onClick={() => removeItem(id)}>Remove</button>
        </div>
      ))}
      <p>
        User id: {id}, email: {email}
      </p>
    </>
  );
}