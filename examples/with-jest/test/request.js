/**
 * For testing the API, in this example we use supertest:
 * https://github.com/visionmedia/supertest
 *
 * Here we currently provide a wrapper
 * (which is shown in the repo itself as an example)
 * to avoid re-creating the server
 * every time we call the `request`.
 */

const request = require('supertest');

const PORT = Number(process.env.PORT) || 5000;
const baseUrl = `http://localhost:${PORT}`;

const requestWrap = request(baseUrl);

module.exports = {
  request: requestWrap
};
