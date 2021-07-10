import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { Template } from '@angular/compiler/src/render3/r3_ast';
import { TemplateModule } from 'src/app/template/template.module';

@NgModule({
  declarations: [PublicComponent],
  imports: [CommonModule, PublicRoutingModule, TemplateModule],
})
export class PublicModule {}
