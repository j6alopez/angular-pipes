import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';


@NgModule({
  exports: [
    MenubarModule,
    ButtonModule
  ]
})
export class PrimeNgModule { }
