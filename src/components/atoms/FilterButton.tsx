import React from 'react'

function FilterButton() {
    return (
        <div className="flex items-center w-24 px-4 py-3 font-semibold bg-gray-100 w-px-6 rounded-2xl">
            <div className=""><img src="assets/img/Filter.svg" alt="filter-link" /></div>
            <span className="ml-3 text-sm font-light">Filters</span>
        </div>
    )
}

export default FilterButton
