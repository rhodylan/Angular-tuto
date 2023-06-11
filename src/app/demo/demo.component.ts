import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent {
users:string = 'ali';

constructor(private userService : UserService){
}

// ngOnInit(){
//   this.users = this.allUsers();
// }

allUsers(){
  // this.users = this.userService.getUsers();
  return this.userService.getUsers().subscribe(
    (result) => {
      
    }
  )
}
}
