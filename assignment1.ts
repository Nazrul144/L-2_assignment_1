{
  const formatString = (input: string, toUpper: boolean = true) => {
    return toUpper ? input.toUpperCase() : input.toLowerCase();
  };

  formatString("Hello");
  formatString("Hello", true);
  formatString("Hello", false);



  const filterByRating = (items: { title: string; rating: number }[]): { title: string; rating: number }[] => {
    return items.filter((item) => item.rating >= 4);
  };

  const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 },
  ];

  filterByRating(books);




  const concatenateArrays = <T>(...arrays: T[][]): T[] => {
    return arrays.flat();
  };

  concatenateArrays([1, 2], [3, 4]);



  class Vehicle {
    private make: string;
    private year: number;

    constructor(make: string, year: number) {
      this.make = make;
      this.year = year;
    }
    getInfo(): string {
      return `Make: ${this.make}, Year: ${this.year}`;
    }
  }
  class Car extends Vehicle {
    private model: string;
    constructor(make: string, year: number, model: string) {
      super(make, year);
      this.model = model;
    }
    getModel(): string {
      return `Model: ${this.model}`;
    }
  }

  const myCar = new Car("Toyota", 2020, "Corolla");
  myCar.getInfo();
  myCar.getModel();




  const processValue = (value: string | number) => {
    if (typeof value === "string") {
      return value.length;
    } else {
      return value * 2;
    }
  };

  processValue("Hello");
  processValue(10);

  interface Product {
    name: string;
    price: number;
  }





  const getMostExpensiveProduct = (products: Product[]): Product | null => {
    if (products.length === 0) {
      return null;
    } else {
      let mostExpensiveProduct = products[0];

      for (const product of products) {
        if (product.price > mostExpensiveProduct.price) {
          mostExpensiveProduct = product;
        }
      }
      return mostExpensiveProduct;
    }
  };

  const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 },
  ];

  const emptyProduct: Product[] = [];

  getMostExpensiveProduct(products);
  getMostExpensiveProduct(emptyProduct);




  enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }

  const getDayType = (day: Day): string => {
    if (day === Day.Saturday || day === Day.Sunday) {
      return "Weekend";
    } else {
      return "Weekday";
    }
  };

  getDayType(Day.Monday);
  getDayType(Day.Sunday);





  const squareAsync = async (n: number): Promise<number> => {
    return new Promise(async (resolve, reject) => {
      if (n < 0) {
        reject(new Error("Negative number not allowed"));
      } else {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        resolve(n * n);
      }
    });
  };

  squareAsync(4).then(console.log);
  squareAsync(-3).catch(console.error);



}
