export function TodoListItem({ children, isComplete }) {
    return (
        <label>
            <input type="checkbox" defaultChecked={isComplete} />
            {children}
        </label>
    )
}

// TodoListItem component
// Props: children = name, isComplete: boolean
// Checkbox (checked if complete)
// Label (children value)
