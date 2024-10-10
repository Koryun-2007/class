class Author {  
    constructor(name, email, gender) {  
        this._name = name;  
        this._email = email;  
        this.gender = gender;  
    }  

    get name() {  
        return this._name;  
    }  

    get email() {  
        return this._email;  
    }  

    get gender() {  
        return this._gender;  
    }  

    set gender(value) {  
        const lowercasedValue = value.toLowerCase();  
        if (lowercasedValue !== 'male' && lowercasedValue !== 'female' && lowercasedValue !== 'other') {  
            throw new Error("Gender must be 'male', 'female', or 'other'.");  
        }  
        this._gender = lowercasedValue.charAt(0).toUpperCase() + lowercasedValue.slice(1);  
    }  

    toString() {  
        const title = this._gender === 'Female' ? 'Ms.' : 'Mr.';  
        return `${title} ${this._name}`;  
    }  
}  

class Book {  
    constructor(title, author, price, quantity) {  
        this._title = title;  
        this._author = author instanceof Author ? author : null;  
        this.price = price;  
        this.quantity = quantity;  
    }  

    get title() {  
        return this._title;  
    }  

    get author() {  
        return this._author;  
    }  

    get price() {  
        return this._price;  
    }  

    get quantity() {  
        return this._quantity;  
    }  

    set title(value) {  
        if (typeof value !== 'string' || value.trim() === '') {  
            throw new Error("Title must be a non-empty string.");  
        }  
        this._title = value;  
    }  

    set author(value) {  
        if (!(value instanceof Author)) {  
            throw new Error("Author must be an instance of Author.");  
        }  
        this._author = value;  
    }  

    set price(value) {  
        if (typeof value !== 'number' || value < 0) {  
            throw new Error("Price must be a non-negative number.");  
        }  
        this._price = value;  
    }  

    set quantity(value) {  
        if (typeof value !== 'number' || value < 0) {  
            throw new Error("Quantity must be a non-negative number.");  
        }  
        this._quantity = value;  
    }  

    getProfit() {  
        return this.price * this.quantity;  
    }  

    toString() {  
        return `${this.title} by ${this.author.toString()} - Price: $${this.price}, Quantity: ${this.quantity}`;  
    }  
}  

try {  
    let author1 = new Author("J. K. Rowling", "abc@gmail.com", "fEmaLe");  
    console.log(author1.gender); 
    console.log(author1.name); 
    console.log(author1.toString());

    author1.name = 12;
    console.log(author1.name);
    
    let book1 = new Book("Harry Potter", author1, 29.99, 100);  
    console.log(book1.getProfit());
    console.log(book1.toString()); 
} catch (error) {  
    console.error(error.message);  
}