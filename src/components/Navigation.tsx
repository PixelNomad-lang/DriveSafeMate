const Navigation = () => (
  <nav className="bg-blue-900 text-white p-4">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-2xl font-bold">Drive Safe Mate</h1>
      <ul className="flex space-x-4">
        <li><a href="#introduction">Introduction</a></li>
        <li><a href="#courses">Courses</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#faq">FAQ</a></li>
        <li><a href="#news">News</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  </nav>
);
export default Navigation;