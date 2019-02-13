import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AppSettings} from "../app-settings";

@Injectable({
  providedIn: 'root'
})
export class MentorService {

  constructor(private httpClient: HttpClient) { }
  registerMentor(mentorCommand: any): Observable<any> {
    return this.httpClient.put(`${AppSettings.API_PREFIX}/mentors`, mentorCommand);
  }
}
