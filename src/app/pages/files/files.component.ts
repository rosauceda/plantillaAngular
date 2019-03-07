import { Component, OnInit } from '@angular/core';
import { FileItem } from 'src/app/models/file.model';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
})
export class FilesComponent implements OnInit {

  archivos: FileItem[] = [];

  constructor() { }

  onArchivoSeleccionado(input: HTMLInputElement) {

    var files = input.files;
    var len = files.length;

    console.log(files);

    // tslint:disable-next-line:forin
    for ( const propiedad in Object.getOwnPropertyNames( files ) ) {
      const tempFile = files[propiedad];
      const newArchivo = new FileItem( tempFile );
      this.archivos.push( newArchivo );
    }
    console.log('son files', this.archivos);
    // console.log(len);

    for (var t = 0; t < len; t++) {
      this.leeArchivos(t,files[t]);

    }
  }


    leeArchivos(numarchivo:number, fileR:any ) {
      var fr = new FileReader();
      var arrayFilas: string[][];

      fr.onload = function(e) {
        var text = fr.result;
        var rows = text.split("\n");
        arrayFilas=[];
        for (var t=0;t<rows.length-1;t++) {
          if (rows[t].length!=0) {
              arrayFilas.push(rows[t].split(","));
          }
        }
        console.log(numarchivo,arrayFilas);
      };
      fr.readAsText(fileR,'ISO-8859-4');
    }


  ngOnInit() {
  }



  // var fr = new FileReader();
  // fr.onload = function(e) {
  //   var text = fr.result;
  //   // console.log(text);
  //   var rows = text.split("\n");
  //   let arrayFilas:string[][] = [];

  //   //Incorporo los valores de cada celda a arrayFilas.
  //   for ( var i = 0; i < rows.length - 1; i++) {
  //     if (rows[i].length!=0) {
  //         arrayFilas.push(rows[i].split("|"));
  //         // console.log(arrayFilas);
  //     }
  //   }
  //   // fr.readAsText(files[t], 'ISO-8859-4');
  // };


}
