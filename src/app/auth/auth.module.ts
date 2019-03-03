import { AuthRoutingModule } from './auth-routing-module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
    declarations: [
        SigninComponent, SignupComponent,
    ],
    imports: [
        FormsModule , AuthRoutingModule,
    ],
    exports: [

    ],
})
export class AuthModule {}