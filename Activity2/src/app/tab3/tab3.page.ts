import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page{
  public folder: string;
  public userList = [
    {
      id: 1,
      name: 'facebook: Kathlene Mae Cuatero Dante'
    }
  ]
  
  constructor() {}
  
}