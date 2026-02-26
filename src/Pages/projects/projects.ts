import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {

  projects = [
    {
      title: 'Photography Service Booking System',
      tech: 'ASP.NET Core, Web API, Dapper',
      description: 'Online booking system with payment integration.',
      image: '/assets/img/Application_logo.png',
      github: 'https://github.com/2210alphAroni/PSBSProject',
      live: 'https://github.com/2210alphAroni/PSBSProject'
    },
    {
      title: 'My Portfolio',
      tech: 'HTML, CSS, JavaScript',
      description: 'Modern animated portfolio with 3D skills cube.',
      image: '/assets/img/favicon-img.png',
      github: 'https://github.com/2210alphAroni/Portfolio',
      live: 'https://my-portfolio-7kuk.onrender.com/'
    },
    {
      title: 'Device Zone E-commerce Platform',
      tech: 'HTML, CSS, JavaScript, Django',
      description: 'E-commerce platform for electronics with user authentication.',
      image: '/assets/img/aboutpagephoto-removebg-preview.png',
      github: 'https://github.com/2210alphAroni/Device-Zone-E-Commerce-Website',
      live: 'https://github.com/2210alphAroni/Device-Zone-E-Commerce-Website'
    }
  ];

}
