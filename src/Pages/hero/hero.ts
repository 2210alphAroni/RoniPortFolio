import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero implements OnInit {

  roles: string[] = [
    'Full Stack Developer',
    'Angular Developer',
    'Django & DRF Developer',
    'Dotnet Developer',
  ];

  currentText: string = '';
  private roleIndex = 0;
  private charIndex = 0;
  private isDeleting = false;

  mouseX = 0;
  mouseY = 0;

  ngOnInit(): void {
    this.typeEffect();
  }

  typeEffect() {
    const currentRole = this.roles[this.roleIndex];

    if (!this.isDeleting) {
      this.currentText = currentRole.substring(0, this.charIndex + 1);
      this.charIndex++;

      if (this.charIndex === currentRole.length) {
        setTimeout(() => this.isDeleting = true, 1000);
      }
    } else {
      this.currentText = currentRole.substring(0, this.charIndex - 1);
      this.charIndex--;

      if (this.charIndex === 0) {
        this.isDeleting = false;
        this.roleIndex = (this.roleIndex + 1) % this.roles.length;
      }
    }

    setTimeout(() => this.typeEffect(), this.isDeleting ? 50 : 100);
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.mouseX = (event.clientX / window.innerWidth) * 30;
    this.mouseY = (event.clientY / window.innerHeight) * 30;
  }

  showMore = false;

  showCertificates() {
    this.showMore = true;
  }
}
