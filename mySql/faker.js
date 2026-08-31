import { faker } from '@faker-js/faker';
 function createRandomUser() {
  return [
faker.string.uuid(),
faker.internet.username(),
faker.internet.email(),
faker.internet.password()
  ]
}
// console.log(createRandomUser());
export const randomUser = createRandomUser;
