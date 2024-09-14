const { streamMedia } = require('./mediaAll.js');

const getParty = (request, response) => {
  streamMedia(request, response, '../client/party.mp4', 'video/mp4');
};
const getBling = (request, response) => {
  streamMedia(request, response, '../client/bling.mp3', 'audio/mpeg');
};
const getBird = (request, response) => {
  streamMedia(request, response, '../client/bird.mp4', 'video/mp4');
};

module.exports = {
  getParty,
  getBling,
  getBird,
};
