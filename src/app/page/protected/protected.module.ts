import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtectedRoutingModule } from './protected-routing.module';
import { ProtectedComponent } from './protected.component';
import { TemplateModule } from 'src/app/template/template.module';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [ProtectedComponent],
  imports: [CommonModule, ProtectedRoutingModule],
})
export class ProtectedModule {}
