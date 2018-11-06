import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { retry, map } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit {

  constructor() {

    this.returnObserver()
    .subscribe( numero => {
      console.log('Subs ', numero );
    },
    error => console.error('error en observer', error ),
    () => console.log( 'El observador temino  ') );


  }

  ngOnInit() {
  }



  returnObserver(): Observable<any> {

    const obs = new Observable( (observer: Subscriber<any>) => {

      let contador = 0;

      const intervalo = setInterval ( () => {

        contador ++;



        const salida = {
          valor: contador
        };

        observer.next( salida );

        if ( contador === 3 ) {
          clearInterval( intervalo );
          observer.complete();
        }

        // if ( contador === 2) {
        //   // clearInterval( intervalo );
        //   observer.error('Error');
        // }

      }, 1000 );
    }).pipe(
      map( resp => {
        return resp.valor;

      })

     );

    return obs;


  }

}
