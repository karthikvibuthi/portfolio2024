import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgFor,RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  images = [
    {
      src: './assets/images/UMBCretrievers_LOGO.jpg',
      alt: 'UMBC Logo',
      desc: 'Masters of Science in Data Science',
    },
    {
      src: './assets/images/sinst_logo.png',
      alt: 'SNIST Logo',
      desc: 'Bachelors of Technology in Electroninc and Communication Engineering',
    },
    {
      src: './assets/images/EzPelican.jpeg',
      alt: 'EzPelican',
      desc: 'Model Plane Builder',
    },
  ];
}
