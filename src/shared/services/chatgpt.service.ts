import { Injectable, Signal } from '@angular/core';
import OpenAI from 'openai';
import { asyncComputed } from '../helpers';
import { ChatCompletionCreateParamsNonStreaming } from 'openai/resources/index.mjs';

export const OPENAI_KEY =
  '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';

@Injectable({
  providedIn: 'root',
})
export class ChatgptService {
  private configuration = {
    apiKey: `${OPENAI_KEY}`,
    dangerouslyAllowBrowser: true,
  };
  private openai = new OpenAI(this.configuration);

  constructor() {}

  generateText(): Signal<OpenAI.Chat.Completions.ChatCompletion> {
    const request = {
      model: 'gpt-4o',
      messages: [
        {
          role: 'system',
          content: [
            {
              type: 'text',
              text: `You are a helpful doctor`,
            },
          ],
        },
        {
          role: 'user',
          content: [
            {
              type: 'text',
              text: 'Hi',
            },
          ],
        },
      ],
    } as ChatCompletionCreateParamsNonStreaming;

    return asyncComputed(
      async () => await this.openai.chat.completions.create(request)
    );
  }
}
