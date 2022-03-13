import { NgModule } from "@angular/core";

import { ForgetFormRoutingModule } from "./forget-form-routing.module";
import { ForgetFormComponent } from "./forget-form.component";
import { SharedModule } from "src/app/share/shared.module";

@NgModule({
  declarations: [ForgetFormComponent],
  imports: [SharedModule, ForgetFormRoutingModule],
})
export class ForgetFormModule {}
