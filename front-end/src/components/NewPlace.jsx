import React from 'react'

const NewPlace = () => {
  return (
    <div className="w-full">
        <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-bold">Título</h2>
            <input
                type="text"
                placeholder="Digite o título do seu anúncio"
                className="rounded-full border border-gray-300 px-4 py-2"
            />
        </div>
    </div>
  )
}

export default NewPlace