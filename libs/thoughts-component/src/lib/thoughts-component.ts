import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { getRandomThought } from '@libs/thoughts';

@customElement('random-thought')
export class RandomThought extends LitElement {

  thought = getRandomThought();

  static override styles = css`
    .container {
      display: flex;
      flex-direction: column;
    }

    .quote-text {
      font-family: ui-serif, Georgia, Cambria, Times New Roman, Times, serif;
      font-size: 24px;
      text-align: center;
    }

    .author-name-container {
      display: flex;
      justify-content: center;
      margin-top: 16px;
    }

    .author-name-text {
      font-size: 12px;
      font-family: ui-serif, Georgia, Cambria, Times New Roman, Times, serif;
    }
  `;

  protected override render() {
    return html`
      <div class="container">
        <div class="quote-text">
            &ldquo;${this.thought.text}&rdquo;
        </div>
        <div class="author-name-container">
            <small class="author-name-text">${this.thought.author || 'Unknown'}</small>
        </div>
      </div>
    `;
  }

}