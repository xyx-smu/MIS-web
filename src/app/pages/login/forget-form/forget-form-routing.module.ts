import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ForgetFormComponent } from "./forget-form.component";

const routes: Routes = [
  {
    path: "",
    data: { key: "forget-form", shouldDetach: "no" },
    component: ForgetFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForgetFormRoutingModule {}
