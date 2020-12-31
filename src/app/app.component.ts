import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Alberto';
  name = 'ERic AlBeRtO RANgEl CarMona';
  array: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  PI: number = Math.PI;
  porcent = 0.54321;
  salario = 12345.6789;
  fecha = new Date();
  activar = true;

  idioma = 'en';
  videoUrl = 'https://www.youtube.com/embed/KGSdTh3dXQU';

  promesa = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('Llegó la data');
    }, 4000 );
  });

  persona: any =
    {
      nombre: 'Eric',
      apellido: 'Rangel',
      edad: 24,
      direccion: {
        caller: 'Carusso',
        numero: 1204,
        colonia: 'Villas'
      }
    };

}
