import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrls: ['./basic-page.component.css']
})
export class BasicPageComponent {
  public nameLower: string = 'marco';
  public nameUpper: string = 'MARCO';
  public fullName: string = 'MaRcO VAlDeZ'

  public customDate: Date = new Date();


}
