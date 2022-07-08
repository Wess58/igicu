import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { ContactComponent } from "./contact/contact.component";
import { ProductsComponent } from "./products/products.component";
import { ApproachComponent } from "./approach/approach.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'contact-us',
    component: ContactComponent,
  },
  {
    path: 'services',
    component: ProductsComponent,
  },
  {
    path: 'our-approach',
    component: ApproachComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      useHash: true,
      scrollPositionRestoration: "enabled"
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
