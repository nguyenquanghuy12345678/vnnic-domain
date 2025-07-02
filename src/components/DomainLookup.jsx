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
    <section id="lookup" className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold text-center mb-4">Tra cứu tên miền .vn</h2>
        <div className="max-w-md mx-auto">
          <input
            type="text"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            placeholder="Nhập tên miền (ví dụ: example.vn)"
            className="w-full p-2 border rounded mb-2"
          />
          <button
            onClick={checkDomain}
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          >
            Tra cứu
          </button>
          <p className={`mt-2 text-center ${result.includes('lỗi') ? 'text-red-500' : 'text-green-500'}`}>
            {result}
          </p>
        </div>
      </div>
    </section>
  );
}

export default DomainLookup;