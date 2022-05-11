import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DarkmodeService {
  theme: String;
  public renderer: Renderer2;
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private _renderer: RendererFactory2
  ) {
    this.renderer = _renderer.createRenderer(null, null);
  }

  switchTheme() {
    console.log(this.theme);

    if (localStorage.getItem('theme') === 'light-theme') {
      this.document.body.classList.add('dark-theme');
      this.document.body.classList.remove('light-theme');
      localStorage.setItem('theme', 'dark-theme');
      this.theme = 'dark-theme';
    } else {
      this.document.body.classList.remove('dark-theme');
      this.document.body.classList.add('light-theme');
      localStorage.setItem('theme', 'light-theme');
      this.theme = 'light-theme';
    }
  }

  initializeTheme() {
    console.log('end');
    if (!localStorage.getItem('theme')) {
      localStorage.setItem('theme', 'light-theme');
      this.document.body.classList.add('light-theme');
    } else {
      this.renderer.addClass(
        this.document.body,
        localStorage.getItem('theme') === 'light-theme'
          ? 'light-theme'
          : 'dark-theme'
      );

      this.theme = localStorage.getItem('theme');
    }
  }
}
