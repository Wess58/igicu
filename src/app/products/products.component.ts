import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
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
  currentBackground: any;
  currentImageIndex = 1;
  activateFade = false;
  route: any;
  carouselImages = [
    {
      imgUrl: "assets/images/image-two.jpg"
    },
    {
      imgUrl: "assets/images/event-bg.jpg"
    },
    {
      imgUrl: "assets/images/image-three.jpg"
    },
    {
      imgUrl: "assets/images/event-rally.jpg"
    },
    {
      imgUrl: "assets/images/image-one.jpg"
    }
  ]

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {

    this.router.events.subscribe((val) => {
      // see also
      if (val instanceof NavigationEnd) {
        this.ngOnInit();
      }
    });

  }

  ngOnInit(): void {


    // console.log(this.activatedRoute.snapshot.queryParams);
    this.activatedRoute.queryParams.subscribe(params => {
      // console.log(params);
      this.route = params.service;
      window.scroll(0, 0);

      setTimeout(() => {
        this.scrollToContent();

      }, 10);
    });

    this.activateFade = true;

    this.currentBackground = this.carouselImages[0];
    window.setInterval(this.setBackground.bind(this), 5000);



  }

  setBackground(): any {

    this.currentImageIndex++;
    this.currentImageIndex = this.currentImageIndex % this.carouselImages ?.length;

    this.currentBackground = null;
    setTimeout(() => {
      this.currentBackground = this.carouselImages[this.currentImageIndex];
    }, 10);

  }


  scrollToContent(): void {

    // console.log(this.route);

    const headerOffset = 100;
    let elementPosition;
    let offsetPosition;

    if (this.route === '01') {
      // console.log('here');

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
