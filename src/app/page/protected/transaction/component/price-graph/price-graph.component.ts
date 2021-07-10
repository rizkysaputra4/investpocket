import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Product from 'src/app/page/public/home/model/product';
import ProductPrice from '../../model/ProductPrice';
import { TransactionService } from '../../service/transaction.service';
import * as CanvasJS from '../../../../../../assets/canvasjs.min.js';

@Component({
  selector: 'app-price-graph',
  templateUrl: './price-graph.component.html',
  styleUrls: ['./price-graph.component.scss'],
})
export class PriceGraphComponent implements OnInit {
  product: string = 'gold';
  isOnline: boolean = false;
  productPrice: ProductPrice[] = [];

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly service: TransactionService
  ) {}

  ngOnInit(): void {
    this.product =
      this.activatedRoute.snapshot.paramMap.get('productId') || 'gold';

    this.service.getPriceList(this.product).subscribe(
      (data) => {
        this.isOnline = false;
        this.productPrice = data;

        let priceBuy: any = [];
        let priceSell: any = [];
        this.productPrice.forEach((data) => {
          priceBuy.push({
            y: data.priceBuy,
            label: this.dateFormatter(data.date),
          });
          priceSell.push({
            y: data.priceSell,
            label: this.dateFormatter(data.date),
          });
        });

        let chart = new CanvasJS.Chart('chartContainer', {
          theme: 'light2',
          zoomEnabled: true,
          animationEnabled: true,
          exportEnabled: true,
          title: {
            text: `${this.titleCaseFormatter(this.product)} Price`,
          },
          toolTip: {
            shared: 'true',
          },

          axisY: {
            title: 'Price',
            suffix: ',00',
          },
          legend: {
            cursor: 'pointer',
          },
          subtitles: [
            {
              text: '',
            },
          ],
          data: [
            {
              type: 'spline',
              dataPoints: priceBuy,
              showInLegend: true,
              name: 'Price Buy',
            },
            {
              type: 'spline',
              dataPoints: priceSell,
              showInLegend: true,
              name: 'Price Sell',
            },
          ],
        });

        chart.render();
      },
      (err) => {
        console.log(err);
        this.isOnline = true;
      }
    );
  }

  dateFormatter(d: Date): string {
    let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
    let mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
    let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
    return `${da}-${mo}-${ye}`;
  }

  titleCaseFormatter(s: string): string {
    return s.replace(/\w\S*/g, (txt) => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
}
