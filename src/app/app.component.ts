import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'fga-test-firebase';

  _db: AngularFirestore;
  users: Observable<any[]>;

  constructor(public db: AngularFirestore) {
    this.users = db.collection('users').valueChanges();
    this._db = db;
  }
  ngOnInit(): void {
  }

}
