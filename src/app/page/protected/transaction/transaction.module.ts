import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionRoutingModule } from './transaction-routing.module';
import { TemplateModule } from 'src/app/template/template.module';
import { TransactionComponent } from './transaction.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProfileStatusComponent } from './component/profile-status/profile-status.component';
import { PocketStatusComponent } from './component/pocket-status/pocket-status.component';
import { BuySellComponent } from './component/buy-sell/buy-sell.component';
import { PriceGraphComponent } from './component/price-graph/price-graph.component';

@NgModule({
  declarations: [TransactionComponent, ProfileStatusComponent, PocketStatusComponent, BuySellComponent, PriceGraphComponent],
  imports: [
    CommonModule,
    TransactionRoutingModule,
    TemplateModule,
    SharedModule,
  ],
})
export class TransactionModule {}
