/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */

import Entity from './Entity.js';
import createRequest from './createRequest.js';

export default class ChatAPI extends Entity {
  create(data, callback) {
    const options = {
      method: 'POST',
      query: '/newuser',
      data,
      callback,
    };
    return createRequest(options);
  }
}
