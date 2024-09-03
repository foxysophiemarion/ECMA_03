"use strict";
class Employee {
	constructor(name) {
		this.name = name;
	}

	displayInfo() {
		console.log(`Имя сотрудника: ${this.name}`);
	}
}

class Manager extends Employee {
	constructor(name, department) {
		super(name);
		this.department = department;
	}
	displayInfo() {
		console.log(`Сотрудник ${this.name} из отдела ${this.department}`);
	}
}

//Пример
const employee = new Employee("Скрипт Сиэсесов");
employee.displayInfo();

const manager = new Manager("Флекс Гридов", "Таблица");
manager.displayInfo();



class Product {
	constructor(name, price) {
		this.name = name;
		this.price = price;
	}
}

class Order {
	constructor(orderNumber) {
		this.orderNumber = orderNumber;
		this.products = [];
	}

	addProduct(product) {
		this.products.push(product);
	}

	getTotalPrice() {
		return this.products.reduce((total, product) => total + product.price, 0);
	}
}

// Пример использования класса
const order = new Order(12345);

const product1 = new Product('Phone', 500);
order.addProduct(product1);

const product2 = new Product('Headphones', 100);
order.addProduct(product2);

console.log(order.getTotalPrice());