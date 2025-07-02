function Statistics() {
  return (
    <section id="stats" className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Thống kê tên miền .vn</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center">
            <h3 className="text-lg font-medium text-gray-600">Tổng số tên miền</h3>
            <p className="text-3xl font-bold text-blue-600">666.976</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center">
            <h3 className="text-lg font-medium text-gray-600">Thành viên VNIX</h3>
            <p className="text-3xl font-bold text-blue-600">53</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center">
            <h3 className="text-lg font-medium text-gray-600">Băng thông VNIX</h3>
            <p className="text-3xl font-bold text-blue-600">484 Gbps</p>
          </div>
        </div>
        <p className="mt-6 text-center text-gray-600">
          Hệ thống DNS quốc gia vận hành các cụm máy chủ DNS Root (F-Root, K-Root, M-Root) tại Hà Nội, Đà Nẵng, TP.HCM, kết nối qua VNIX.
        </p>
      </div>
    </section>
  );
}

export default Statistics;