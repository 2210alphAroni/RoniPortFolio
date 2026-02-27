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
    },
    {
      title: "Ramadan Tracker – Real-Time Islamic Productivity Web App",
      tech: ["Next.js", "Tailwind CSS", "JavaScript", "REST API"],
      description:
        "A real-time Ramadan productivity tracking application that helps users monitor fasting, prayer, Quran reading, and daily spiritual goals with live Sehri and Iftar countdown.",
      image: "/assets/img/Ramadantrackerapp.PNG",
      github: "https://github.com/2210alphAroni/Ramadan-App",
      live: "https://premiumramadantracker.netlify.app/"
    },
    {
      title: "Solar Harvest – Smart Farmer Web Application",
      tech: ["Next.js", "Tailwind CSS", "JavaScript"],
      description:
        "A modern agriculture-focused web application designed to support farmers with smart farming insights, solar-powered solutions awareness, and responsive dashboard interface for sustainable crop management.",
      image: "/assets/img/solar-harvest-web-app.png",
      github: "https://github.com/2210alphAroni/Farmer-App",
      live: "https://solarharvest.netlify.app/"
    }
  ];

}
