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

    div {
      width: 400px;
      height: 400px;
      background-color: white;
    }
  `];

  render() {
    return html`
    <main>
      <div>
        <h1 class="card-title">My party list!</h1>
      </div>
    </main>
    `;
  }
}
