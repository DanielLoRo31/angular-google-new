import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NewsService } from 'src/app/services/news/news.service';

@Component({
  selector: 'app-n-new',
  templateUrl: './n-new.component.html',
  styleUrls: ['./n-new.component.scss'],
})
export class NNewComponent implements OnInit {
  file: File;
  form: FormGroup;
  img: string;
  params: Params;
  isNew: Boolean;

  constructor(private newsService: NewsService, private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.img = '../../../assets/img/image.svg'
    this.isNew = true;
    this.file = null;

    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
    });

    this.activatedRoute.params.subscribe(
      async (params: Params) => {
        this.params = params;
        this.isNew = params.type === 'new' ? true : false;
        await this.iniValuesHttp();
        console.log('Parametros: ', params);
      }, // Next
      (error: any) => {
        console.log('Error parámetros: ', error);
      }, // Error
      () => { } // Complete
    );
  }

  async iniValuesHttp(): Promise<void> {
    try {
      if (!this.isNew) {
        const news = await this.newsService.getNewById(this.params.type).toPromise();
        if (news.data()) {
          this.form = new FormGroup({
            title: new FormControl(news.data().title, [Validators.required]),
            description: new FormControl(news.data().description, [Validators.required]),
          });
          this.img = news.data().img ? news.data().img : this.img;
        }
      } else {
        this.form.reset();
      }
    } catch (error) {
      console.log(error);
    }
  }

  async onChange(event: any): Promise<any> {
    const files: any[] = event.target.files;
    if (files.length > 0) {
      this.file = files[0];
      this.img = await this.getBase64(files[0]);
    } else {
      console.log('No selecciono un archivo');
    }
  }

  getBase64(file: File): Promise<any> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }

  async onAdd(): Promise<void> {
    console.log(this.form);
    if (this.form.valid && this.file) {
      let path = null;
      path = await this.newsService.uploadFile(`news/${this.file.name}`, this.file);
      const firebaseResponse = await this.newsService.add({ ...this.form.value, date: new Date().toISOString(), img: path ? path : this.img });
      this.file = null;
      path = null;
      this.router.navigate(['/', 'news', 'list']);
    } else {
      console.log('El formulario es inválido');
    }
  }

  async onUpdate(): Promise<void> {
    try {
      let path = null;
      if (this.file) {
        path = await this.newsService.uploadFile(`news/${this.file.name}`, this.file);
      }
      await this.newsService.update(this.params.type, {...this.form.value, date: new Date().toISOString(), img: path ? path : this.img});
      this.router.navigate(['/', 'news', 'list']);
    } catch (error) {
      console.log(error);
    } finally {
      this.file = null;
    }
  }
}
