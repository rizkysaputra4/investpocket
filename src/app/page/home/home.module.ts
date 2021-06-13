import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from 'src/app/shared/component/navbar/navbar.component';
import { HomeComponent } from './home.component';
import { FeatureComponent } from './component/feature/feature.component';
import { FeatureListComponent } from './component/feature-list/feature-list.component';
import { FeatureCardComponent } from './component/feature-card/feature-card.component';
import { FooterComponent } from 'src/app/shared/component/footer/footer.component';
import { ProductsComponent } from './component/products/products.component';

@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
    FeatureComponent,
    FeatureListComponent,
    FeatureCardComponent,
    FooterComponent,
    ProductsComponent,
  ],
  imports: [CommonModule],
  exports: [HomeComponent],
})
export class HomeModule {}
