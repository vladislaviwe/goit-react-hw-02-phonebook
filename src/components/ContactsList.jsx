export default function ContactList({ items, removeContact }) {
    const elements = items.map(({ name, number, id }) => {
        return (
            <li key={id}>{name}: {number}
                <button type="button" onClick={() => removeContact(id)}>Delete</button>
            </li>
        )
    })
    return (
        <ol>{elements}</ol>
    )
}