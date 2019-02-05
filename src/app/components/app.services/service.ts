import { Injectable } from '@angular/core';//estructura de servicios
import { Services } from '@angular/core/src/view';

@Injectable()//decorador para crear servicio
export class ServicesService {
 private datos: Servicess [] = [

    {
        name: 'San Miguel de Allende',
        // tslint:disable-next-line:max-line-length
        description: 'It is considered one of the most beautiful cities in Mexico and in 2008 was recognized by UNESCO, next to the sanctuary of Jesus of Atotonilco, as a World heritage site. Its attractive and cosmopolitan appearance makes it one of the favorite destinations for art lovers. Among all that there is to visit highlights its historical and architectural heritage',
        img: 'assets/img/sanMiguel.jpg',
        dates: 'Date to visit: March - may',
        transportation: 'Bus'
      },
      {
        name: 'Morelia',
        // tslint:disable-next-line:max-line-length
        description: 'To visit Morelia is to visit a city that has stopped in time, its quiet streets are silent witnesses of the history that has been accumulated in the corners and the corners; They have been perfectly defined by the magnificence of colonial constructions. In its surroundings you will find stunning scenery such as sulfurs, where you can reborn in its hot springs or take a quiet ride on horseback.Built with the characteristic pink stone of the region, its monuments show the magistral and eclectic fusion of the medieval spirit with Renaissance, Baroque and neoclassical elements that today rise as echoes of the time of the Viceroyalty Morelia is also home to one of the most important film festivals in the world.',
        img: 'assets/img/morelia.jpg',
        dates: 'Date to visit: March - April',
        transportation: 'Plane'
      },
      {
        name: 'Tulum',
        // tslint:disable-next-line:max-line-length
        description: 'It was declared a World Heritage Site by UNESCO, one of the essential sites in Tulum are its Mayan ruins, located on a cliff facing the Caribbean Sea; With warm starry nights and clear turquoise waters you will find the only archaeological zone that sits on the seashore. It is the most photogenic site in the region and, perhaps, the whole country.Under the cliff is the beach of paradise, considered one of the best beaches of the Riviera Maya, from there are organized excursions to the famous Barrier Reef Mesoamerican. Likewise, the Sian Ka an Biosphere Reserve measures half a million hectares and covers all possible scenarios: beaches, coral reefs, rainforests, dunes and cenotes.',
        img: 'assets/img/tulum.jpg',
        dates: 'Date to visit: All year',
        transportation: 'Plane'
      },
      {
        name: 'CDMX',
        // tslint:disable-next-line:max-line-length
        description: 'Mexico City is the densely populated capital of Mexico that is located at a great height. It is famous for its main temple (an Aztec temple of the 13th century), the Metropolitan Cathedral of Mexico, Baroque style, the Spanish conquistadors and the National Palace, which houses historical murals of Diego Rivera. All these landmarks are located around the Plaza de la Constitución, the huge main square also known as the Zócalo,Among the best places to visit are:Xochimilco,Palace of the Fine Art,Teotihuacan,Chapultepec',
        img: 'assets/img/cdmx.jpg',
        dates: 'Date to visit: April - September',
        transportation: 'Plane'
      },
      {
        name: 'Chichen Itza',
        // tslint:disable-next-line:max-line-length
        description: 'Chichen Itzá is one of the most important prehispanic capitals of the ancient Mayan culture and one of the Seven wonders of the modern world. He travels, admires and touches the ancient constructions to come into contact with a world of extended certainties and immemorial unknowns that boast the greatness and evolution of one of the most advanced cultures of humanity.',
        img: 'assets/img/chichenItza.jpg',
        dates: 'Date to visit: All year',
        transportation: 'Plane'
      },
      {
        name: 'Cancun',
        // tslint:disable-next-line:max-line-length
        description: 'Cancun is located in Quintana Roo, Mexico, and the clear waters of the Caribbean surround it. It is characterized by its beautiful beaches whose coral sand is fine and white. Its sea of transparent waters possesses an impressive hue of blues that goes from the emerald to the turquoise and that will make you rethink what clarity means. You can find ruins where you will have a glimpse of the Mayan culture, like the archaeological zone the king or the Temple of the Scorpion (Yamil Lu um) or to enjoy the natural spectacle of the water in Xel-Ha, considered a natural aquarium.',
        img: 'assets/img/cancun.jpg',
        dates: 'Date to visit: All year',
        transportation: 'Plane'
      },

      {
        name: 'Michoacan',
        // tslint:disable-next-line:max-line-length
        description: 'The forests of Mexico are true wonders in which you can find a lot of flora and fauna. Monarch butterflies have chosen to travel thousands of miles to the forests of the State of Mexico and the El Capulín Sanctuary is an option to live with them. Visit the sanctuary of the monarch butterfly of Capulín and live a unique experience walking among the thousands of monarch butterflies that hibernate, grow and breed among the trees of Oyamel. You can take the walk with the help of a guide who will explain everything you need to admire them. As you walk through the forest you will see hundreds of them fluttering around you or forming huge orange and yellow cones in the treetops. Move to know that they fly more than 4000 miles to get there.',
        img: 'assets/img/michoacan.jpg',
        dates: 'Date to visit: All year',
        transportation: 'Bus'
      },
      {
        name: 'Oaxaca',
        // tslint:disable-next-line:max-line-length
        description: 'At the end of the Sierra Madre mountain range of the south through Oaxaca and down to the Pacific Ocean, lies the coastal destination of Puerto Escondido. The city is built around a bright bay bordered by gigantic rock formations. It awaits you with many surprises to share with everyone who wants to live the adventure, the beauty and the sublime of life in one place; Ancient civilizations, colonial architecture and living traditions converge here. Its beaches are the most visited in the country because they are quite quiet most of the year; Puerto Escondido is one of the favorite destinations by nationals and foreigners.',
        img: 'assets/img/oaxaca.jpg',
        dates: 'Date to visit: June - October',
        transportation: 'Plane'
      },
      {
        name: 'Zacatecas',
        // tslint:disable-next-line:max-line-length
        description: 'If you are looking for a beautiful place to visit, Zacatecas is a choice: a colonial treasure declared world heritage for its architecture, its urban design and its irregularity of the alignment of streets. The beautiful city of pink quarry that holds magic, tradition and charm.It has a variety of attractive tourist, no doubt numerous since it offers ecotourism, religious, historical and cultural venues, Bull routes, route of mescal, as well as the festivities and traditions that surround this unique destination.',
        img: 'assets/img/zacatecas.jpg',
        dates: 'Date to visit: January - March',
        transportation: 'Plane'
      },
    ];

    constructor() {
        //console.log('service');
    }

    // hacer publico nuestro arreglo de datos para acceder a el
    getdata(): Servicess[] {
        return this.datos;
    }

    getIndividual( idx: string) {
      return this.datos[idx];
    }

    searchInformation( termino: string): Servicess[] {
    const infoArr: Servicess[] = [];
    termino = termino.toLowerCase();

    for ( const info of this.datos) {
      const name = info.name.toLowerCase();
      if ( name.indexOf( termino ) >= 0 ) {
          infoArr.push( info );
      }
    }
     return infoArr;
  }

  }

export interface Servicess {
    name: string;
    description: string;
    img: string;
    dates: string;
    transportation: string;
}
