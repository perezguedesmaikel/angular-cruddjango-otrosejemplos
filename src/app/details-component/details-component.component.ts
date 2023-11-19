import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-details-component',
  templateUrl: './details-component.component.html',
  styleUrls: ['./details-component.component.css']
})
export class DetailsComponentComponent {
  productId: string | undefined;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('id')!;
  }
}
