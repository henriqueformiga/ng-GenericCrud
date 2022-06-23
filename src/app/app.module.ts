import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app-routing.module';
import { GenericListComponent } from './shared/generic-list/generic-list.component';
import { UsuarioComponent } from './usuario/usuario.component';

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(APP_ROUTES)],
  declarations: [
    AppComponent,
    HelloComponent,
    GenericListComponent,
    UsuarioComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
