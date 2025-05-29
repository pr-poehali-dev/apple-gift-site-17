import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 font-apple leading-tight">
              Apple Gift Card
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 font-apple font-light max-w-3xl mx-auto">
              Подарите возможность выбора. Пополните баланс Apple ID для покупок
              в App Store, iTunes, Apple Books и многое другое.
            </p>
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 font-apple font-medium px-8 py-4 text-lg"
            >
              Выбрать номинал
            </Button>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-apple">
              Выберите номинал
            </h2>
            <p className="text-xl text-gray-600 font-apple font-light">
              Доступные номиналы Apple Gift Card
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 animate-scale-in">
            <ProductCard amount={1000} />
            <ProductCard amount={2500} isPopular={true} />
            <ProductCard amount={5000} />
          </div>
        </div>
      </section>

      {/* Instructions Preview */}
      <section id="instructions" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 font-apple">
            Как использовать
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="animate-fade-in">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💳</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 font-apple">
                Получите карту
              </h3>
              <p className="text-gray-600 font-apple">
                После покупки вы получите код подарочной карты
              </p>
            </div>

            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 font-apple">
                Активируйте
              </h3>
              <p className="text-gray-600 font-apple">
                Введите код в App Store или iTunes Store
              </p>
            </div>

            <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛍️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 font-apple">
                Покупайте
              </h3>
              <p className="text-gray-600 font-apple">
                Используйте баланс для покупок приложений, игр и контента
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-600 font-apple">
            © 2024 Apple Gift Cards. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
