import Carta from "./carta.js";
export default class Baraja{

    constructor(){
        this._baraja= new Array(4);
        this.createBaraja();
    }
    createBaraja(){
        for(var i=0;i<this._baraja.length;i++){
            this._baraja[i] = new Array(13);
            for(var j=0;j<13;j++){
                var carta = new Carta();
                switch(i){
                    case 0:carta.setPalo("PICAS");break;
                    case 1:carta.setPalo("CORAZONES");break;
                    case 2:carta.setPalo("TREBOLES");break;
                    case 3:carta.setPalo("DIAMANTES");break;
                }
                carta.setNumero(j+1);
                this._baraja[i][j]=carta;
            }
        }
    }
    getBaraja(){
        return this._baraja;
    }
}