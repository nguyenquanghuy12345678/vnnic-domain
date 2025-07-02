function Home() {
  return (
    <section id="home" className="bg-gray-100 min-h-screen flex items-center justify-center bg-[url('https://via.placeholder.com/1920x1080')] bg-cover bg-center">
      <div className="text-center p-6 bg-white bg-opacity-90 rounded-lg shadow-xl max-w-4xl">
        <h2 className="text-4xl font-extrabold text-blue-800 mb-4">Tên miền .vn - Niềm tin thương hiệu</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Tên miền .vn là thương hiệu số quốc gia, được quản lý bởi VNNIC. Với hơn 666.976 tên miền đang hoạt động, .vn đại diện cho uy tín và độ tin cậy của các tổ chức, doanh nghiệp Việt Nam.
        </p>
      </div>
    </section>
  );
}

export default Home;