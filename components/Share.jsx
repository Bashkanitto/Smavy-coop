import React from "react";
import { share } from "./Constants";
import { CustomButton } from "./CustomButton";

const Share = () => {
  return (
    <section className="container mx-auto">
      <h3 className="text-center text-4xl w-full md:w-2/3 mx-auto mb-4 md:mb-10">
        {share.h3}
      </h3>
      <p className="text-center w-full md:w-1/2 mx-auto my-1 md:my-5">
        {share.p}
      </p>
      <div className="flex gap-2 justify-center overflow-scroll py-10">
        {share.btns.map((item) => (
          <button
            className="border text-xs md:text-md rounded-full px-4 py-2"
            key={item}
          >
            {item}
          </button>
        ))}
      </div>
      <form className="my-10 w-full flex flex-col gap-10 p-4">
        <div className="flex flex-col md:flex-row gap-10 w-full">
          <div className="w-full">
            <label htmlFor="name">Название проекта</label>
            <input
              className="w-full border-b"
              type="text"
              id="name"
              placeholder="Название проекта"
            />
          </div>
          <div className="w-full">
            <label htmlFor="gmail">Gmail почта</label>
            <input
              className="w-full border-b"
              type="text"
              id="gmail"
              placeholder="Gmail почта"
            />
          </div>
        </div>
        <div>
          <label htmlFor="about">Расскажите нам о проекте</label>
          <input
            className="w-full border-b"
            type="text"
            id="about"
            placeholder="Расскажите нам о проекте"
          />
        </div>
      </form>
      <CustomButton className="inline float-right mr-2">
        Оставить заявку
      </CustomButton>
    </section>
  );
};

export default Share;
