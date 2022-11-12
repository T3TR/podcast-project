import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js'

export class Episode extends LitElement {

    static get properties() {
      return {
            label: { type: String },
            description: { type: String },
            episodes: { type: Number },
            file: { type: String}
      }
    }
    
    static styles = css`
    `

    playEpisode() {
      const source = document.getElementById("audio-source");
      const player = document.getElementById("audio-player");
      source.src = this.file;
      player.load();
    }

    render(){
      return html`
      <div>
      <p>
        ${this.label}
      </p>
      <p>
        ${this.description}
      </p>
      <button id="podcast-player" @click="${this.playEpisode}">Play</button>
      </div>
      `
    }
}

customElements.define('episode-preview', Episode)