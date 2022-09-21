import PropTypes from 'prop-types';

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

ContactList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.exact({
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired
        })
    )
}