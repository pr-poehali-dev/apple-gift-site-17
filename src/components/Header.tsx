import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="text-2xl">🍎</div>
            <span className="font-apple text-xl text-gray-900 font-extrabold">
              Gift Cards
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-700 hover:text-gray-900 transition-colors font-apple"
            >
              Главная
            </a>
            <a
              href="#products"
              className="text-gray-700 hover:text-gray-900 transition-colors font-apple"
            >
              Товары
            </a>
            <a
              href="#instructions"
              className="text-gray-700 hover:text-gray-900 transition-colors font-apple"
            >
              Инструкция
            </a>
          </div>

          <Button className="bg-blue-600 hover:bg-blue-700 font-apple font-medium px-6">
            Купить
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
