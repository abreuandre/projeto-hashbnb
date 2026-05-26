import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const Place = () => {
  const { id } = useParams();
  const [place, setPlace] = useState(null);

  useEffect(() => {
    if (id) {
      const axiosGet = async () => {
        const { data } = await axios.get(`/places/${id}`);

        console.log(data);
        setPlace(data);
      };

      axiosGet();
    }
  }, [id]);

  if (!place) return <></>;

  return (
    <section>
        <div className="flex flex-col mx-auto max-w-7xl gap-8 p-8">
          <div className="flex flex-col gap-1">
            <div className="text-3xl font-bold">{place.title}</div>

          </div>
          
          <div className="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>

            <p>{place.city}</p>

            <div className="grid aspect-[3/2] grid-cols-[2fr_1fr] grid-rows-2 gap-4 overflow-hidden rounded-2xl">
            {place.photos
              .filter((photo, index) => index < 3)
              .map((photo, index) => (
                <img 
                  className= {`${index === 0 ? "row-span-2 h-full" : ""} aspect-square w-full cursor-pointer object-cover transition hover:opacity-75`}
                  src={photo} 
                  alt="Imagem da Acomodação" 
                />
              ))}
              {/*<img 
                className="row-span-2 aspect-square h-full w-full object-cover" 
                src={place.photos[0]} 
                alt="Imagem da Acomodação" 
              />
              <img 
                className="aspect-square w-full object-cover" 
                src={place.photos[1]} 
                alt="Imagem da Acomodação" 
              />
              <img 
                className="aspect-square w-full object-cover" 
                src={place.photos[2]} 
                alt="Imagem da Acomodação" 
              />
               */
              }
              
            </div>
          </div>
        </div>
      </section>
  );
};

export default Place;
