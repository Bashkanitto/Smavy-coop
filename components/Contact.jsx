import { CustomButton } from "./CustomButton";

const Contact = () => {
  return (
    <section
      id="contact"
      className="container mx-auto flex flex-col lg:flex-row  gap-10 justify-between items-center lg:items-end"
    >
      <h3 className="flex flex-wrap gap-4 text-2xl md:text-5xl text-center lg:text-start w-full md:w-2/3">
        Мы делаем цифровой мир лучше {""}
        <img
          className="w-20 rounded-lg hidden lg:flex"
          src="imgHero.png"
          alt="img"
        />
        для вашего бизнеса
      </h3>
      <CustomButton>Оставить заявку</CustomButton>
    </section>
  );
};

export default Contact;
