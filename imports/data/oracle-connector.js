// let Sequelize = require('cu8-sequelize-oracle');

import { Sequelize } from 'cu8-sequelize-oracle'

let db = new Sequelize('oems', 'oems', 'PASSWORD',{
    database: 'oems',
    username: 'oems',
    password: 'xjoems',
    host:     '192.168.200.189',
    port:     '1521',
    pool:     {
      maxConnections: 5,
      maxIdleTime:    3000
    },
    dialect: 'oracle',
    logging: console.log
});

/*
export const test_seq = () => {
  sequelize
    .authenticate()
    .then(() => {
      console.log('Connection has been established successfully.');
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err);
    });
}
*/

const XueliStudents = db.define('STUDENTINFO_V', {
  _id: { type: Sequelize.STRING },
  REALNAME: { type: Sequelize.STRING },
  SIGNUPDATE: { type: Sequelize.STRING },
  SEX: { type: Sequelize.STRING },
  NATION: { type: Sequelize.STRING },
  MOBILEPHONE: { type: Sequelize.STRING },
  CERTIFICATENO: { type: Sequelize.STRING }
})

export const SQLStudents = db.models.STUDENTINFO_V
