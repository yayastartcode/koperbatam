import { useState } from 'react'

export default function Accordion({ title, children, id }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 transition text-left focus:outline-none"
      >
        <span className="font-bold text-gray-700 flex items-center">
          <span className="mr-3 text-xl font-bold text-primary">{isOpen ? '-' : '+'}</span> {title}
        </span>
      </button>
      {isOpen && (
        <div className="p-6 bg-white border-t border-gray-100 text-sm leading-relaxed text-gray-600">
          {children}
        </div>
      )}
    </div>
  )
}
