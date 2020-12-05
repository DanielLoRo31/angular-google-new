import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/services/title/title.service';

@Component({
  selector: 'app-n-tpl',
  templateUrl: './n-tpl.component.html',
  styleUrls: ['./n-tpl.component.scss']
})
export class NTplComponent implements OnInit {

  constructor(private titleService: TitleService) { 
    this.titleService.changeTitlePage(['Noticias'])
  }

  ngOnInit(): void {

  }

}
