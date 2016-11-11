import { CheckinComponent } from "./pages/checkin/checkin.component";
import { GuestFormComponent } from "./pages/guest-form/guest-form.component";

export const routes = [
  { path: "", component: CheckinComponent },
  { path: "guest", component: GuestFormComponent }
];

export const navigatableComponents = [
  CheckinComponent,
  GuestFormComponent
];
