import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { NavPaneComponent } from './component/nav-pane/nav-pane.component';
import { ContentComponent } from './component/content/content.component';
import { TemplateModule } from 'src/app/template/template.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProfileComponent } from './profile.component';
import { HistoryComponent } from './child/history/history.component';

@NgModule({
  declarations: [
    ProfileComponent,
    NavPaneComponent,
    ContentComponent,
    HistoryComponent,
  ],
  imports: [CommonModule, ProfileRoutingModule, TemplateModule, SharedModule],
})
export class ProfileModule {}
