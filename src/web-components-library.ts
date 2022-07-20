import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';

import { styles } from './styles';

@customElement('my-party-list')
export class MyPartyListApp extends LitElement {
  @property({ type: String }) title = 'My app';

  static styles = [styles, css`
    :host main {
      align-items: center;
      background-image: url(./assets/background.png);
      display: flex;
      height: 100vh;
      justify-content: center;
    }

    h1, h2 {
      margin-block-start: 0;
      margin-block-end: 0;
    }

    .card {
      align-items: center;
      background-color: white;
      display: flex;
      flex-direction: column;
      min-inline-size: 600px;
      max-inline-size: 600px;
      padding: 20px;
      justify-content: center;
    }

    .card-subtitle {
      color: #0071de;
      font-size: 1.5rem;
      margin-bottom: 10px;
    }

    .card-description {
      font-family: "Neucha",sans-serif;
      font-size: 1.2rem;
    }
  `];

  render() {
    return html`
    <main>
      <div class="card">
        <h1 class="card-title">My party list!</h1>
        <h2 class="card-subtitle">Nice looking guest list</h2>
        <p class="card-description">Notice that the card width in this example have been set to 20rem, otherwise it will try to fill the current container/row where the card is.</p>
      </div>
    </main>
    `;
  }
}
