import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { INew } from 'src/app/interfaces/new/new.interface';
import { NewsService } from 'src/app/services/news/news.service';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-n-list',
  templateUrl: './n-list.component.html',
  styleUrls: ['./n-list.component.scss']
})
export class NListComponent implements OnInit {
  news: INew[];
  newsObs: Subscription;
  isActive: boolean;

  constructor(
    private newsService: NewsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.news = [];
    this.isActive = true
    this.newsObs = this.newsService.getNewsFirebase().pipe(takeWhile(() => this.isActive)).subscribe((news: INew[]) => {
      this.news = news;
      console.log(news);
    });
  }

  ngOnDestroy(): void {
    this.isActive = false;
  }

}
