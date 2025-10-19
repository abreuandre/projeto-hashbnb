import Acomodacao from "./components/Acomodacao"
import Header from "./components/Header"

function App() {

  return (
    <>
      <Header />

      <section>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(225px,1fr))] mx-auto max-w-7xl p-8">
          <Acomodacao />
          <Acomodacao />
          <Acomodacao />
          <Acomodacao />
          <Acomodacao />
          <Acomodacao />
          <Acomodacao />
        </div>
      </section>
      
    </>
  );
  
}

export default App
