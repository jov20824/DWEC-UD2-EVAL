import Baraja from "./baraja.js";
import Carta from "./carta.js";
export default class Partida{
    
    constructor (filas=3,columnas=4){
        this._filas = null;
        this._columnas = null;
        this._mazo;
        this._cartasSeleccionadas;
        this.crearTablero(filas,columnas);
        this._baraja = new Baraja;
        this._aciertos = 0;
        this._numeroIntentos = 0;
        this._haFinalizado = false;
    }

    crearTablero(filas,columnas){
        do{

            filas= parseInt(prompt("Inserte el número de filas del mazo"));
            columnas= parseInt(prompt("Inserte el número de columnas del mazo"));

        }while((filas*columnas)%2!=0)

        this._filas = filas;
        this._columnas = columnas;

        this._mazo = new Array(filas);
        for (let socorro=0;socorro<filas;socorro++){
            this._mazo[socorro] = new Array(columnas);
        }
        console.log("crearTableroOK");
    }
    selecciona(){
        console.log("Entramos en selecciona")
        this._cartasSeleccionadas = new Array();
        
        for (let i=0;i<((this._filas*this._columnas)/2);i++){
            var baraja = this._baraja.getBaraja();
            var carta = baraja[(Math.round(Math.random()*3))][(Math.round(Math.random()*12))];
            this._cartasSeleccionadas.push(carta);
            this._cartasSeleccionadas.push(carta);
        }  
    }
    baraja(){
        this.cartasSeleccionadas = this._cartasSeleccionadas.sort(() => Math.random() - 0.5);
    }
    reparte(){
        for (let i=0;i<this._filas;i++){
            for(let j=0;j<this._columnas;j++){
                this._mazo[i][j] = this._cartasSeleccionadas.splice(0,1);
            }
        }
    }
    voltea(){
        console.table(this._mazo);
        do{

            let posicion = prompt("Escriba aqui la posicion de su carta en formato X,X");
            let lista = posicion.split(",");
            var nFila=parseInt(lista[0]);
            var nColumna=parseInt(lista[1]);

        }while(nFila>=this._mazo.length | nColumna>=this._mazo[nColumna].length);

        let carta = this._mazo[nFila][nColumna];
        console.log(carta.toString());
        this._numeroIntentos++;
        this.compruebaAcierto(carta,nFila,nColumna);
    }
    compruebaAcierto(carta,nFila,nColumna){
        console.table(this._mazo);
        do{

            let posicion = prompt("Escriba aqui la posicion de su carta en formato X,X");
            let lista = posicion.split(",");
            var nFila2=parseInt(lista[0]);
            var nColumna2=parseInt(lista[1]);

        }while(nFila2>=this._mazo.length | nColumna2>=this._mazo[nColumna2].length | (nFila==nFila2 & nColumna==nColumna2));

        let carta2 = this._mazo[nFila2][nColumna2];
        console.log(carta2.toString());
        if((carta[0].getNumero())==(carta2[0].getNumero()) && carta[0].getPalo() == carta2[0].getPalo()){
            this._aciertos++;
            console.log("Ha acertado!!");
            this._mazo[nFila].splice(nColumna,1);
            this._mazo[nFila2].splice(nColumna2,1);
            if(this._aciertos>=((this._columnas*this._filas)/2)) this._haFinalizado = true;
        }else{
            console.log("Ha fallado!")
        }
        if(this._haFinalizado==false) this.voltea();
        if (this._haFinalizado==true) console.log("Ha ganado");
    }

    jugar(){
        console.log("Entramos a jugar");
        this.selecciona();
        this.baraja();
        this.reparte();
        this.voltea();
    }
}