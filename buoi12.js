const student = {
    name: "Nguyen Van A",
    age: 20,
    gender: "male",
    scores: {
      math: 8,
      english: 7,
      science: 9
    }
  };
  
  
  console.log("Name:", student.name);
  console.log("Age:", student.age);
  
  
  const scores = Object.values(student.scores); 
  const avgScore = scores.reduce((sum, val) => sum + val, 0) / scores.length;
  console.log("Average score:", avgScore);
  
  
  student.address = "Ha Noi";
  console.log("After adding address:", student);
  
  
  delete student.gender;
  console.log("After deleting gender:", student);
  


  const products = [
    { id: 1, name: "Laptop", price: 1500 },
    { id: 2, name: "Phone", price: 800 },
    { id: 3, name: "Tablet", price: 600 }
  ];
  
  
  const getProductById = (id) => products.find(p => p.id === id);
  console.log("Product with id=2:", getProductById(2));
  
  
  const getTotalPrice = () => products.reduce((sum, p) => sum + p.price, 0);
  console.log("Total price:", getTotalPrice());
  
  
  products.push({ id: 4, name: "Headphone", price: 200 });
  console.log("After adding new product:", products);
  
  
  const expensive = products.filter(p => p.price > 700).map(p => p.name);
  console.log("Products with price > 700:", expensive);
  