import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import {Message} from "../../interfaces";
import {OpenAiService} from "../../services/openai.service";
import {
  ChatMessageComponent,
  MyMessageComponent,
  TextMessageBoxComponent,
  TypingLoaderComponent
} from "../../presentation/components";


@Component( {
  selector: 'app-chat-template',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ChatMessageComponent,
    MyMessageComponent,
    TypingLoaderComponent,
    TextMessageBoxComponent,
    ChatMessageComponent,
    TypingLoaderComponent,
    TextMessageBoxComponent,
    MyMessageComponent,
  ],
  templateUrl: './chatTemplate.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
} )
export class ChatTemplateComponent {


  public messages = signal<Message[]>([]);
  public isLoading = signal(false);
  public openAiService = inject( OpenAiService );



  handleMessage( prompt: string ) {

    console.log({ prompt });

  }

  // handleMessageWithFile( { prompt, file }: TextMessageEvent ) {

  //   console.log({ prompt, file });

  // }

  // handleMessageWithSelect( event: TextMessageBoxEvent ) {
  //   console.log(event);
  // }
}
