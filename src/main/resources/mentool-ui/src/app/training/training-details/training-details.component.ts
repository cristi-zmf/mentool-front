import {Component, OnInit} from '@angular/core';
import {TrainingForm} from "./training-form";
import {ToastrService} from "ngx-toastr";
import {ActivatedRoute, Router} from "@angular/router";
import {LoginService} from "../../login/login.service";
import {TrainingDetailsService} from "./training-details.service";
import {AbstractControl} from "@angular/forms";
import {CurrentUserService} from "../../login/current-user.service";
import {Role} from "../../authorities/role.enum";

@Component({
  selector: 'app-training-details',
  templateUrl: './training-details.component.html',
  styleUrls: ['./training-details.component.css']
})
export class TrainingDetailsComponent implements OnInit {
  private trainingForm = new TrainingForm();
  private mode: string;
  private trainingIdFromUrl: string;
  private roleOfUser: string;

  constructor(
    private toastrService: ToastrService, private trainingService: TrainingDetailsService,
    private route: ActivatedRoute, private loginService: LoginService,
    private currentUserService: CurrentUserService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(
      routeParams => {
        this.trainingForm = new TrainingForm();
        this.mode = routeParams['mode'];
        this.trainingIdFromUrl = routeParams['id'];
        this.handleFormDataAccordingToComponentMode();
        this.roleOfUser = this.currentUserService.isAuthenticated() ?
          this.currentUserService.getCurrentUser().role : null;
      }
    );
  }

  private handleFormDataAccordingToComponentMode() {
    if (this.mode === 'view' || this.mode === 'edit') {
      this.trainingService.getTrainingDetails(this.trainingIdFromUrl).subscribe(
        trainingData => {
          this.trainingForm.setFormFromDto(trainingData);
          console.log(trainingData);
          console.log(this.trainingForm);
        }
      );
    } if (this.mode ==='view') {
      this.trainingForm.disable();
    }
  }

  shouldShowError(form: AbstractControl): boolean {
    return form.invalid && (form.dirty || form.touched);
  }

  hasUserRole(): boolean {
    return Role.USER === this.roleOfUser;
  }

  bookTraining() {

  }
}
