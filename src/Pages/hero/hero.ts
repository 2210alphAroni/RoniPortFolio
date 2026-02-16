import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero implements OnInit {

  roles: string[] = [
    'Full Stack Developer',
    'Django & DRF Developer',
    'Angular Developer',
    'Dotnet Developer',
  ];

  currentRole: string = '';
  roleIndex: number = 0;

  ngOnInit(): void {
    this.currentRole = this.roles[0];
    setInterval(() => {
      this.roleIndex = (this.roleIndex + 1) % this.roles.length;
      this.currentRole = this.roles[this.roleIndex];
    }, 1000);
  }
}
