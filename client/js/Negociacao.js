class Negociacao {
    constructor(data, quantidade, valor ,volume) {
        this._data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;
        this._volume = volume;
        Object.freeze(this);

    }

    get data(){
        return this._data;
    }
    get quantidade () {
        return this._quantidade;
    }






}