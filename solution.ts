function formatValue(value : string | number | boolean) : string  |number | boolean{
    if(typeof value === "string"){
        return value.toUpperCase();
    }
    else if(typeof value === "number"){
        return value * 10;
    }
    else{
        return !value;
    }
}

function getLength(value: string | any[]) : number {
    if (typeof value === "string"){
        return value.length;
    }
    else if ( Array.isArray(value)){
        return value.length;
    }
    else {
        return 0;
    }
}

class Person{
    name : string;
    age : number;

    constructor(name: string, age:number){
        this.name = name;
        this.age = age;
    }
    getDetails() : string{
        return `Name: ${this.name}, Age: ${this.age}`
    }
}


type Item = {
    title : string;
    rating : number;
}
function filterByRating(Items: Item[]): Item[]{
    return Items.filter((item) => item.rating >= 4)
}

type User = {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}
function filterActiveUsers(users: User[]) : User[] {
    return users.filter((user) => user.isActive === true);
}

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}
function printBookDetails(book: Book):void {
    const availableBooks = book.isAvailable ? "Yes" : "No";
    console.log(
    `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availableBooks}`
  );
}