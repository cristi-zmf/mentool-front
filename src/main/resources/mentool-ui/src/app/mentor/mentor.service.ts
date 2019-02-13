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

  getMentor(mentorAddress: string): Observable<any> {
    const mentorAddressParsed = mentorAddress.replace('@', '%40');
    return this.httpClient.get(`${AppSettings.PERSONS_API_PREFIX}/mentors/${mentorAddressParsed}`);
  }
}
