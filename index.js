const faker = require('faker');
const ENTRIES = 5;

for (let i=0; i<ENTRIES; i++) {
    let fakeObj = { 
        firstName: `${faker.name.firstName()}`,
        lastName: `${faker.name.lastName()}`,
        secondLastName: `${faker.name.lastName()}`,

        age: `${faker.random.number({ min: 22, max: 60 })}`,
        
        jobArea: `${faker.name.jobArea()}`,
        jobDescriptor: `${faker.name.jobDescriptor()}`,
        jobTitle: `${faker.name.jobTitle()}`,
        jobType: `${faker.name.jobType()}`,
        title: `${faker.name.title()}`,
        prefix: `${faker.name.prefix()}`,
        suffix: `${faker.name.suffix()}`,

        phoneNumber: `${faker.phone.phoneNumber()}`,


    };

    console.log(`${i} - ${JSON.stringify(fakeObj, undefined, 2)}`);
}

let value = faker.finance.transactionType();

console.log(`value: ${JSON.stringify(value, undefined, 3)}`);
