function Statistics() {
  return (
    <section id="stats" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4 fw-bold text-primary">Thống kê tên miền .vn</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card bg-primary text-white text-center p-4">
              <h5 className="card-title">Tổng số tên miền</h5>
              <p className="display-6 fw-bold">666.976</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card bg-success text-white text-center p-4">
              <h5 className="card-title">Thành viên VNIX</h5>
              <p className="display-6 fw-bold">53</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card bg-info text-white text-center p-4">
              <h5 className="card-title">Băng thông VNIX</h5>
              <p className="display-6 fw-bold">484 Gbps</p>
            </div>
          </div>
        </div>
        <p className="mt-4 text-center text-muted">
          Hệ thống DNS quốc gia vận hành các cụm máy chủ tại Hà Nội, Đà Nẵng, TP.HCM, kết nối qua VNIX.
        </p>
      </div>
    </section>
  );
}

export default Statistics;