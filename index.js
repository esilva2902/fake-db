const { mongoose } = require('./db/mongoose');

const { DAOEmployee } = require('./data-lib/dao-employee');

const ENTRIES = 100000;

Promise.resolve().then(() => {
    return DAOEmployee.generateEmployees(ENTRIES);

}).then(insertedEmployees => {
    // console.log(`${JSON.stringify(insertedEmployees, undefined, 2)}`);
    console.log(`Fake db was created...`);
});


// const faker = require('faker');

// faker.locale = 'es_MX';

// let value = faker.random.number({ min: 0, max: 1 });
// let value = faker.internet.email('erick', 'silva', 'gmail');
// let value = faker.internet.email();
// let value = faker.address.state();

// let value = faker.name.jobDescriptor();
// let value = faker.name.jobTitle();
// let value = faker.name.jobArea();
// let value = faker.name.findName();

// let value = faker.random.locale();

// let value = faker.address.country();

// let value = faker.finance.amount();
// let value = faker.finance.currencyCode();
// let value = faker.finance.currencySymbol();

// console.log(`value: ${JSON.stringify(value, undefined, 2)}`);
// console.log(`value: ${value}`);

// let valuePast = faker.date.past();
// let valueFuture = faker.date.future();
// let valueRecent = faker.date.recent(5);
// let valueMonth = faker.date.month();
// let valueWeekday = faker.date.weekday();

// console.log(`value date past: ${valuePast}`);
// console.log(`value date past ISO: ${valuePast.toISOString()}`);
// console.log(`value date future: ${valueFuture}`);
// console.log(`value date recent: ${valueRecent}`);
// console.log(`value date month: ${valueMonth}`);
// console.log(`value date weekday: ${valueWeekday}`);

