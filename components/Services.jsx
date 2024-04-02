import React from "react";
import { CustomButton } from "./CustomButton";
import { servicesCards } from "./Constants";

const Services = () => {
  return (
    <section className="container mx-auto">
      <h3 className="text-center text-4xl w-2/3 mx-auto">Наши Услуги</h3>
      <p className="text-center w-full sm:w-1/2 lg:w-1/3 mx-auto my-5">
        мы предлагаем широкий спектр цифровых услуг, помогая нашим клиентам
        достичь выдающихся результатов в онлайн-мире.
      </p>
      <div className="cards flex flex-col p-4 lg:flex-row gap-10">
        {servicesCards.map((item) => (
          <div
            key={item.id}
            style={{
              background: `url(${item.bg})`,
            }}
            className={`card1 relative bg-cover text-${item.color} rounded-2xl`}
          >
            <h3 className="absolute bg-white py-4 px-10 text-3xl rounded-lg text-black">
              {item.title}
            </h3>
            <div className="info p-5 mx-5">
              <p className="mt-40 w-full md:w-1/2">{item.p}</p>
              <ul className="my-5 mx-4 list-disc">
                {item.ul.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
            <h3 className="text-3xl inline p-5">{item.price}</h3>
            <div className="rounded-lg flex items-end md:float-end mt-10">
              <CustomButton>Оставить заявку</CustomButton>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
