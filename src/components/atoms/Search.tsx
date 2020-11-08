import React from 'react'

interface ISearch {
  placeholder: string;
  width: string;
}

const SearchClass: Record<string, string> = {
    halfSize: " w-1/2 pl-8 pr-4",
    quaterSize: " w-1/4 pl-6 pr-3",
}

function Search({ placeholder, width }: ISearch) {
  return (
    <div className={`shadow flex w-1/2 rounded-md border-solid border-2 border-gray-600 ${SearchClass[`${width}`]}`}>
      <input className="w-full rounded-sm p-2" type="text" placeholder={placeholder} />
      <button className="bg-white w-auto flex justify-end items-center p-2">
        <img className="bg-white w-auto flex justify-end items-center" src="/assets/img/Search.svg" alt="search icon" />
      </button>
    </div>
  )
}

export default Search
