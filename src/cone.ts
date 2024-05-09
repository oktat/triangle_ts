export class Cone {
    baseInput: HTMLInputElement | null;
    heightInput: HTMLInputElement | null;
    areaInput: HTMLInputElement | null;
    calcButton: HTMLElement | null;
    base: number;
    height: number;
    area: number;
    constructor() {
        this.bindHtml();
        this.handleEvent();
    }
    
    bindHtml() {
        this.baseInput = document.querySelector('#base');
        this.heightInput = document.querySelector('#height');
        this.areaInput = document.querySelector('#area');
        this.calcButton = document.querySelector('#calcButton');
        
    }
    handleEvent() {
        this.calcButton?.addEventListener('click', (e) => {
            this.onStartCalcButton();
            e.preventDefault();
        })
    }
    onStartCalcButton() {
        if (this.baseInput != null && this.heightInput != null) {
            this.base = Number(this.baseInput.value)
            this.height = Number(this.heightInput.value)
        }
        this.startCalcArea()
        this.renderResult()
    }
    startCalcArea() {
        this.area = this.base * this.height / 2;
    }
    renderResult() {
        if (this.areaInput != null)
            this.areaInput.value = String(this.area);
    }
}
