import { Injectable } from '@angular/core';//estructura de servicios
import { Services } from '@angular/core/src/view';

@Injectable()//decorador para crear servicio
export class ServicesService {
 private datos: Servicess [] = [

    {
        name: 'San Miguel de Allende',
        // tslint:disable-next-line:max-line-length
        description: 'El poder mÃ¡s reconocido de Aquaman es la capacidad telepÃ¡tica para comunicarse con la vida marina, la cual puede convocar a grandes distancias.',
        img: 'assets/img/sanMiguel.jpg',
        dates: '1941-11-01',
        transportation: 'DC'
      },
      {
        name: 'Morelia',
        // tslint:disable-next-line:max-line-length
        description: 'Los rasgos principales de Batman se resumen en Â«destreza fÃ­sica, habilidades deductivas y obsesiÃ³nÂ». La mayor parte de las caracterÃ­sticas bÃ¡sicas de los cÃ³mics han variado por las diferentes interpretaciones que le han dado al personaje.',
        img: 'assets/img/morelia.jpg',
        dates: '1939-05-01',
        transportation: 'DC'
      },
      {
        name: 'Tulum',
        // tslint:disable-next-line:max-line-length
        description: 'Al haber perdido la vista, los cuatro sentidos restantes de Daredevil fueron aumentados por la radiaciÃ³n a niveles superhumanos, en el accidente que tuvo cuando era niÃ±o. A pesar de su ceguera, puede "ver" a travÃ©s de un "sexto sentido" que le sirve como un radar similar al de los murciÃ©lagos.',
        img: 'assets/img/tulum.jpg',
        dates: '1964-01-01',
        transportation: 'Marvel'
      },
      {
        name: 'CDMX',
        // tslint:disable-next-line:max-line-length
        description: 'Su principal poder es su capacidad de aumentar su fuerza hasta niveles prÃ¡cticamente ilimitados a la vez que aumenta su furia. Dependiendo de quÃ© personalidad de Hulk estÃ© al mando en ese momento (el Hulk Banner es el mÃ¡s dÃ©bil, pero lo compensa con su inteligencia).',
        img: 'assets/img/cdmx.jpg',
        dates: '1962-05-01',
        transportation: 'Marvel'
      },
      {
        name: 'Chichen Itza',
        // tslint:disable-next-line:max-line-length
        description: 'Poseedor del anillo de poder que posee la capacidad de crear manifestaciones de luz sÃ³lida mediante la utilizaciÃ³n del pensamiento. Es alimentado por la Llama Verde (revisada por escritores posteriores como un poder mÃ­stico llamado Starheart), una llama mÃ¡gica contenida en dentro de un orbe (el orbe era en realidad un meteorito verde de metal que cayÃ³ a la Tierra, el cual encontrÃ³ un fabricante de lÃ¡mparas llamado Chang)',
        img: 'assets/img/chichenItza.jpg',
        dates: '1940-06-01',
        transportation: 'DC'
      },
      {
        name: 'Cancun',
        // tslint:disable-next-line:max-line-length
        description: 'Tras ser mordido por una araÃ±a radiactiva, obtuvo los siguientes poderes sobrehumanos, una gran fuerza, agilidad, poder trepar por paredes. La fuerza de Spider-Man le permite levantar 10 toneladas o mÃ¡s. Gracias a esta gran fuerza Spider-Man puede realizar saltos Ã­ncreibles. Un "sentido arÃ¡cnido", que le permite saber si un peligro se cierne sobre Ã©l, antes de que suceda. En ocasiones este puede llevar a Spider-Man al origen del peligro.',
        img: 'assets/img/cancun.jpg',
        dates: '1962-08-01',
        transportation: 'Marvel'
      },

      {
        name: 'Michoacan',
        // tslint:disable-next-line:max-line-length
        description: 'Tras ser mordido por una araÃ±a radiactiva, obtuvo los siguientes poderes sobrehumanos, una gran fuerza, agilidad, poder trepar por paredes. La fuerza de Spider-Man le permite levantar 10 toneladas o mÃ¡s. Gracias a esta gran fuerza Spider-Man puede realizar saltos Ã­ncreibles. Un "sentido arÃ¡cnido", que le permite saber si un peligro se cierne sobre Ã©l, antes de que suceda. En ocasiones este puede llevar a Spider-Man al origen del peligro.',
        img: 'assets/img/michoacan.jpg',
        dates: '1962-08-01',
        transportation: 'Marvel'
      },
      {
        name: 'Michoacan',
        // tslint:disable-next-line:max-line-length
        description: 'Tras ser mordido por una araÃ±a radiactiva, obtuvo los siguientes poderes sobrehumanos, una gran fuerza, agilidad, poder trepar por paredes. La fuerza de Spider-Man le permite levantar 10 toneladas o mÃ¡s. Gracias a esta gran fuerza Spider-Man puede realizar saltos Ã­ncreibles. Un "sentido arÃ¡cnido", que le permite saber si un peligro se cierne sobre Ã©l, antes de que suceda. En ocasiones este puede llevar a Spider-Man al origen del peligro.',
        img: 'assets/img/oaxaca.jpg',
        dates: '1962-08-01',
        transportation: 'Marvel'
      },
    ];

    constructor() {
        console.log("servicio listo");
    }

    // hacer publico nuestro arreglo de datos para acceder a el
    getdata(): Servicess[] {
        return this.datos;
    }

    getIndividual( idx: string) {
      return this.datos[idx];
    }
}

export interface Servicess {
    name: string;
    description: string;
    img: string;
    dates: string;
    transportation: string;
}
