import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { style, animate, transition, trigger } from '@angular/animations';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        // :enter is alias to 'void => *'
        style({ opacity: 0 }),
        animate(600, style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class ProductsComponent implements OnInit {


  route: any;
  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    window.scroll(0, 0);

    // console.log(this.activatedRoute.snapshot.queryParams);
    this.activatedRoute.queryParams.subscribe(params => {
      // console.log(params);
      this.route = params.service;
    });

    setTimeout(() => {
      this.scrollToContent();
    }, 300);


  }


  scrollToContent(): void {

    // console.log(this.route);

    const headerOffset = 100;
    let elementPosition;
    let offsetPosition;

    if (this.route === '01') {
      console.log('here');

      elementPosition = document.getElementById('product1')!.offsetTop;
      offsetPosition = elementPosition - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });

    }
    if (this.route === '02') {
      elementPosition = document.getElementById('product2')!.offsetTop;
      offsetPosition = elementPosition - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });

    }
    if (this.route === '03') {
      elementPosition = document.getElementById('product3')!.offsetTop;
      offsetPosition = elementPosition - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });

    }
    if (this.route === '04') {
      elementPosition = document.getElementById('product4')!.offsetTop;
      offsetPosition = elementPosition - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });

    }



  }

}
