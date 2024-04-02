import React from "react";
import { CustomButton } from "./CustomButton";
import { heroResults } from "./Constants";

const Hero = () => {
  return (
    <section className="container mx-auto flex flex-col md:flex-row justify-between p-2 items-center">
      <div className="w-full md:w-[40%] text-start flex flex-col gap-5">
        <h3 className="text-3xl w-full xs:w-1/2 xl:w-full">
          Мы создаем цифровые решения, которые вдохновляют, привлекают и
          преображают
        </h3>
        <p className="text-xs">
          Мы - это команда талантливых специалистов, объединенных общей страстью
          к инновациям и стремлениям к достижению выдающихся результатов
        </p>
        <div className="flex gap-2 md:gap-10 my-5 md:my-0 items-center h-10">
          <button className="border rounded-full border-primary text-primary h-full px-6">
            Подробнее
          </button>
          <CustomButton>Оставить заявку</CustomButton>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex flex-col gap-5">
        <img
          className="rounded-2xl hidden md:flex"
          src="imgHero.png"
          alt="hero img"
        />
        <div className="flex bg-slate-100 rounded-2xl p-2 py-6 md:p-6 justify-between">
          {heroResults.map((item) => (
            <div className="flex flex-col" key={item.id}>
              <h2 className="font-bold text-4xl">{item.h2}</h2>
              <p className="text-xs">{item.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
