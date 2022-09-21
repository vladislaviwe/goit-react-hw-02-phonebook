export default function Filter({ filter, handleChange }) {
    return (
        <label>
            <p>Find contacts by name</p>
            <input type="text" name="filter" value={filter} onChange={handleChange}/>
        </label>
    )
}