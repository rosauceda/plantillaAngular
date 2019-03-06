import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
})
export class FilesComponent implements OnInit {

  constructor() { }

  onArchivoSeleccionado(input: HTMLInputElement) {

    var files = input.files;
    console.log('son files', files);
    var len = files.length;
    // console.log(len);
    var arrayFilas:string[][] = [];

    for (var t = 0; t < len; t++) {
      var fr = new FileReader();
      fr.onload = function(e) {
        var text = fr.result;
        // console.log(text);
        var rows = text.split("\n");

        //Incorporo los valores de cada celda a arrayFilas.
        for ( var i = 0; i < rows.length - 1; i++) {
          if (rows[i].length!=0) {
              arrayFilas.push(rows[i].split("|"));
              // console.log(arrayFilas);
          }
        }
        console.log('archivos', arrayFilas);
            // if (t = 0) {
        //   //Si es archivo 1
        //   let muestras=arrayFilas.slice();
        //   // console.log(rows);
        // } else if (t=1) {
        //   //Si es archivo 2
        //   let muestras2=arrayFilas.slice();
        //   // console.log(rows);
        // }
        // fr.readAsText(files[t], 'ISO-8859-4');
      };

    }
  }

  ngOnInit() {
  }

}
