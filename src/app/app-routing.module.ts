import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataprivacyComponent } from './components/dataprivacy/dataprivacy.component';
import { HomeComponent } from './components/home/home.component';
import { ImprintComponent } from './components/imprint/imprint.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'imprint', component: ImprintComponent },
  { path: 'dataprivacy', component: DataprivacyComponent },
  { path: '**', component: HomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
