import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [LoginComponent],
    imports: [FormsModule, ReactiveFormsModule, MaterialModule],
    exports: [LoginComponent],
})
export class LoginModule {}
