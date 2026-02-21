import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));


  // For rain effect
function createRain() {
  const rainContainer = document.querySelector('.rain');
  const numberOfDrops = 150;

  for (let i = 0; i < numberOfDrops; i++) {
    const drop = document.createElement('div');
    drop.classList.add('drop');

    drop.style.left = Math.random() * window.innerWidth + 'px';
    drop.style.animationDuration = 0.5 + Math.random() * 0.5 + 's';
    drop.style.animationDelay = Math.random() * 2 + 's';

    rainContainer?.appendChild(drop);
  }
}

window.onload = createRain;