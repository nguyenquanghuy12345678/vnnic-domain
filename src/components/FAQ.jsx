import { useState } from 'react';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { question: "Tên miền .vn là gì?", answer: "Tên miền .vn là tên miền quốc gia cấp cao của Việt Nam, được quản lý bởi VNNIC, đại diện cho uy tín và thương hiệu Việt." },
    { question: "VNNIC là gì?", answer: "VNNIC (Vietnam Internet Network Information Center) là cơ quan quản lý tài nguyên Internet tại Việt Nam, bao gồm tên miền .vn và địa chỉ IP." },
    { question: "DNS Watch là gì?", answer: "DNS Watch là công cụ của VNNIC, cho phép tra cứu trạng thái tên miền và kiểm tra quá trình phân giải DNS." },
    { question: "VNIX là gì?", answer: "VNIX (Vietnam National Internet Exchange) là hệ thống kết nối Internet quốc gia, hỗ trợ tăng tốc độ truy cập và độ tin cậy cho tên miền .vn." }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center text-blue-800 mb-8">Câu hỏi thường gặp</h2>
        <div className="max-w-2xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-4 bg-gray-50 rounded-lg shadow-md hover:bg-gray-100 transition duration-300 flex justify-between items-center"
              >
                <span className="font-medium text-gray-700">{faq.question}</span>
                <span>{openIndex === index ? '-' : '+'}</span>
              </button>
              {openIndex === index && (
                <div className="p-4 bg-gray-200 rounded-b-lg">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;