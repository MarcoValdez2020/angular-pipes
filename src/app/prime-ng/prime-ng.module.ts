import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';


//import { CalendarModule } from 'primeng/calendar';
//import { MenuModule } from 'primeng/menu';
//import { MessageService } from 'primeng/api';
//import { MessagesModule } from 'primeng/messages';
//import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button'
import { CardModule } from 'primeng/card'
import { FieldsetModule } from 'primeng/fieldset'
import { MenubarModule } from 'primeng/menubar';
import { PanelModule} from 'primeng/panel'
import { SplitButtonModule } from 'primeng/splitbutton';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';

@NgModule({
  providers:[
  //  MessageService
  ],
  exports:[

    ButtonModule,
    CardModule,
    FieldsetModule,
    FormsModule,
    MenubarModule,
    PanelModule,
    SplitButtonModule,
    TableModule,
    ToolbarModule,
   // CalendarModule,
   // MenuModule,
   // MessagesModule,
   // ToastModule,
  ]
})
export class PrimeNGModule { }
