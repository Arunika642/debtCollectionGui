import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PullListComponent } from './components/pull-list/pull-list.component';
import { CreateComponent } from './components/create/create.component';
import { UpdatePaymentStatusComponent } from './components/update-payment-status/update-payment-status.component';
import { ListOfDefaultersComponent } from './components/list-of-defaulters/list-of-defaulters.component';

const routes: Routes = [
  {path: 'debtCollection/pull/:month/:year', component: PullListComponent},
  {path: 'debtCollection/create', component: CreateComponent},
  {path: 'debtCollection/update/paymentTrackId', component: UpdatePaymentStatusComponent},
  {path: 'debtCollection/listOfdefaulters/:month/:year', component: ListOfDefaultersComponent},
  {path: '', redirectTo: 'debtCollection/pull/:month/:year', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
