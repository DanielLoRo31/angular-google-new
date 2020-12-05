import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { INew } from 'src/app/interfaces/new/new.interface';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private newsCollection: AngularFirestoreCollection<INew>;

  constructor( private angularFireStorage: AngularFireStorage, private angularFirestore: AngularFirestore) { 
    this.newsCollection = angularFirestore.collection<INew>('news');
  }

  add(actualNew: INew): Promise<DocumentReference<INew>> {
    return this.newsCollection.add(actualNew);
  }

  getNewsFirebase(): Observable<INew[]> {
    return this.newsCollection.valueChanges({idField: '_id'});
  }

  getNewById(id: string): Observable<any> {
    return this.newsCollection.doc(id).get();
  }

  update(id: string, actualNew: INew): Promise<void> {
    return this.newsCollection.doc(id).update(actualNew);
  }

  delete(id: string): Promise<void> {
    return this.newsCollection.doc(id).delete();
  }


  async uploadFile(path: string, data: any): Promise<any> {
    await this.angularFireStorage.upload(path, data); // (profile/my-file.png , archivo)
    return await this.angularFireStorage.ref(path).getDownloadURL().toPromise();
  }

}
