import { useState, Fragment } from "react"

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
    <>
      <h3>Rendering Lists & Fragment</h3>
      <button onClick={addItem}>Add Item</button>
      <pre>
        {items.map(item => {
          return (
            <Fragment key={item.id}>
              <label>
                {item.name}
                <input type="text" />
              </label>
              <br />
            </Fragment>
          )
        })}
      </pre>
    </>
  )
}