import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from './template.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [TemplateComponent, NavbarComponent, FooterComponent],
  imports: [CommonModule, SharedModule],
  exports: [TemplateComponent],
})
export class TemplateModule {}
