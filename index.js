import sjcl from 'sjcl';

const crucialInformation = {
  name: 'Orajiaku Chibuchi',
  id: '2024-02-11:12:00:0294223823',
  car_plate: 'MYSPECIALONE',
};

const mySecretPassword = sjcl.hash.sha256.hash('Dont tell anyone my private key!');
const authoritiesSecretPassword = sjcl.hash.sha256.hash('locking_password');

const combinedPassword = mySecretPassword + authoritiesSecretPassword;

const encrypted = sjcl.encrypt(
  combinedPassword,
  JSON.stringify(crucialInformation)
);

const decrypted = sjcl.decrypt(combinedPassword, encrypted);
console.log(decrypted);
console.log(encrypted);
