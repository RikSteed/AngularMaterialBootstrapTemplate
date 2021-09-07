import { Component, HostBinding, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

interface Language {
  id: string,
  desc: string
}
@Component({
  // Change with app-root to access body of page
  selector: 'body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // HostBinding (set class on body)
  @HostBinding('class') class = '';
  // Slider Material
  toggleTheme = new FormControl();
  // Example of State
  count = 0;

  language :string = 'EN';
  // Language Array
  languages: Language[] = [
    {
      id: "JP", 
      desc: "Japan 🇯🇵" 
    },
    {
      id: "EN", 
      desc: "United Kingdom 🇬🇧" 
    },
    {
      id: "IT", 
      desc: "Italy 🇮🇹" 
    },
  ]

  constructor(private translate: TranslateService){
    this.translate.addLangs(['JP', 'EN', 'IT']);
    this.translate.use(this.language);
  }

  ngOnInit(): void {
    this.toggleTheme.valueChanges.subscribe((theme)=>{
      const darkTheme = 'dark';
      this.class = theme ? darkTheme:'';
    })
  }
  changeLanguage(language: any){
    this.translate.use(language);
  }
  // Example counter
  counter(){
    this.count++;
  }
  subtractor(){
    this.count--;
  }
  
}
