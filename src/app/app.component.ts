import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'EuTeAmo';

  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  ngOnInit(): void {
    ///------
    if (isPlatformBrowser(this.platformId)) {
      const naoButton: HTMLAnchorElement | null = document.getElementById('nao') as HTMLAnchorElement;

      ///------
      if (naoButton) {
        naoButton.addEventListener('click', (event: MouseEvent) => {
          const container: HTMLElement | null = document.querySelector('.container');
          ///------

          if (container) {
            const maxX: number = container.clientWidth - naoButton.offsetWidth;
            const maxY: number = container.clientHeight - naoButton.offsetHeight;

            ///------
            ///------
            const randomX: number = Math.floor(Math.random() * maxX);
            const randomY: number = Math.floor(Math.random() * maxY);
            ///------
            ///------


            naoButton.style.left = `${randomX}px`;
            naoButton.style.top = `${randomY}px`;
            ///------
          }

          event.preventDefault();
        });
      }
    }
  }
}
