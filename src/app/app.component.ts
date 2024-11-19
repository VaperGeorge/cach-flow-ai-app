import { Component, inject, OnInit, Signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChatgptService } from '../shared';
import { ChatCompletion } from 'openai/resources/index.mjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  private readonly chatgpt = inject(ChatgptService);

  readonly response!: Signal<ChatCompletion | null>;

  constructor() {
    this.response = this.chatgpt.generateText();
  }

  ngOnInit(): void {}
}
