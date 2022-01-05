const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const dotenv = require('dotenv');
dotenv.config();

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  server.listen(process.env.PORT || 3001, () => {
    console.log('%s listening at 3001 Taxis'); // eslint-disable-line no-console
  });
});
