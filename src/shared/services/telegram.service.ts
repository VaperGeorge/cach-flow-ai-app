import { DOCUMENT } from '@angular/common';
import { inject, Injectable } from '@angular/core';
import { TelegramWebApp } from '../interfaces/TelegramWebApp';

interface AppWindow extends Window {
  Telegram?: {
    Utils: object;
    WebApp: TelegramWebApp;
    WebView: object;
  };
}

@Injectable({
  providedIn: 'root',
})
export class TelegramService {
  private readonly document = inject(DOCUMENT);
  private readonly window = this.document?.defaultView as AppWindow;

  telegram = this.window?.Telegram?.WebApp;

  constructor() {}
}
