import { useState } from 'react';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { question: "Tên miền .vn là gì?", answer: "Tên miền .vn là tên miền quốc gia cấp cao của Việt Nam, do VNNIC quản lý, đại diện uy tín thương hiệu." },
    { question: "VNNIC là gì?", answer: "VNNIC là cơ quan quản lý tài nguyên Internet tại Việt Nam, bao gồm tên miền .vn và địa chỉ IP." },
    { question: "DNS Watch là gì?", answer: "DNS Watch là công cụ tra cứu trạng thái tên miền và phân giải DNS của VNNIC." },
    { question: "VNIX là gì?", answer: "VNIX là hệ thống kết nối Internet quốc gia, tăng tốc độ và độ tin cậy cho tên miền .vn." }
  ];

  return (
    <section id="faq" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4 fw-bold text-primary">Câu hỏi thường gặp</h2>
        <div className="accordion" id="faqAccordion">
          {faqs.map((faq, index) => (
            <div className="accordion-item" key={index}>
              <h2 className="accordion-header" id={`heading${index}`}>
                <button
                  className={`accordion-button ${openIndex === index ? '' : 'collapsed'}`}
                  type="button"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  {faq.question}
                </button>
              </h2>
              <div className={`accordion-collapse collapse ${openIndex === index ? 'show' : ''}`} id={`collapse${index}`} aria-labelledby={`heading${index}`}>
                <div className="accordion-body">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;