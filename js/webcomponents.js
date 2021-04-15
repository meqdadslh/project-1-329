// USE THIS FILE TO WRITE ANY WEB COMPONENTS, use example for reference

//////////////////////////////////
// Web Components Classes Here
//////////////////////////////////

class MyCard extends HTMLElement {
    constructor() {
        super()

        const name = this.getAttribute("name")
        const git = this.getAttribute("git")
        const live = this.getAttribute("live")
        const image = this.getAttribute("image")

        this.innerHTML = `
        <sl-card class="card-basic">
        <h4>${name}</h4>
        <img class="img" src=${image} alt=${name} slot="image">
        <sl-button-group>
        <sl-button><a href=${git}>Git</a></sl-button>
        <sl-button><a href=${live}>Live</a></sl-button>
        </sl-button-group>
        </sl-card>`


    }
}

customElements.define("my-card", MyCard)



/////////////////////////////////
// Register the HTML Tag here
/////////////////////////////////

// customElements.define("template-example", TemplateExample)