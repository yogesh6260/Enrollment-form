import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { QualificationDetailsComponent } from './qualification-details/qualification-details.component';
import { DeclarationFormComponent } from './declaration-form/declaration-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalDetailsComponent,
    QualificationDetailsComponent,
    DeclarationFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
