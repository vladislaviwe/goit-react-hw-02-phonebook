import PropTypes from 'prop-types';

export default function Filter({ filter, handleChange }) {
    return (
        <label>
            <p>Find contacts by name</p>
            <input type="text" name="filter" value={filter} onChange={handleChange}/>
        </label>
    )
}

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired
}
