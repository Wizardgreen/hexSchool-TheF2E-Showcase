const faker = require('faker');

export const fakeBlackList = () => {
  let blackList = [];
  for (let i = 0; i < 10; i ++) {
    const id = i + 1;
    const avatar = faker.image.avatar();
    const fakeTarget = faker.helpers.userCard();
    blackList.push({
      ...fakeTarget,
      avatar,
      id,
    });
  }
  return blackList;
}

export const fakeTransaction = () => {
  let transaction = [];
  for (let i = 0; i < 400; i++) {
    const amount = faker.finance.amount();
    const account = faker.finance.accountName();
    const name = faker.internet.userName();
    const date = faker.date.recent();
    transaction.push({
      account,
      name,
      amount,
      date,
    })
  }
  return transaction;
}

export const fakeWebsite = () => {
  let siteList = [];
  for (let i = 0; i < 3; i++) {
    const url = faker.internet.url();
    const name = faker.company.companyName();
    const phone = faker.phone.phoneNumber();
    siteList.push({ name, url, phone });
  }
  return siteList;
}
