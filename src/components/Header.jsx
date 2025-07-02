function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-4 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-wide">Tên miền .vn</h1>
        <nav className="space-x-6">
          <a href="#home" className="hover:text-yellow-300 transition duration-300">Trang chủ</a>
          <a href="#lookup" className="hover:text-yellow-300 transition duration-300">Tra cứu</a>
          <a href="#stats" className="hover:text-yellow-300 transition duration-300">Thống kê</a>
          <a href="#faq" className="hover:text-yellow-300 transition duration-300">FAQ</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;