import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TrainingSearchRequest} from "./training-search-request";
import {AppSettings} from "../app-settings";
const PERSONS_API = `${AppSettings.PERSONS_API_PREFIX}/mentors`;



@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  constructor(private httpClient: HttpClient) { }

  public searchTrainings(searchRequest: TrainingSearchRequest): Observable<any> {
    return this.httpClient.post(`${PERSONS_API}/search`, searchRequest);
  }

  getTrainingDetails(trainingId: string): Observable<any> {
    return this.httpClient.get(`${PERSONS_API}/trainings/${trainingId}`);
  }

  bookTraining(bookingCommand: any): Observable<any> {
    bookingCommand.traineeEmail = bookingCommand.traineeEmail.replace('@', '%40');
    return this.httpClient.post(`${AppSettings.PERSONS_API_PREFIX}/calendar/book`, bookingCommand);
  }
}
