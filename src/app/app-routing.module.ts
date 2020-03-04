import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestObjectComponent } from './test-object/test-object.component';


const routes: Routes = [
  {
    path: '',
    component: TestObjectComponent,
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
