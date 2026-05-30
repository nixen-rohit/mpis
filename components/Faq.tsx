import React from "react";

import FAQSection from "@/components/custom/FAQSection";


const faqData = [
  {
    id: 1,
    question: "What services do you provide ?",
    answer:
      "We help businesses grow. We do this by building websites and custom software. We also manage cloud infrastructure. We run marketing campaigns based on data. This way, you can focus on your brand.",
  },
  {
    id: 2,
    question: "Do you support after project delivery ?",
    answer:
      "Yes, we do. We stay to handle updates. We fix bugs. We ensure everything is fast and secure. You do not have to worry",
  },
  {
    id: 3,
    question: "Can you manage marketing and development together?",
    answer:
      "Yes, we can. That is what we do best. We align your website with your marketing. Your tech is built to convert visitors. This creates a path to success.",
  },
  {
    id: 4,
    question: "Do you build custom system ?",
    answer:
      "Yes, we do not use templates. Every system is built from scratch. It is designed to match your workflows. This ensures it solves your business challenges.",
  },
  {
    id: 5,
    question: "Is data security ensured ?",
    answer:
      "Security is important to us. We use encryption. We use safety protocols. Your information is protected. Your customer's privacy is safe.",
  },
];

const Faq = () => {
  return (
    <FAQSection
      tag="Have Questions?"
      firstHeading="Frequently Asked"
      secondHeading="Questions"
      description="Everything you need to know about us and our services. Can’t find an answer? Feel free to contact us."
      headingTag="h2"
      faqs={faqData}
    />
  );
};

export default Faq;
