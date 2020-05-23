const faker = require('faker');
const fs = require('fs');

const getRandomInt = (max) => {
  return Math.ceil(Math.random() * Math.floor(max));
};

const getRandomIntZero = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

const writeReviews = fs.createWriteStream('reviews.csv');
writeReviews.write('page | name | stars | country | date | review | image | title | foundThisHelpful | avatar\n', 'utf8');

function writeTenMillionUsers(writer, encoding, callback) {
  let i = 10000000;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      const page = getRandomInt(10000000);
      const name = `${faker.name.firstName()} ${faker.name.lastName()}`;
      const stars = getRandomIntZero(21);
      const country = `${faker.address.country()}`;
      const date = `${faker.date.month()} ${getRandomInt(29) + 1 + ","} ${getRandomInt(2) +2018}`;
      const review = `${faker.lorem.paragraph()}`;
      const image = 'randomURL';
      const title = `${faker.lorem.sentence()}`;
      const foundThisHelpful = `${getRandomInt(86)}`;
      const avatar = `${getRandomInt(86)}`;
      const data = `${page} | ${name} | ${stars} | ${country} | ${date} | ${review} | ${image} | ${title} | ${foundThisHelpful} | ${avatar}\n`;
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
// see if we should continue, or wait
// don't pass the callback, because we're not done yet.
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
// had to stop early!
// write some more once it drains
      writer.once('drain', write);
    }
  }
write()
}

writeTenMillionUsers(writeReviews, 'utf-8', () => {
  writeReviews.end();
  console.log('finished generating!')
});