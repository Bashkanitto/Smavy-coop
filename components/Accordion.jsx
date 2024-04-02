"use client";
import { useState } from "react";

export const Accordion = ({ list }) => {
  const [activeQuestionId, setActiveQuestionId] = useState(null);

  const toggleTab = (questionId) => {
    setActiveQuestionId(activeQuestionId === questionId ? null : questionId);
  };

  return (
    <div>
      {list.map((item, index) => (
        <div
          key={index}
          style={{
            height: activeQuestionId === index ? "200px" : "80px",
          }}
          className="flex border-t w-full overflow-hidden transition-all duration-700"
        >
          <button
            onClick={() => toggleTab(index)}
            className="text-start py-4 md:px-4"
          >
            <div className="flex gap-5 items-center">
              <p className="hidden sm:flex">{item.id}</p>
              <h4 className="text-lg">{item.name}</h4>
            </div>

            <div
              style={{
                opacity: activeQuestionId === index ? "1" : "0",
              }}
              className="flex justify-between items-center transition-all duration-500"
            >
              <p className="w-full lg:w-1/2">{item.text}</p>
            </div>
          </button>
        </div>
      ))}
    </div>
  );
};
