function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#home">
          <span className="text-warning fw-bold">.vn</span> VNNIC Portal
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" href="#home">Trang chủ</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#lookup">Tra cứu</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#stats">Thống kê</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#faq">FAQ</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;