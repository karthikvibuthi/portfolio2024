import { NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent {
  summary = [
    {
      role: 'Software Engineer @ Ardent Privacy',
      domain: 'Software Quality Analysis',
      techStack: 'Angular, Node.js, MongoDB',
      projects: 'Data Subject Request, Privacy Automation',
      image: './assets/images/ardentlogo.png',
    },
    {
      role: 'Graduate Teaching assistant @ UMBC',
      domain: 'BIG DATA processing',
      techStack: 'databricks, spark, MongoDB, hadoop',
      projects: 'Project Mentoring, Grading, Assignment Preparation',
      image: './assets/images/UMBCretrievers_LOGO.jpg',
    },
    {
      role: 'software engineer @ cgi',
      domain: 'software quality analysis, Infra management',
      techStack: 'angular, nodejs, postgres, grafana, jenkins',
      projects:
        'quality pipe line tracker for uk, CAST AIP migration, dashboard deployment, Infra Monitoring',
      image: './assets/images/cgi_logo.jpeg',
    },
    {
      role: 'Web developer @ Propelsum',
      domain: 'Consulting',
      techStack: 'angualar, figma',
      projects: 'Portfolio website, testing, debugging ',
      image: './assets/images/propelsum-logo.png',
    },
  ];

  constructor(private http: HttpClient) {}

  downloadResume(): void {
    const fileUrl = './assets/Resume2024Dec.pdf'; // Update with your file name and extension

    this.http.get(fileUrl, { responseType: 'blob' }).subscribe((blob) => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Resume.pdf'; // Change the default download name if needed
      a.click();
      window.URL.revokeObjectURL(url);
    });
  }
}
