import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-gpt-agent',
  standalone: true,
  imports: [],
  templateUrl: './gpt-agent.component.html',
  styleUrl: './gpt-agent.component.css'
})
export class GptAgentComponent {
  currentUrl = "https://karthikvibuthiportfolio.com/portfoliogptagent";
  
    safeUrl: SafeResourceUrl;
  
    constructor(private sanitizer: DomSanitizer) {
      // Sanitize the URL
      this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.currentUrl);
    }

}
