import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {MentorService} from "./mentor.service";
import {HttpResponse} from "@angular/common/http";

const urlPattern = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';

@Component({
  selector: 'app-mentor',
  templateUrl: './mentor.component.html',
  styleUrls: ['./mentor.component.css']
})
export class MentorComponent implements OnInit {
  private mentorForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [Validators.required, Validators.pattern("[0-9]{10,14}")]),
    yearsOfExperience: new FormControl('', [Validators.required]),
    linkedinUrl: new FormControl('', [Validators.pattern(urlPattern)])
  });
  constructor(private toastrService: ToastrService, private mentorService: MentorService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.mentorForm.value);
    this.mentorService.registerMentor(this.mentorForm.value).subscribe(
      (response: HttpResponse<any>) => this.toastrService.success(response.body, "Registration successful")
    );
    this.toastrService.success(this.mentorForm.value, "Form status");
  }

  shouldShowError(form: AbstractControl): boolean {
    return form.invalid && (form.dirty || form.touched);
  }
}
