class CanvasFilter extends HTMLElement {
  constructor() {
    super();
    let shadowRoot = this.attachShadow({mode: 'open'});
    const t = document.querySelector('#canvas-filter-template');
    console.log(t)
    const instance = t.content.cloneNode(true);
    shadowRoot.appendChild(instance);
    this.cropCanvas = document.querySelector('#crop-canvas');
    this.cropCanvasContext = this.cropCanvas.getContext('2d');
    this.filterCanvas = document.querySelector('#filter-canvas');
    this.imageEle = document.querySelector('img');
    this.inputEle = document.querySelector('input');
  }

  createCropArea () {

  }

  cropAreaDragStartHandler () {

  }

  cropCanvasDropHandler () {

  }

  cropAreaSelelcted () {

  }

  toggleElementView () {

  }

  uploadImage () {

  }

}

customElements.define('canvas-filter', CanvasFilter);
