import { useState } from 'react';

function DomainLookup() {
  const [domain, setDomain] = useState('');
  const [result, setResult] = useState('');

  const checkDomain = () => {
    if (!domain) {
      setResult('Vui lòng nhập tên miền!');
      return;
    }
    if (!domain.endsWith('.vn')) {
      setResult('Tên miền phải kết thúc bằng .vn!');
      return;
    }
    setResult(`Tên miền ${domain} đang được kiểm tra... (Kết quả mô phỏng: Có thể sử dụng)`);
  };

  return (
    <section id="lookup" className="py-12 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center text-blue-800 mb-6">Tra cứu tên miền .vn</h2>
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
          <input
            type="text"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            placeholder="Nhập tên miền (ví dụ: example.vn)"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={checkDomain}
            className="w-full mt-4 bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Tra cứu
          </button>
          <p className={`mt-4 text-center ${result.includes('lỗi') ? 'text-red-500' : 'text-green-500'}`}>
            {result}
          </p>
        </div>
      </div>
    </section>
  );
}

export default DomainLookup;