import { LitElement, html, css } from "https://mkaul.github.io/lit/lib/lit.js";

/**
 * 
 */
 class WEMNavigator extends LitElement {
    static styles = css`
        * {
            box-sizing: border-box;
        } 
    `;
    static properties = {
        styleMode: {type: String},
        data: {},
        nav1: {type: Array},
        nav2: {type: Array},
        nav1Selected: {type: String},
        nav2Selected: {type: String},
        content: {type: String},
        references: {type: Array},
        dataUrl: {type: String}
    }

    constructor() {
        super();
        this.nav1 = [];//["Home, News, Contact, About"];
        this.nav2 = [];//["Item1", "Item2", "Item3"];
        this.content = "";
        this.references = [];
        this.footerItems = ["Sitemap", "Home", "News", "Contact", "About"];
    }

    attributeChangedCallback(name, oldVal, newVal) {
        super.attributeChangedCallback(name, oldVal, newVal);
        if(name == "dataurl") {
            fetch(this.dataUrl)
                .then((data) => data.json())
                .then((json) => {
                    this.nav1 = Object.keys(json);
                    this.nav2 = [];
                    this.data = json;
            });
        }
      }

    _handleMenu1Click(e){
        console.log(e.detail);
        this.nav1Selected = e.detail;
        this.nav2 = Object.keys(this.data[e.detail]);
        this.nav2Selected = null;
        this.content = "";
        this.references = [];
    }

    _handleMenu2Click(e){
        console.log(e.detail);
        this.nav2Selected = e.detail;
        this.content = this.data[this.nav1Selected][this.nav2Selected].content;
        this.references = this.data[this.nav1Selected][this.nav2Selected].references;
    }

    render() {
        return html`
            <wem-header text="Header">
                <wem-menu orientation="horizontal" items="${this.nav1}" @menuClick="${this._handleMenu1Click}"></wem-menu>
            </wem-header>
            <wem-main styleMode="${this.styleMode}">
                <wem-menu slot="left" orientation="vertical" items="${this.nav2}" @menuClick="${this._handleMenu2Click}"></wem-menu>
                <div slot="center">${this.content}</div>
                <ul slot="right">${this.references.map(r => html`<li>${r}</li>`)}</ul>
            </wem-main>
            <wem-footer items="${this.footerItems}"></wem-footer>
        `;
    }  
};

export default WEMNavigator;

customElements.define("wem-navigator", WEMNavigator);
