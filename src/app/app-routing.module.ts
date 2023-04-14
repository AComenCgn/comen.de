import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImprintComponent } from './imprint/imprint.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';

const routes: Routes = [
  {path: '', component: SlideshowComponent},
  { path: 'imprint', component: ImprintComponent},    // 8. 
  {path: 'data-protection', component: DataProtectionComponent}     // 16. 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
