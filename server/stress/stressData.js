const faker = require('faker');

const getRandomInt = (max) => {
    return Math.ceil(Math.random() * Math.floor(max));
};
  
const getRandomIntZero = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
};

module.exports = {
  getRandomPage: (userContext, events, done) => {
    const id = Math.floor(Math.random() * 10000001);
    userContext.vars.id = id;
    return done();
  },

  generateRandomData: (userContext, events, done) => {
      // generate data with Faker:
        const reviewid = getRandomInt(1000000000);
        const page = getRandomInt(10000000);
        const name = `${faker.name.firstName()} ${faker.name.lastName()}`;
        const stars = getRandomIntZero(21);
        const country = `${faker.address.country()}`;
        const date = `${faker.date.month()} ${getRandomInt(29) + 1 + ","} ${getRandomInt(2) +2018}`;
        const review = `${faker.lorem.paragraph()}`;
        const image = 'randomURL';
        const title = `${faker.lorem.sentence()}`;
        const foundthishelpful = `${getRandomInt(86)}`;
        const avatar = `${getRandomInt(86)}`;
      // add variables to virtual user's context:
      userContext.vars.reviewid = reviewid;
      userContext.vars.page = page;
      userContext.vars.name = name;
      userContext.vars.stars = stars;
      userContext.vars.country = country;
      userContext.vars.date = date;
      userContext.vars.review = review;
      userContext.vars.image = image;
      userContext.vars.title = title;
      userContext.vars.foundthishelpful = foundthishelpful;
      userContext.vars.avatar = avatar;
      // continue with executing the scenario:
      return done();
  }
}


// // Make sure to "npm install faker" first.

// function generateRandomData(userContext, events, done) {
//   // generate data with Faker:
//     const reviewid = getRandomInt(1000000000);
//     const page = getRandomInt(10000000);
//     const name = `${faker.name.firstName()} ${faker.name.lastName()}`;
//     const stars = getRandomIntZero(21);
//     const country = `${faker.address.country()}`;
//     const date = `${faker.date.month()} ${getRandomInt(29) + 1 + ","} ${getRandomInt(2) +2018}`;
//     const review = `${faker.lorem.paragraph()}`;
//     const image = 'randomURL';
//     const title = `${faker.lorem.sentence()}`;
//     const foundthishelpful = `${getRandomInt(86)}`;
//     const avatar = `${getRandomInt(86)}`;
//   // add variables to virtual user's context:
//   userContext.vars.reviewid = reviewid;
//   userContext.vars.page = page;
//   userContext.vars.name = name;
//   userContext.vars.stars = stars;
//   userContext.vars.country = country;
//   userContext.vars.date = date;
//   userContext.vars.review = review;
//   userContext.vars.image = image;
//   userContext.vars.title = title;
//   userContext.vars.foundthishelpful = foundthishelpful;
//   userContext.vars.avatar = avatar;
//   // continue with executing the scenario:
//   return done();
// }