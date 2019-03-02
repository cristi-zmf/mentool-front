import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AppSettings} from "../../app-settings";

const SECURITY_API = `${AppSettings.API_PREFIX}/mentors`;
const PERSONS_API = `${AppSettings.PERSONS_API_PREFIX}/mentors`;


@Injectable({
  providedIn: 'root'
})
export class TrainingDetailsService {

  constructor(private httpClient: HttpClient) { }
  getTrainingDetails(trainingId: string): Observable<any> {
    return this.httpClient.get(`${PERSONS_API}/trainings/${trainingId}`);
  }
}
