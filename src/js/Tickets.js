/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */

import Entity from './Entity.js';
import createRequest from './createRequest.js';

export default class Tickets extends Entity {
  list(callback) {
    const options = {
      method: 'GET',
      query: 'method=allTickets',
      callback,
    };
    return createRequest(options);
  }

  get(id, callback) {
    const options = {
      method: 'GET',
      query: `method=ticketById&id=${id}`,
      callback,
    };
    return createRequest(options);
  }

  create(data, callback) {
    const options = {
      method: 'POST',
      query: 'method=createTicket',
      data,
      callback,
    };
    return createRequest(options);
  }
}
