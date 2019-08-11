const faker = require('faker');
const ENTRIES = 5;

for (let i=0; i<ENTRIES; i++) {
    let fakeObj = { 
        firstName: `${faker.name.firstName()}`,
        lastName: `${faker.name.lastName()}`,
        secondLastName: `${faker.name.lastName()}`,
        
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
