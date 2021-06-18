import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { FeatureComponent } from './component/feature/feature.component';
import { FeatureListComponent } from './component/feature-list/feature-list.component';
import { ProductsComponent } from './component/products/products.component';
import { TemplateModule } from 'src/app/template/template.module';
import { CarouselComponent } from './component/carousel/carousel.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    FeatureComponent,
    FeatureListComponent,
    ProductsComponent,
    CarouselComponent,
  ],
  imports: [CommonModule, TemplateModule, SharedModule],
  exports: [HomeComponent],
})
export class HomeModule {}
