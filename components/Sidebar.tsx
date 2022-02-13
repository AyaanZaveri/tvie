import React from 'react'
import { FaStar, FaFilm } from 'react-icons/fa'

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 flex h-full flex-col border-r-2 border-amber-500 px-24 pl-8">
      <div className="mt-5 flex flex-col gap-5">
        <div
          onClick={() => (location.href = 'http://localhost:3000/')}
          className="inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-slate-50"
        >
          <FaFilm className="h-6 w-6" />
          <span className="w-24">Movies</span>
        </div>

        <div
          onClick={() => (location.href = 'http://localhost:3000/library')}
          className="inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-slate-50"
        >
          <FaStar className="h-6 w-6" />
          <span className="w-24">Favorites</span>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
