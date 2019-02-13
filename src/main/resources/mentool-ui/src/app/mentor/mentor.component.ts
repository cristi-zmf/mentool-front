import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {MentorService} from "./mentor.service";
import {HttpResponse} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {LoginService} from "../login/login.service";
import {MentorForm} from "./mentor-form";

const urlPattern = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';

@Component({
  selector: 'app-mentor',
  templateUrl: './mentor.component.html',
  styleUrls: ['./mentor.component.css']
})
export class MentorComponent implements OnInit {
  private mentorForm = new MentorForm();
  private mode: string;
  private mentorAddress: string;
  constructor(
    private toastrService: ToastrService, private mentorService: MentorService,
    private route: ActivatedRoute, private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit() {
    console.log("intram aici");
    this.route.params.subscribe(
      routeParams => {
        this.mode = routeParams['mode'];
        this.mentorAddress = routeParams['id'];
      }
    );
    this.handleFormDataAccordingToComponentMode();
  }

  private handleFormDataAccordingToComponentMode() {
    if (this.mode === 'view' || this.mode === 'edit') {
      console.log("intram aici");
      this.mentorService.getMentor(this.mentorAddress).subscribe(
        mentorData => {
          this.setFormWithMentorData(mentorData);
        }
      )
    } if (this.mode ==='view') {
      this.mentorForm.disable();
    }
  }

  private setFormWithMentorData(mentorData: any) {
    this.mentorForm.setFormFromDto(mentorData);
  }

  onSubmit() {
    console.log(this.mentorForm.value);
    this.mentorService.registerMentor(this.mentorForm.value).subscribe(
      (response: HttpResponse<any>) => {
        this.toastrService.success(response.body, "Registration successful");
        console.log(response);
        this.loginService.login(<string> this.mentorForm.get('username').value, <string> this.mentorForm.get('password').value);
      }
    );
  }

  shouldShowError(form: AbstractControl): boolean {
    return form.invalid && (form.dirty || form.touched);
  }

  saveModifications() {

  }

  enterEditMode() {
    console.log("navigheaza!");
    this.router.navigate([`mentor/edit/${this.mentorForm.get('username').value}`]);
  }
}
