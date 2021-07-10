import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { FeatureComponent } from './component/feature/feature.component';
import { FeatureListComponent } from './component/feature-list/feature-list.component';
import { ProductsComponent } from './component/products/products.component';
import { TemplateModule } from '../../../template/template.module';
import { CarouselComponent } from './component/carousel/carousel.component';
import { BenefitService } from './service/benefit/benefit.service';
import { ProductService } from './service/product/product.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    FeatureComponent,
    FeatureListComponent,
    ProductsComponent,
    CarouselComponent,
  ],
  imports: [CommonModule, TemplateModule, SharedModule, HomeRoutingModule],
  exports: [HomeComponent],
  providers: [BenefitService, ProductService],
})
export class HomeModule {}
