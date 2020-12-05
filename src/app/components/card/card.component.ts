import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { INew } from 'src/app/interfaces/new/new.interface';
import { NewsService } from 'src/app/services/news/news.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() actualNew : INew

  constructor(private newsService: NewsService, private router: Router) { }

  ngOnInit(): void {
  }

  async onDelete(): Promise<void> {
    try {
      const userDeleted = await this.newsService.delete(this.actualNew._id);
      console.log('Noticia eliminado', userDeleted);
    } catch (error) {
      console.log('No se pudo eliminar la noticia', error);
    }
  }

  onUpdate(): void {
    this.router.navigate(['/', 'news', this.actualNew._id]);
  }

}
