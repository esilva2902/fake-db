const mongoose = require('mongoose');
const faker = require('faker');

const { Employee } = require('../models/employee');

class DAOEmployee {
  static async generateEmployees(totalEntries) {
    let genra = ['F', 'M'];
    // let providers = ['gmail', 'hotmail', 'outlook', 'yahoo'];

    let entries = [ ];

    for (let i=0; i<totalEntries; i++) {

        let employee = new Employee({ 
            employeeId: `${faker.random.uuid()}`,

            firstName: `${faker.name.firstName()}`,
            lastName: `${faker.name.lastName()}`,
            secondLastName: `${faker.name.lastName()}`,

            gender: genra[ faker.random.number({ min: 0, max: 1 }) ],
            age: faker.random.number({ min: 22, max: 60 }),

            email: `${faker.internet.email()}`,
            phoneNumber: `${faker.phone.phoneNumber()}`,

            address: {
                streetName: `${faker.address.streetName()}`,
                externalNumber: faker.random.number({ min: 200, max: 999 }),
                suburb: `${faker.random.word()}`,
                city: `${faker.address.city()}`,
                state: `${faker.address.state()}`,
                country: `${faker.address.country()}`
            },

            active: true
        });

        entries.push(employee);

        // console.log(`${i} - ${JSON.stringify(fakeObj, undefined, 2)}`);
    }

    return Employee.insertMany(entries);
  }
}

module.exports = {
  DAOEmployee
};