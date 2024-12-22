import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  currentUrl = "http://3.229.200.133:5002/";

  safeUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    // Sanitize the URL
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.currentUrl);
  }
  projects = [
    {
      title: 'Career Map and Networking',
      description:
        'Website for ATS scoring, job and networking events automation.',
      link: 'http://3.229.200.133:5001/', // Replace with the actual project link
    },
    {
      title: 'GPT Agent for Portfolio',
      description: 'GPT Agent that gives Information about karthiks portfolio',
      link: 'http://3.229.200.133:5002/', // Replace with the actual project link
    },
    {
      title: 'Portfolio Website',
      description: 'Angular Node Js based portfolio website with GPT Agent',
      link: 'https://karthikvibuthi.github.io/Karthik_Portfolio_Website/resume.html', // Replace with the actual project link
    },
  ];

  viewProject(link:string){
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(link);

  }
}
