import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  // i18n Select
  public name: string = 'Marco';
  public gender: 'male' | 'female' = 'male';

  public invitationMap= {
    'male':'invitarlo',
    'female':'invitarla'
  }

  changeClient():void{
    this.name = 'Astrid';
    this.gender= 'female';
  }

  // i18nPlural
  public clients: string[] = ['Daniel','Jona','Matt','Sparky','Starlord','Sam']
  public clientsMap = {
    '=0':'No tenemos ningún cliente esperando',
    '=1':'tenemos un cliente esperando',
    '=2':'tenemos 2 clientes esperando',
    'other':'tenemos # clientes esperando'
  }
  deleteClient():void{
    this.clients.shift();
  }

  //key value pipe
  public person = {
    name: 'Marco',
    age:'22',
    address: 'CDMX, México'
  }

  // async pipe
  public myObservaleTimer:Observable<number> = interval(2000)
  .pipe(
    tap( value => console.log('tap', value) )
  )

  public primiseValue: Promise<string> = new Promise((resolve,reject)=>{
    setTimeout( () =>{
      resolve('Tenemos data en la promesa.');
      console.log('Tenemos data en la promesa');
    }, 3500)
  })


}
