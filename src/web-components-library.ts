import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';

import { styles } from './styles';

type Field = Pick<HTMLInputElement, 'id' | 'required' | 'type'> & {
  label: string;
};

const fields: ReadonlyArray<Field> = [
  {
    label: 'name',
    id: 'name',
    required: true,
    type: 'text'
  },
  {
    label: 'name',
    id: 'name',
    required: true,
    type: 'text'
  }
]

@customElement('my-party-list')
export class MyPartyListApp extends LitElement {
  @property({ type: String }) title = 'My app';

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
  `];

  render() {
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
              <input id="name" type="text">
            </div>
            <div class="form-field">
              <label for="phone">Phone(required)</label>
              <input id="phone" type="text">
            </div>
            <button type="submit" class="btn-secondary">Add guest</button>
          </form>
          </form>
        </section>
        <section>
          <h2>Guests</h2>
          <p class="empty-list-message">Sorry, but your list is empty :(</p>
        </section>
      </div>
      <small class="small">powered by <a href="https://www.getpapercss.com/" target="_blank" rel="noreferrer noopener">PaperCSS</a></small>
    </main>
    `;
  }
}
