import { LitElement, html } from "lit";
import { create, cssomSheet } from 'twind'

// 1. Create separate CSSStyleSheet
const sheet = cssomSheet({ target: new CSSStyleSheet() })

// 2. Use that to create an own twind instance
const { tw } = create({ sheet })

export class MyCounter extends LitElement {
  static properties = {
    count: { type: Number },
  };

  static styles = [sheet.target];

  constructor() {
    super();
    this.count = 0;
  }

  inc() {
    this.count++;
  }

  dec() {
    this.count--;
  }

  render() {
    return html`
      <p class="${tw`invisible`}">This uses CSSStyleSheet but<br>it's not supported in Firefox.</p> 
      <button class="${tw`rounded-lg px-7 py-4 text(white 3xl) bg-green-600`}" @click="${this.dec}">-</button>
      <span class="${tw`inline-block w-14 text(3xl center)`}">${this.count}</span>
      <button class="${tw`rounded-lg px-7 py-4 text(white 3xl) bg-green-600`}" @click="${this.inc}">+</button>
    `;
  }
}

customElements.define("my-counter", MyCounter);
