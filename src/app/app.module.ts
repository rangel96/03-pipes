import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Comando para instalar los paquetes de idiomas:  ng add @angular/localize
// NOTA: El paquete 'en' referente a English ya esta por default;
import '@angular/common/locales/global/fr';
import '@angular/common/locales/global/es';

import { AppComponent } from './app.component';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { DomSeguroPipe } from './pipes/dom-seguro.pipe';
import { PasswordPipe } from './pipes/password.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe,
    DomSeguroPipe,
    PasswordPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
