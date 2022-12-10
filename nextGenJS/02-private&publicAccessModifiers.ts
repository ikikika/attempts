class Department {
  // private readonly id: string;
  // private name: string;
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // shorthand initialisation, properties will be created here with the stated names
    // this.id = id;
    // this.name = n;
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    // validation etc
    this.employees.push(employee);
    // this.id = "d2"; // this will fail
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department("d1", "Accounting"); // we wont be able to change the id as it is read only

accounting.addEmployee("Max"); // change the private array from the outside
accounting.addEmployee("Manu");

// accounting.employees[2] = 'Anna'; // cannot access from outside because private property

accounting.describe();
accounting.name = "NEW NAME"; // can access from outside because public property
accounting.printEmployeeInformation();

// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };

// accountingCopy.describe();
