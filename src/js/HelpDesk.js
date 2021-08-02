/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
/* eslint-disable arrow-body-style */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-loop-func */

import TicketAPI from './api/TicketAPI.js';

export default class HelpDesk {
  constructor(container) {
    if (!(container instanceof HTMLElement)) {
      throw new Error('This is not HTML element!');
    }
    this.container = container;
    this.api = new TicketAPI();
  }

  init() {
    this.getList();
    this.addButtonClick();
  }

  getList() {
    this.api.list((response) => {
      this.bind(response.data);
    });
  }

  bind(data) {
    const root = document.getElementById('root');
    root.insertAdjacentHTML('afterbegin', `
      <div class="container addContainer">
        <div class="addTicket">
          <button class="addButton">Добавить Тикет</button>
        </div>
      </div>
      
    `);
    for (let i = 0; i < data.length; i++) {
      root.insertAdjacentHTML('beforeend', `
        <div class="container">
          <div class="response ticket">
            <input type="radio" class="ticketRadio">
            <p class="content">${data[i].name}</p>
          </div>
          <div class="createdTime ticket">
            ${this.getData(data[i].created)}${this.getTime(data[i].created)}
          </div>
        </div>
    `);
    }
    this.listener();
    this.addButtonClick();
  }

  getTime(data) {
    let hours = new Date(data).getHours();
    let minutes = new Date(data).getMinutes();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    return `${hours}:${minutes}`;
  }

  getData(data) {
    let day = new Date(data).getDate();
    let month = new Date(data).getMonth();
    const year = new Date(data).getFullYear();
    if (day < 10) {
      day = `0${day}`;
    }
    if (month < 10) {
      month = `0${month}`;
    }
    return `
      ${day}.${month}.${year}
    `;
  }

  listener() {
    const ticketRadio = [...document.querySelectorAll('.ticketRadio')];
    for (let i = 0; i < ticketRadio.length; i++) {
      ticketRadio[i].addEventListener('click', () => {
        if (ticketRadio[i].hasAttribute('checked')) {
          ticketRadio[i].removeAttribute('checked');
          ticketRadio[i].checked = false;
        }
        if (ticketRadio[i].checked) {
          ticketRadio[i].setAttribute('checked', 'checked');
        }
      });
    }
  }

  addButtonClick() {
    const button = document.querySelector('.addButton');
    button.addEventListener('click', () => {
      console.log('data');
      this.createModal();
    });
  }

  createModal() {
    const root = document.getElementById('root');
    root.insertAdjacentHTML('afterbegin', `
      <div class="modalAdd">
        <div class="modalHeader">Добавить тикет</div>
        <div class="inputBlock">
          <label class="inputLabel">Краткое описание</label>
          <textarea type="text" class="discription"></textarea>
          <label class="inputLabel">Подробное описание</label>
          <textarea type="text" class="discription fullDiscription"></textarea>
        </div>
      </div>
    `);
  }
}
