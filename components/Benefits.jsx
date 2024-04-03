import React from "react";
import { CustomButton } from "./CustomButton";
import { benefits, heroResults } from "./Constants";
import Image from "next/image";

const Benefits = () => {
  return (
    <section id="about" className="container mx-auto">
      <h3 className="text-center text-2xl md:text-4xl w-full md:w-2/3 mx-auto mb-10">
        {benefits.h3}
      </h3>
      <div className="div_items flex flex-col xl:flex-row gap-5 p-4">
        <div className="div1 text-white flex flex-col justify-between gap-5">
          
          {/* -------- 1 block ------------ */}
          {benefits.divs.map((item) => (
            <div
              key={item.id}
              style={{
                background: `url(${item.bg})`,
              }}
              className={`div_item p-10 h-full bg-no-repeat bg-cover rounded-2xl flex flex-col justify-center gap-2`}
            >
              <h4 className="w-full md:w-2/3">{item.h4}</h4>
              <p className="w-full md:w-2/3">{item.p}</p>
            </div>
          ))}
        </div>

        {/* -------- 2 block ------------ */}
        <div className="div2 bg-[url(/imgBenefits3.png)] flex flex-col w-full lg:w-[400px] bg-cover justify-between p-10 md:p-5 rounded-2xl gap-2">
          <div>
            <CustomButton>Оставвить заявку</CustomButton>
          </div>
          <p>{benefits.div2}</p>
        </div>

        {/* -------- 3 block ------------ */}
        <Image
          className="hidden xl:flex"
          src="/imgBenefits4.png"
          width={600}
          height={600}
        />
      </div>
    </section>
  );
};

export default Benefits;
