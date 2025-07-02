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
    <section id="lookup" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4 fw-bold text-primary">Tra cứu tên miền .vn</h2>
        <div className="card mx-auto" style={{ maxWidth: '400px' }}>
          <div className="card-body">
            <input
              type="text"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
              placeholder="Nhập tên miền (ví dụ: example.vn)"
              className="form-control mb-3"
            />
            <button onClick={checkDomain} className="btn btn-primary w-100">Tra cứu ngay</button>
            <p className={`mt-3 text-center ${result.includes('lỗi') ? 'text-danger' : 'text-success'}`}>
              {result}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DomainLookup;