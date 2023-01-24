import { Component, OnInit } from '@angular/core';
import { AppFacade } from 'src/app/core/facades/app.facade';
import { User } from 'src/app/core/interfaces/user';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
  providers : [AppFacade]
})
export class IndexPage implements OnInit {

  users : User[] = [];
  constructor(private appFacade : AppFacade) { }

  ngOnInit() {
    this.getUserList();
  }

  async getUserList(){
    this.users = await this.appFacade.listUser();
  }

}
