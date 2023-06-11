import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hello-angular';
  value = '';
  nilai: number=0;
  x :number= 0;
  nameList = ['ali','siti'];
  name:string='';

  process(){
    this.x = this.nilai;
  }

  add(){
    this.nilai++;
  }

  subtract(){
    this.nilai--;
  }

  addUser(){
    //put name into the nameList
    this.nameList.push(this.name);
  }
}
