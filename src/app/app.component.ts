import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'fga-test-firebase';

  constructor(public db: AngularFireDatabase) {

  }
  ngOnInit(): void {
    console.error(this.db.list);
  }

}
