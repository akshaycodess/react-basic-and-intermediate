import React from "react"
export function User({ name, address, phone, email }) {
    return (
      <li>
        {name}/{address.street}/{phone}/{email}
      </li>
    )
}