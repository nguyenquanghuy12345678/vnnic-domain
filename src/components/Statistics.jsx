function Statistics() {
  return (
    <section id="stats" className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold text-center mb-4">Thống kê tên miền .vn</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow text-center">
            <h3 className="text-lg font-medium">Tổng số tên miền</h3>
            <p className="text-3xl font-bold text-blue-600">666.976</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow text-center">
            <h3 className="text-lg font-medium">Thành viên VNIX</h3>
            <p className="text-3xl font-bold text-blue-600">53</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow text-center">
            <h3 className="text-lg font-medium">Băng thông VNIX</h3>
            <p className="text-3xl font-bold text-blue-600">484 Gbps</p>
          </div>
        </div>
        <p className="mt-4 text-center">
          Hệ thống DNS quốc gia vận hành các cụm máy chủ DNS Root (F-Root, K-Root, M-Root) tại Hà Nội, Đà Nẵng, TP.HCM, kết nối qua VNIX.
        </p>
      </div>
    </section>
  );
}

export default Statistics;