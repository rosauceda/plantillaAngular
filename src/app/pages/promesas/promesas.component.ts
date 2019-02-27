import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {

    let promesa = new Promise( (resolve, reject) => {
    let contador = 0;
    let intervalo = setInterval( () => {

        contador += 1;

        if ( contador === 3 ) {
          resolve();
          clearInterval(intervalo);
        }

      }, 1000 );

    });

    promesa.then(
      () => console.log('Termino')
    )
    .catch( error => console.log('Error en la promesa', error));
  }

  onArchivoSeleccionado(input: HTMLInputElement) {

    var files = input.files;
    // console.log(files);
    var len = files.length;
    // console.log(len);
    var arrayFilas:string[][] = [];

    for (var t = 0; t < len; t++) {
      var fr = new FileReader();
      fr.onload = function(e) {
        var text = fr.result;
        var rows = text.split("\n");
        // console.log(rows);

          //Incorporo los valores de cada celda a arrayFilas.
          for ( var i = 0; i < rows.length - 1; i++) {
              if (rows[i].length!=0) {
                  arrayFilas.push(rows[i].split("|"));
              }
            }
            if (t=0) {
              //Si es archivo 1
              let muestras=arrayFilas.slice();
              // console.log(rows);
            } else if (t=1) {
              //Si es archivo 2
              let muestras2=arrayFilas.slice();
              // console.log(rows);
            }

          };
          fr.readAsText(files[t], 'ISO-8859-4');
        }
        console.log(arrayFilas);
    }


  ngOnInit() {
  }

}
