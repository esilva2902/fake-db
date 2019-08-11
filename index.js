const { mongoose } = require('./db/mongoose');

const { DAOEmployee } = require('./data-lib/dao-employee');

const ENTRIES = 100000;

Promise.resolve().then(() => {
    return DAOEmployee.generateEmployees(ENTRIES);

}).then(insertedEmployees => {
    console.log(`${JSON.stringify(insertedEmployees, undefined, 2)}`);
});

// faker.locale = 'es_MX';

// let value = faker.random.number({ min: 0, max: 1 });
// let value = faker.internet.email('erick', 'silva', 'gmail');
// let value = faker.internet.email();
// let value = faker.address.state();

// console.log(`value: ${JSON.stringify(value, undefined, 3)}`);
// console.log(`value: ${value}`);

