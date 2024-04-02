const Footer = () => {
  return (
    <footer className="container mx-auto min-h-10">
      <nav className="flex flex-col sm:flex-row gap-5 justify-between items-center px-4 py-2">
        <p>©2024. Все права зарегистрированы</p>
        <img src="smavy2.png" className="h-4 md:h-7 hidden sm:flex" />
        <ul className="flex gap-4 text-black text-xs">
          <button className="p-2 border rounded-lg">Instagram</button>
          <button className="p-2 border rounded-lg">Facebook</button>
          <button className="p-2 border rounded-lg">Twitter</button>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
