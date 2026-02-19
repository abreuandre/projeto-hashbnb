import React from 'react'
import Acomodacao from '../components/Acomodacao'

const Home = () => {
  return (
    <section>
        <div className="mx-auto grid max-w-7xl grid-cols-[repeat(auto-fit,minmax(225px,1fr))] gap-8 p-8">
          <Acomodacao />
          <Acomodacao />
          <Acomodacao />
          <Acomodacao />
          <Acomodacao />
          <Acomodacao />
          <Acomodacao />
        </div>
      </section>
  )
}

export default Home