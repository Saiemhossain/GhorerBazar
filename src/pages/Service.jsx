

import { useState } from 'react';

export default function Service() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: 'অর্ডার পেতে আমার কতক্ষণ সময় লাগবে?',
      answer:
        'সাধারণত আমরা প্রি-অর্ডার ব্যাতীত ৩ থেকে ৫ দিনের মধ্যে পণ্য সরবরাহ করি।',
    },
    {
      question: 'ডেলিভারি চার্জ',
      answer:
        'ঢাকার ভিতর – ৭০ টাকা। চট্টগ্রামের ভিতর – ৭০ টাকা। বাইরের এলাকায় – ১৩০ টাকা।',
    },
    {
      question: 'গ্রাহক সেবা',
      answer:
        '২৪ ঘন্টা গ্রাহক সেবা টিম কাজ করে। ১ ঘণ্টার মধ্যে প্রাথমিক জবাব এবং ২৪ ঘণ্টার মধ্যে সমাধান প্রদান করা হয়।',
    },
  ];

  return (
    <div className="service-area">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-container">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
          >
            <div className="faq-header" onClick={() => toggleFaq(index)}>
              <h3>{item.question}</h3>
              <span className="icon">{activeIndex === index ? '×' : '+'}</span>
            </div>
            <div className="faq-body">
              {activeIndex === index && <p>{item.answer}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

