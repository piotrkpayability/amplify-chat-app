import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

@NgModule({
    imports: [
        MatFormFieldModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
    ],
    exports: [
        MatFormFieldModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
    ],
})
export class MaterialModule {}
