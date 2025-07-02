function Header() {
  return (
    <header className="bg-blue-600 text-white py-4 sticky top-0 z-10">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Tên miền .vn</h1>
        <nav className="space-x-4">
          <a href="#home" className="hover:underline">Trang chủ</a>
          <a href="#lookup" className="hover:underline">Tra cứu</a>
          <a href="#stats" className="hover:underline">Thống kê</a>
          <a href="#faq" className="hover:underline">FAQ</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;