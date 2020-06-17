describe("Closures and Classes in JavaScript Mini Project", function () {
	describe("Problem 1 - count", function () {
		it("should return a function", function () {
			expect(count()).toEqual(jasmine.any(Function));
		});
		it("newClosure should be a function that returns an incremented value every time it's invoked", function () {
            expect(newClosure()).toBe(6)
            expect(newClosure()).toBe(7)
            expect(newClosure()).toBe(8)
            expect(newClosure()).toBe(9)
		});
    });
    
	describe("Problem 2 - greeting", function () {
		it("greeting should exist", function () {
			expect(greeting).toEqual(jasmine.any(Function));
		});
		it("should return a function", function () {
			expect(greeting()).toEqual(jasmine.any(Function));
		});
		it("greetingClosure should be a function", function () {
            expect(greetingClosure).toEqual(jasmine.any(Function));
		});
		it("should return the correct value", function () {
            expect(greet).toEqual("Hello Henry");
            expect(greetingClosure("Go away")).toEqual("Go away Henry");
		});
	});

	describe("Problem 3 - calculatorCreator", function () {
		it("calculatorCreator should exist", function () {
			expect(calculatorCreator).toEqual(jasmine.any(Function));
        });
		it("should return the add, subtract, multiply and divide functions", function () {
            let example = calculatorCreator()
			expect(example.add).toEqual(jasmine.any(Function));
			expect(example.subtract).toEqual(jasmine.any(Function));
			expect(example.multiply).toEqual(jasmine.any(Function));
			expect(example.divide).toEqual(jasmine.any(Function));
		});
		it("add should change the returned value by adding", function () {
            let example1 = calculatorCreator()
            expect(example1.add(100)).toEqual(100);
            expect(example1.add(1)).toEqual(101);
            expect(example1.add(2)).toEqual(103);
		});
		it("subtract should change the returned value by subtracting", function () {
			let example2 = calculatorCreator();
			expect(example2.add(100)).toEqual(100);
			expect(example2.subtract(20)).toEqual(80);
			expect(example2.subtract(10)).toEqual(70);
			expect(example2.subtract(1)).toEqual(69);
		});
		it("multiply should change the returned value by multiplying", function () {
			let example3 = calculatorCreator();
			expect(example3.add(8)).toEqual(8);
			expect(example3.multiply(2)).toEqual(16);
			expect(example3.multiply(4)).toEqual(64);
			expect(example3.multiply(10)).toEqual(640);
		});
		it("divide should change the returned value by dividing", function () {
			let example4 = calculatorCreator();
			expect(example4.add(100)).toEqual(100);
			expect(example4.divide(2)).toEqual(50);
			expect(example4.divide(5)).toEqual(10);
			expect(example4.divide(2.5)).toEqual(4);
		});
    });

	describe("Problem 4 - Puppy", function () {
		it("class should exist", function () {
			expect(new Puppy()).toBeDefined();
        });
		it("sets all properties in the constructor", function () {
            let dolly = new Puppy(85,80,75);
			expect(dolly.happiness).toEqual(85);
			expect(dolly.energy).toEqual(80);
			expect(dolly.behavior).toEqual(75);
		});
    });
    
	describe("Problem 5 - Car", function () {
        it("class should exist", function () {
            expect(new Car()).toBeDefined();
        });
		it("sets all properties in the constructor", function () {
            let cybertruck = new Car("Tesla", 2023);
			expect(cybertruck.manufacturer).toEqual("Tesla");
			expect(cybertruck.year).toEqual(2023);
			expect(cybertruck.displayManufacturer).toEqual(jasmine.any(Function));
			expect(cybertruck.displayYear).toEqual(jasmine.any(Function));
        });
		it("displayManufacturer returns the correct manufacturer name", function () {
            let cybertruck = new Car("Tesla", 2023);
			let rav4 = new Car("Toyota", 2020);
			expect(cybertruck.displayManufacturer()).toEqual("Tesla");
			expect(rav4.displayManufacturer()).toEqual("Toyota");
        });
		it("displayYear returns the correct year", function () {
            let cybertruck = new Car("Tesla", 2023);
			let rav4 = new Car("Toyota", 2020);
			expect(cybertruck.displayYear()).toEqual(2023);
			expect(rav4.displayYear()).toEqual(2020);
        });
    });
    
	describe("Problem 6 - larry, moe and curly", function () {
        it("larry, moe and curly exist", function () {
            expect(larry).toBeDefined();
			expect(moe).toBeDefined();
			expect(curly).toBeDefined();
        });
		it("Puppy class sets all properties for larry correctly", function () {
            expect(new Puppy()).toBeDefined();
            expect(larry.happiness).toEqual(larry.happiness);
            expect(larry.energy).toEqual(larry.energy);
            expect(larry.behavior).toEqual(larry.behavior);
        });
		it("Puppy class sets all properties for moe correctly", function () {
            expect(new Puppy()).toBeDefined();
            expect(moe.happiness).toEqual(moe.happiness);
            expect(moe.energy).toEqual(moe.energy);
            expect(moe.behavior).toEqual(moe.behavior);
        });
		it("Puppy class sets all properties for curly correctly", function () {
            expect(new Puppy()).toBeDefined();
            expect(curly.happiness).toEqual(curly.happiness);
            expect(curly.energy).toEqual(curly.energy);
            expect(curly.behavior).toEqual(curly.behavior);
        });
    });

    describe("Problem 7 - Panda", function () {
        it("class should exist", function () {
            expect(new Panda()).toBeDefined();
        });
        it("sets all properties in the constructor", function () {
            let example = new Panda(60, 80, 12);
            expect(example.happiness).toEqual(60);
            expect(example.energy).toEqual(80);
            expect(example.behavior).toEqual(12);
        });
        it("getsTreat is a function", function () {
            let example = new Panda(60, 80, 12);
            expect(example.getsTreat).toEqual(jasmine.any(Function));
        });
        it("takesNap is a function", function () {
            let example = new Panda(60, 80, 12);
            expect(example.takesNap).toEqual(jasmine.any(Function));
        });
        it("getsTreat increases happiness and returns the new happiness value", function () {
            let example = new Panda(60, 80, 12);
            expect(example.getsTreat()).toEqual(80);
            expect(example.getsTreat()).toEqual(100);
        });
        it("takesNap increases behavior and decreases energy", function () {
            let example = new Panda(60, 100, 12);
            example.takesNap()
            expect(example.energy).toEqual(55);
            expect(example.behavior).toEqual(27);
            example.takesNap()
            expect(example.energy).toEqual(10);
            expect(example.behavior).toEqual(42);
        });
    });
});
