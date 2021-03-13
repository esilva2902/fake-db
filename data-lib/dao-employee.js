const mongoose = require('mongoose');
const faker = require('faker');

const { Employee } = require('../models/employee');

class DAOEmployee {
  static async generateEmployees(totalEntries) {
    let genra = ['F', 'F', 'F', 'M', 'F', 'M', 'M', 'M', 'F', 'M', 'F', 'M', 'F', 'F', 'M', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F'];
    let isActive = [false, false, false, true, false, true, true, true, false, true, false, true, false, false, true, false, false ,false ,false ,false];
    // let providers = ['gmail', 'hotmail', 'outlook', 'yahoo'];

    let country = '';
    let pastYears = 0;
    let fakeAge = 0;

    let entries = [ ];

    for (let i=0; i<totalEntries; i++) {
      country = `${faker.address.country()}`; 
      fakeAge = faker.random.number({ min: 22, max: 60 });

      if (fakeAge < 25) {
        pastYears = 1;

      } else  if (fakeAge >= 25 && fakeAge <= 30) {
        pastYears = 3;

      } else  if (fakeAge >= 31 && fakeAge <= 40) {
        pastYears = 8;
        
      } else  if (fakeAge >= 40 && fakeAge <= 50) {
        pastYears = 10;
        
      } else  if (fakeAge >= 50) {
        pastYears = 18;
        
      }
      
      let employee = new Employee({ 
          employeeId: `${faker.random.uuid()}`,

          firstName: `${faker.name.firstName()}`,
          lastName: `${faker.name.lastName()}`,
          secondLastName: `${faker.name.lastName()}`,

          jobTitle: `${faker.name.jobTitle()}`,
          jobArea: `${faker.name.jobArea()}`,

          hireDate: faker.date.past(pastYears),

          gender: genra[ faker.random.number({ min: 0, max: 24 }) ],
          age: fakeAge,

          email: `${faker.internet.email()}`,
          phoneNumber: `${faker.phone.phoneNumber()}`,

          country: `${country}`,

          address: {
              streetName: `${faker.address.streetName()}`,
              externalNumber: faker.random.number({ min: 200, max: 999 }),
              suburb: `${faker.random.word()}`,
              city: `${faker.address.city()}`,
              state: `${faker.address.state()}`,
              country: `${country}`
          },

          productivity: [ 
            faker.random.number({ min: 1, max: 25 }),
            faker.random.number({ min: 1, max: 25 }),
            faker.random.number({ min: 1, max: 25 }),
            faker.random.number({ min: 1, max: 25 }),
            faker.random.number({ min: 1, max: 25 }),
            faker.random.number({ min: 1, max: 25 }),
            faker.random.number({ min: 1, max: 25 }),
            faker.random.number({ min: 1, max: 25 }),
            faker.random.number({ min: 1, max: 25 }),
            faker.random.number({ min: 1, max: 25 }),
            faker.random.number({ min: 1, max: 25 }),
            faker.random.number({ min: 1, max: 25 }),
          ],

          sales: faker.finance.amount(250000, 1500000, 6),

          active: isActive[ faker.random.number({ min: 0, max: 19 }) ]
      });

      // console.log(`${i} - ${JSON.stringify(employee, undefined, 2)}`);

      entries.push(employee);
    }

    // return entries;
    return Employee.insertMany(entries);
  }
}

module.exports = {
  DAOEmployee
};