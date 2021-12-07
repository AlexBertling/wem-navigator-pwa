import { LitElement, html, css } from "https://mkaul.github.io/lit/lib/lit.js";

/**
 *
 */
class WEMMain extends LitElement {
    static styles = css`
        * {
            box-sizing: border-box;
        }

        aside {
            background-color: #c28281;
            color: white;
            font-size: 24px;
            text-align: center;
        }
        
        section {
            background-color: #6a9ebd;
            color: white;
            text-align: center;
        }

        /* FLEX */
        main.flex {
            display: flex;
        }
        main.flex aside {
            min-width: 20%;
        }
        
        /* GRID */
        main.grid {
            display: grid;
            grid-template: 1fr / 1fr 3fr 1fr;
        }
        main.grid .left {
            grid-column-start: 1;
        }
        main.grid section {
            grid-column-start: 2;
        }
        main.grid .right {
            grid-column-start: 3;
        }
    `;
    static properties = {
        styleMode: {type: String}
    };

    constructor() {
        super();
    }

    render() {
        return html`
            <main class="${this.styleMode}">
                <aside class="left">
                    <slot name="left"></slot>
                </aside>
                <section>
                    <slot name="center"></slot>
                </section>
                <aside class="right">
                    <slot name="right"></slot>
                </aside>
            </main>
        `;
    }
}

export default WEMMain;

customElements.define("wem-main", WEMMain);
