
const ProductImage = () => {
  return (
    <div className="w-full bg-blue-400 mb-16">
      <div className="container mx-auto">
        <img 
          src="https://images.unsplash.com/photo-1548839140-29a749e1cf4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
          alt="Product in use - powder being added to water" 
          className="w-full h-[300px] md:h-[400px] object-cover"
        />
      </div>
    </div>
  );
};

export default ProductImage;
