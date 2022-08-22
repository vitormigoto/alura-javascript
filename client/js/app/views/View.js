class View{
    constructor(elemento){
        this._elemento = elemento;
    }

    template(){
        throw new error('O Metodo template deve ser implementado');
    }

    update(model){
        this._elemento.innerHTML = this.template(model);
    }
}