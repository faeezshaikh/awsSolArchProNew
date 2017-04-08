import {NgModule} from "@angular/core";
import {IonicApp, IonicModule} from "ionic-angular";
import {MyApp} from "./app.component";
import {
  CognitoUtil,
  UserLoginService,
  UserParametersService,
  UserRegistrationService
} from "../providers/cognito.service";
import {AwsUtil} from "../providers/aws.service";
import {
  LoginPage,
  LogoutPage,
  RegisterPage,
  ConfirmRegistrationPage,
  ResendCodePage,
  ForgotPasswordStep1Page,
  ForgotPasswordStep2Page
} from "../pages/auth/auth";
import {ControlPanelPage} from "../pages/controlpanel/controlpanel";
import {Storage} from "@ionic/storage";
import {EventsService} from "../providers/events.service";

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    LogoutPage,
    RegisterPage,
    ConfirmRegistrationPage,
    ResendCodePage,
    ForgotPasswordStep1Page,
    ForgotPasswordStep2Page,
    ControlPanelPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    LogoutPage,
    RegisterPage,
    ConfirmRegistrationPage,
    ResendCodePage,
    ForgotPasswordStep1Page,
    ForgotPasswordStep2Page,
    ControlPanelPage
  ],
  providers: [CognitoUtil,
    AwsUtil,
    UserLoginService,
    UserParametersService,
    UserRegistrationService,
    Storage,
    EventsService]
})

export class AppModule {
}
