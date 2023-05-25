import FAQForm from '@components/Faq/FaqForm';
import FAQInfo from '@components/Faq/FaqInfo';

const FAQPage = () => (
  <section className="bg-white lg:py-32 py-14 lg:px-0 px-4">
    <div className="container mx-auto relative grid lg:grid-cols-2 grid-cols-1 gap-6">
      <FAQInfo />
      <FAQForm />
    </div>
  </section>
);

export default FAQPage;
