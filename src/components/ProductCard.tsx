import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  amount: number;
  isPopular?: boolean;
}

const ProductCard = ({ amount, isPopular = false }: ProductCardProps) => {
  return (
    <Card
      className={`
      relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl
      ${isPopular ? "ring-2 ring-blue-500 shadow-lg" : "hover:shadow-lg"}
      gift-card-shadow
    `}
    >
      {isPopular && (
        <div className="absolute top-0 left-0 right-0 bg-blue-600 text-white text-center py-2 text-sm font-medium">
          Популярный выбор
        </div>
      )}

      <CardContent className={`p-8 text-center ${isPopular ? "pt-12" : ""}`}>
        <div className="mb-6">
          <div className="w-20 h-20 mx-auto bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center mb-4">
            <span className="text-3xl">🎁</span>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-2 font-apple">
          Apple Gift Card
        </h3>

        <div className="mb-6">
          <span className="text-4xl font-bold text-gray-900 font-apple">
            ₽{amount}
          </span>
        </div>

        <p className="text-gray-600 mb-6 font-apple">
          Идеальный подарок для покупок в App Store, iTunes и Apple Store
        </p>

        <Button className="w-full bg-blue-600 hover:bg-blue-700 font-apple font-medium py-3">
          Купить за {amount.toLocaleString()}₽
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
