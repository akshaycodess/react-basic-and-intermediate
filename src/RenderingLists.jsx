import { useState } from "react"

export function RenderingLists() {
  const [items, setItems] = useState([
    { id: crypto.randomUUID(), name: "Item 1" },
    { id: crypto.randomUUID(), name: "Item 2" },
  ]);

  function addItem() {
    setItems(currentItems => {
      return [{ id: crypto.randomUUID(), name: "New Item" }, ...currentItems]
    })
  }

  return (
    <div>
      <h3>Rendering Lists</h3>
      <button onClick={addItem}>Add Item</button>
      <pre>
        {items.map(item => {
          return <div key={item.id}><label key={item.id}>{item.name} <input type="text" /></label><br /></div>
        })}
      </pre>
    </div>
  );
}