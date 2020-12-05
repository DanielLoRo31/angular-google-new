import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  constructor(private title: Title) { }

  changeTitlePage(arrayName: string[], separator?: string) {
    var name: string = '';
    const stringSeparator = separator ? separator : ''

    arrayName.map((e, i) => {
      i > 0 ? name += ` ${stringSeparator} ${arrayName[i]}` : name += arrayName[i]
    });
    this.title.setTitle(`${name}`);
  }
}
