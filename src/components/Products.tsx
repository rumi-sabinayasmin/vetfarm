import { ProductCard } from "./ProductCard";
import dogFoodImage from "@/assets/dog-food.jpg";
import catFoodImage from "@/assets/cat-food.jpg";

export const Products = () => {
  const products = [
    {
      title: "Premium Dog Food",
      description: "Nutritionally balanced formula for all breeds",
      image: dogFoodImage,
      features: [
        "High-quality protein sources",
        "Essential vitamins & minerals",
        "No artificial preservatives",
        "Supports healthy digestion"
      ]
    },
    {
      title: "Premium Cat Food",
      description: "Specially crafted for feline nutrition",
      image: catFoodImage,
      features: [
        "Rich in omega fatty acids",
        "Promotes healthy coat & skin",
        "Natural ingredients only",
        "Supports urinary health"
      ]
    }
  ];

  return (
    <section id="products" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Premium <span className="text-primary">Pet Nutrition</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Carefully selected ingredients for your pet's optimal health and happiness
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};
