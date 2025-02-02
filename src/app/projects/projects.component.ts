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
  currentUrl = "https://karthikvibuthiportfolio.com/portfoliogptagent";

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
      link: 'https://karthikvibuthiportfolio.com/jobhelper', // Replace with the actual project link
    },
    {
      title: 'GPT Agent for Portfolio',
      description: 'GPT Agent that gives Information about karthiks portfolio',
      link: 'https://karthikvibuthiportfolio.com/portfoliogptagent', // Replace with the actual project link
    },
    {
      title: 'Future Makers AI Assistant',
      description: 'Trained GPT model that conducts interview with a teachers to help them create a lesson plan',
      link: 'https://karthikvibuthiportfolio.com/futuremakers/', // Replace with the actual project link
    },
  ];

  viewProject(link:string){
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(link);

  }
}
