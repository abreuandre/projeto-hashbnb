import React from 'react'

const Account = () => {
  return (
    <section className="p-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4">
            <div>
               <button>Perfil</button>
               <button>Reservas</button>
               <button>Lugares</button>
            </div>

            <div>
                <p>Locado como Andre (andre@andre.com)</p>

                <button>Logout</button>
            </div>
            
        </div>
    </section>
  )
}

export default Account