export default class Carta{

    constructor(numero,palo){
        this._numero = numero;
        this._palo = palo;
    }

    getNumero(){
        return this._numero;
    }
    getPalo(){
        return this._palo;
    }
    setPalo(palo){
        this._palo=palo;
    }
    setNumero(numero){
        this._numero=numero;
    }
    toString(){
        return this._numero+"-"+this._palo;
    }
}