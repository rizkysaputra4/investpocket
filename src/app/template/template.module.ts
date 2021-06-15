import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from './template.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';

@NgModule({
  declarations: [TemplateComponent, NavbarComponent, FooterComponent],
  imports: [CommonModule],
  exports: [TemplateComponent],
})
export class TemplateModule {}
