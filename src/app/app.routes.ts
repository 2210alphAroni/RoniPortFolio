import { Routes } from '@angular/router';

import { Hero } from '../Pages/hero/hero';
import { About } from '../Pages/about/about';
import { Contact } from '../Pages/contact/contact';
import { Projects } from '../Pages/projects/projects';
import { Resume } from '../Pages/resume/resume';
import { Skills } from '../Pages/skills/skills';

export const routes: Routes = [
  {
    path: '',
    component: Hero,
    pathMatch: 'full'
  },
  {
    path: 'about',
    component: About
  },
  {
    path: 'projects',
    component: Projects
  },
  {
    path: 'skills',
    component: Skills
  },
  {
    path: 'resume',
    component: Resume
  },
  {
    path: 'contact',
    component: Contact
  },
  {
    path: '**',
    redirectTo: ''
  }
];
