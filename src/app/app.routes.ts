import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { LoginComponent } from './login/login.component';
import { GptAgentComponent } from './gpt-agent/gpt-agent.component';
import { ConnectComponent } from './connect/connect.component';

export const routes: Routes = [
    { path: 'about', component: AboutComponent },
  { path: 'summary', component: ExperienceComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'gpt-agent', component: GptAgentComponent },
  { path: 'connect', component: ConnectComponent},

  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: '**', redirectTo: '/about' } 
];
