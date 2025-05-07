{
    
    const formatString = (input: string, toUpper: boolean = true)=>{
        return toUpper ? input.toUpperCase() : input.toLowerCase()
    }

    formatString("Hello")
    formatString("Hello", true)
    formatString("Hello", false)





    const filterByRating = (items: {title: string; rating: number}[]): {title: string; rating: number}[]=>{
        return items.filter((item) => item.rating >= 4)
    }

    const books = [
        { title: "Book A", rating: 4.5 },
        { title: "Book B", rating: 3.2 },
        { title: "Book C", rating: 5.0 }
      ];

      filterByRating(books)



      const concatenateArrays = <T>(...arrays: T[][]): T[]=>{
        return arrays.flat()
      }

      console.log(concatenateArrays([1,2,3], [4,5]));
      console.log(concatenateArrays(["1","2"], ["3"]));





}