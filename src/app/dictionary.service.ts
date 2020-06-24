import { Injectable } from '@angular/core';

export interface IWord {
  key: string,
  meaning: string
}

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  private words: IWord[] = [
    {
      key: 'service',
      meaning: 'dịch vụ'
    },
    {
      key: 'developer',
      meaning: 'nhà phát triển'
    },
    {
      key: 'provide',
      meaning: 'cung cấp'
    },
    {
      key: 'attention',
      meaning: 'chú ý'
    },
    {
      key: 'listen',
      meaning: 'nghe'
    }
  ];

  constructor() { }

  search(word: string): string {
    if (!word) {
      return '';
    }

    const w = this.words.find(item => item.key === word);

    if (w) {
      return w.meaning;
    } else {
      return 'not found';
    }
  }

  getAll(): IWord[] {
    return this.words;
  }
}
