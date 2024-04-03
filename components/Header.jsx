"use client";
import React, { useState } from "react";
import { Menu } from "lucide-react";
import Link from "next/link";
import { CustomButton } from "./CustomButton";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="container mx-auto p-0 sm:py-4 min-h-10">
      {/* phone */}
      <nav
        style={{
          transition: "0.5s",
          height: isOpen ? "200px" : "0",
        }}
        className="absolute bg-slate-400 w-full flex justify-between items-center sm:hidden z-20"
      >
        <ul
          style={{
            display: "flex",
            fontSize: isOpen ? "12px" : "0",
          }}
          className="hidden sm:flex flex-col gap-4 text-black text-xs"
          onClick={toggleMenu}
        >
          <a href="#about">О нас</a>
          <a href="#services">Услуги</a>
          <a href="#portfolio">Портфолио</a>
          <a href="#faq">FAQ</a>
          <a href="#contacts">Контакты</a>
          <a href="#review">Оставить заявку</a>
        </ul>
      </nav>
      <button
        onClick={toggleMenu}
        className="absolute right-2 top-2 flex sm:hidden text-black focus:outline-none z-50"
      >
        <Menu className="" />
      </button>

      {/* desktop */}
      <nav className="sm:flex hidden justify-between items-center border rounded-[20px] border-gray-200 bg-gray-200 h-12 px-4 py-2">
        <div className="flex gap-5 md:gap-20 items-center">
          <img src="smavy2.png" className="top-1 h-4 md:h-7" />
          <ul className="flex gap-4 text-black text-xs">
            <Link href="#About">О нас</Link>
            <Link href="#">Услуги</Link>
            <Link href="#">Портфолио</Link>
            <Link href="#">FAQ</Link>
            <Link href="#">Контакты</Link>
          </ul>
        </div>

        <CustomButton>Оставить заявку</CustomButton>
      </nav>
    </header>
  );
};

export default Header;
