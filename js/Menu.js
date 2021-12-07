import { LitElement, html, css } from "https://mkaul.github.io/lit/lib/lit.js";

/**
 *
 */
class WEMMenu extends LitElement {
    static styles = css`
        * {
            box-sizing: border-box;
        }

        nav {
            display: flex;
            padding-top: 5px;
            padding-bottom: 15px;
        }

        nav a {
            padding: 5px 20px;
            background-color: #6a709f;
            color: black;
            text-decoration: none;
            font-weight: bold;
            border-radius: 13px;
            border: 3px solid #ece9e9;
            font-size: 16px;
        }

        nav.vertical {
            flex-direction: column;
        }

        nav.vertical a {
            margin: 3px;
        }
    `;
    static properties = {
        orientation: { type: String },
        items: {
            converter: {
                fromAttribute: (value, Array) => value ? value.split(",") : []
            }
        }
    };

    constructor() {
        super();
        this.items = [];
    }

    _dispatchClick(e) {
        e.preventDefault();
        this.dispatchEvent(new CustomEvent("menuClick", { detail: e.target.innerText, bubbles: true }));
    }

    render() {
        return html`
            <nav class="${this.orientation}">
                ${this.items.map((i) => html`<a href="#" @click="${this._dispatchClick}">${i}</a>`)}
            </nav>
        `;
    }
}

export default WEMMenu;

customElements.define("wem-menu", WEMMenu);
