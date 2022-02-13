import React from 'react'
import { HomeIcon, MusicNoteIcon } from '@heroicons/react/outline'

const Sidebar = () => {
  return (
    <div className="flex flex-col fixed top-0 left-0 h-full border-r-2 border-amber-500 px-24 pl-8">
      <div className="mt-5 flex flex-col gap-5">
        <div
          onClick={() => (location.href = 'http://localhost:3000/')}
          className="inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-slate-50"
        >
          <HomeIcon className="h-6 w-6" />
          <span className="w-24">Home</span>
        </div>

        <div
          onClick={() => (location.href = 'http://localhost:3000/library')}
          className="inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-slate-50"
        >
          <MusicNoteIcon className="h-6 w-6" />
          <span className="w-24">Your Library</span>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
