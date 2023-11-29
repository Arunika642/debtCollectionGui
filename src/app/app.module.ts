import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './service/data.service';
import { CreateComponent } from './components/create/create.component';
import { PullListComponent } from './components/pull-list/pull-list.component';
import { UpdatePaymentStatusComponent } from './components/update-payment-status/update-payment-status.component';
import { ListOfDefaultersComponent } from './components/list-of-defaulters/list-of-defaulters.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    PullListComponent,
    UpdatePaymentStatusComponent,
    ListOfDefaultersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
