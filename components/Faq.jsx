import { faqList } from "./Constants";
import { Accordion } from "./Accordion";

const Faq = () => {
  return (
    <section id="faq" className="container mx-auto p-2">
      <h3 className="text-3xl text-center my-10">FAQ</h3>
      <Accordion list={faqList} />
    </section>
  );
};

export default Faq;
