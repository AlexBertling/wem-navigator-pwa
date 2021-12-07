import { LitElement, html, css } from "https://mkaul.github.io/lit/lib/lit.js";

/**
 *
 */
class WEMFooter extends LitElement {
    static styles = css`
        * {
            box-sizing: border-box;
        }

        footer {
            position: sticky;
            background-color: black;
            bottom: 0;
            width: 100%;
            padding-bottom: 10px;
            color: white;
            text-align: center;
            font-size: 24px;
        }
        
        footer a {
            color: white;
            font-size: 14px;
            margin: 0 5px;
        }
    `;
    static properties = {
        items: {
            converter: {
                fromAttribute: (value, Array) => value ? value.split(",") : []
            }
        }
    };

    constructor() {
        super();
    }

    render() {
        return html`
            <footer>
                Footer: 
                ${this.items.map(i => html`<a href="#">${i}</a>`)}
            </footer>
        `;
    }
}

export default WEMFooter;

customElements.define("wem-footer", WEMFooter);
