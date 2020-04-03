import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatRoomComponent } from './chat-room.component';
import { MaterialModule } from '../material.module';

@NgModule({
    declarations: [ChatRoomComponent],
    imports: [CommonModule, MaterialModule],
    exports: [ChatRoomComponent],
})
export class ChatRoomModule {}
