import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-mentor',
  templateUrl: './mentor.component.html',
  styleUrls: ['./mentor.component.css']
})
export class MentorComponent implements OnInit {
  private mentorForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(5), Validators.email]),
    password: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    phoneNumber: new FormControl(''),
    yearsOfExperience: new FormControl(''),
    linkedinUrl: new FormControl('')
  });
  constructor(private toastrService: ToastrService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.mentorForm.value);
    this.toastrService.success(this.mentorForm.value, "Form status");
  }
}
