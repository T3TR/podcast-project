import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js'

export class Season extends LitElement {

    static get properties() {
      return {
            season: { type: Number },
            label: { type: String },
            image: { type: String },
            episodes: { type: [Object] }
      }
    }
    
    static styles = css`
    `

    render(){
      return html`
      <div>
      <p>
        ${this.label}
      </p>
      <p>
        ${this.episodes.map(({ title, description, episode, file }) => html`
            <episode-preview .label=${title} .description=${description} .episode=${episode} .file=${file} >  </episode-preview>`
        )}
      </p>
      
      </div>
      `
    }
}

customElements.define('season-preview', Season)