import React from "react";
import { useParams } from "react-router-dom";

const Account = () => {
  const { subpage } = useParams();

  const buttonClass = (button) => {
    let finalClass =
      "hover:bg-primary-400 cursor-pointer rounded-full px-4 py-2 transition hover:text-white";

    if (button === subpage) finalClass += " bg-primary-400 text-white";

    return finalClass;
  };

  return (
    <section className="p-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4">
        <div className="flex">
          <button className={buttonClass("profile")}>Perfil</button>
          <button className={buttonClass("bookings")}>Reservas</button>
          <button className={buttonClass("places")}>Lugares</button>
        </div>

        <div className="flex flex-col items-center gap-2">
          <p>Locado como Andre (andre@andre.com)</p>

          <button className="bg-primary-400 cursor-pointer rounded-full px-4 py-2 text-white transition">
            Logout
          </button>
        </div>
      </div>
    </section>
  );
};

export default Account;
