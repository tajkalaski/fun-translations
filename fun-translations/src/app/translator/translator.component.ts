import { Component, OnInit } from '@angular/core';
import { FunTranslationApiService } from '../service/fun-translation-api.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-translator',
  templateUrl: './translator.component.html',
  styleUrls: ['./translator.component.scss']
})
export class TranslatorComponent implements OnInit {
  text: string;
  translationTypes = ['pirate', 'yoda', 'dothraki'];
  translationText: any;
  selectedType: string;
  constructor(
    private apiService: FunTranslationApiService
  ) { }

  translate(event, form) {
    this.text = form.value.text;
    this.apiService.getTranslation(this.text, form.value.translation)
    .pipe(
      map(data => this.translationText = data)
    )
    .subscribe();
  }

  ngOnInit() {
  }


}
