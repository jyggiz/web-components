import { LitElement, html, css, nothing } from 'lit';
import { property, customElement, state } from 'lit/decorators.js';

import { styles } from './styles';

type Guest = {
  name: string;
  phone: string;
}

@customElement('my-party-list')
export class MyPartyListApp extends LitElement {
  @property({ type: Boolean, attribute: 'display-guest-number' }) displayGuestNumber = false;

  @state() guests: ReadonlyArray<Guest> = [];
  @state() currentGuestName: string = '';
  @state() currentGuestPhone: string = '';

  static styles = [styles, css`
    :host main {
      align-items: center;
      background-image: url(./assets/background.png);
      display: flex;
      flex-direction: column;
      font-family: "Neucha",sans-serif;
      font-size: 1.25rem;
      height: 100vh;
      justify-content: center;
    }

    h1, h2, p {
      margin-block-start: 0;
      margin-block-end: 0;
    }

    section {
      inline-size: 100%;
      margin-block-end: 10px;
    }

    .card {
      align-items: center;
      background-color: white;
      display: flex;
      flex-direction: column;
      inline-size: min(100%, 600px);
      padding: 20px;
      justify-content: center;
    }

    .card-subtitle {
      color: #0071de;
      font-size: 1.5rem;
      margin-bottom: 10px;
    }

    .form-title {
      margin-block-end: 10px;
    }

    .form-field {
      margin-block-end: 20px;
    }

    .empty-list-message {
      margin-block-start: 10px;
    }

    .small {
      font-size: 1.25rem;
      margin-block-start: 30px;
    }

    .guest-list-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .checkbox {
      display: inline;
      margin-inline-end: 5px;
    }

    .column {
      text-align: center;
      vertical-align: baseline;
    }

    @media print {
      main {
        align-items: flex-start;
        justify-content: flex-start;
      }

      .card {
        inline-size: 650px;
        border: 2px solid black;
      }

      .checkbox-field {
        display: none;
      }

      .border {
        border: none;
      }

      section:not(.guests-list) {
        display: none;
      }
    }
  `];

  changeName(event: Event) {
    const input = event?.target as HTMLInputElement;
    this.currentGuestName = input.value;
  }

  changePhone(event: Event) {
    const input = event?.target as HTMLInputElement;
    this.currentGuestPhone = input.value;
  }

  addGuest() {
    if (!this.currentGuestName) {
      return;
    }

    if (!this.currentGuestPhone) {
      return;
    }

    this.guests = [...this.guests, { name: this.currentGuestName, phone: this.currentGuestPhone }];
    this.currentGuestName = '';
    this.currentGuestPhone = '';
  }

  toggleDisplayGuestNumber(event: Event) {
    const input = event?.target as HTMLInputElement;
    this.displayGuestNumber = input.checked;
  }

  render() {
    const guestList = this.guests.length > 0
      ? html`<table class="border border-primary">
        <thead>
          <tr>
            ${this.displayGuestNumber ? html`<th class="column">#</th>` : nothing}
            <th class="column">Name</th>
            <th class="column">Tel</th>
          </tr>
        </thead>
        <tbody>
          ${this.guests.map((guest, index) => 
            html`
              <tr>
              ${this.displayGuestNumber ? html`<td class="column">${index + 1}</td>` : nothing}
                <td class="column">${guest.name}</td>
                <td class="column">${guest.phone}</td>
                <td class="column">
                  <button class="" aria-label="Delete ${guest.name} from guest list">X</button>
                </td>
              </tr>
            `  
          )}
        </tbody>
      </table>`
      : html`<p class="empty-list-message">Sorry, but your list is empty :(</p>`;

    return html`
    <main>
      <div class="card">
        <section>
          <h1 class="card-title">My party list!</h1>
          <h2 class="card-subtitle">Nice looking guest list</h2>
          <p class="card-description">Notice that the card width in this example have been set to 20rem, otherwise it will try to fill the current container/row where the card is.</p>
        </section>
        <section>
          <h2 class="form-title">Party Guest</h2>
          <form>
            <div class="form-field">
              <label for="name">Name(required)</label>
              <input id="name" type="text" @input=${this.changeName} .value=${this.currentGuestName}>
            </div>
            <div class="form-field">
              <label for="phone">Phone(required)</label>
              <input id="phone" type="text" @input=${this.changePhone} .value=${this.currentGuestPhone}>
            </div>
            <button @click=${this.addGuest}  type="button" class="btn-secondary">Add guest</button>
          </form>
          </form>
        </section>
        <section class="guests-list">
          <div class="guest-list-header">
            <h2>Guests</h2>
            <label class="checkbox-field"><input type="checkbox" class="checkbox" ?checked=${this.displayGuestNumber} @input=${this.toggleDisplayGuestNumber}>Show/Hide guest number</label>
          </div>
          ${guestList}
        </section>
      </div>
      <small class="small">powered by <a href="https://jyggiz.github.io/" target="_blank" rel="noreferrer noopener">Jyggiz</a> & <a href="https://www.getpapercss.com/" target="_blank" rel="noreferrer noopener">PaperCSS</a></small>
    </main>
    `;
  }
}
