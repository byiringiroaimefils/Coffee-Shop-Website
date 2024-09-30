import Navigation from "./Navigation";
const BreakfastMenu = () => {
  const menuItems = [
    {
      name: "TWO EGGS ANY STYLE",
      description: "fried eggs*, scrambled, omelette) sliced multigrain bread, strawberry jam, butter",
      price: 8.99,
      image: "https://static.wixstatic.com/media/b8deca_a5d27a9d325d406086004f356f93e880~mv2.jpg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp"
    },
    {
      name: "GREEK OMELETTE",
      description: "spinach, feta cheese, sliced multigrain bread, strawberry jam, butter",
      price: 11.49,
      image: "https://static.wixstatic.com/media/b8deca_835d273fc3964d9eae68e78840d564f3~mv2.jpg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp"
    },
    {
      name: "SALMON OMELETTE",
      description: "smoked salmon*, onions, capers, dill, cream cheese, sliced multigrain bread, strawberry jam, butter",
      price: 12.99,
      image: "https://static.wixstatic.com/media/b8deca_dbe2347a67264e1bb62ddfb5eebce226~mv2.jpg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.webp"
    },
    
  ];

  return (
    <>
    <Navigation/>
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-2">YOUR ORDERS </h2>
      <div className="w-24 h-1 bg-gray-300 mx-auto mb-4"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {menuItems.map((item, index) => (
          <div key={index} className="flex flex-col items-center mb-8">
            <img src={item.image} alt={item.name} className="w-full h-48 object-cover mb-4 rounded-lg" />
            <h3 className="text-xl font-bold mb-2">{item.name}</h3>
            <div className="w-16 h-0.5 bg-gray-300 mb-2"></div>
            <p className="text-sm text-center text-gray-600 mb-2">{item.description}</p>
            <p className="text-lg font-semibold">${item.price.toFixed(2)}</p> <br /> <br />
            <button className="bg-red-500 text-white w-full p-2 rounded-md hover:bg-red-600">Delete Order</button>

          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default BreakfastMenu;