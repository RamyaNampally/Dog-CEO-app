import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentationComponent } from './documentation/documentation.component';
import { BreedListComponent } from './breed-list/breed-list.component';
import { DogCeoComponent } from './dog-ceo/dog-ceo.component';

const routes: Routes = [
{ path: '', component: DogCeoComponent, },
{ path: 'documentation', component: DocumentationComponent },
{ path: 'breedsList', component: BreedListComponent },
{ path: '', redirectTo: '/', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
