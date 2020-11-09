import React from 'react'

interface ISearch {
  placeholder: string;
  width: string;
}

const SearchClass: Record<string, string> = {
    halfSize: " w-1/2 pl-8 pr-4",
    quaterSize: " w-2/6 pl-6 pr-3",
}

function Search({ placeholder, width }: ISearch) {
  return (
    <div className={`bg-white shadow flex w-1/2 rounded-md ${SearchClass[`${width}`]}`}>
      <input className="w-full p-2 rounded-sm focus:outline-none" type="text" placeholder={placeholder} />
      <button className="flex items-center justify-end w-auto p-3 bg-white">
        <img className="flex items-center justify-end w-auto bg-white" src="/assets/img/Search.svg" alt="search icon" />
      </button>
    </div>
  )
}

export default Search
