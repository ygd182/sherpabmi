import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RoutingModule } from './app.routes';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { FormService} from './form/form.service';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [FormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
