import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TrainingSearchRequest} from "./training-search-request";
import {AppSettings} from "../app-settings";

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  constructor(private httpClient: HttpClient) { }

  public searchTrainings(searchRequest: TrainingSearchRequest): Observable<any> {
    return this.httpClient.post(`${AppSettings.PERSONS_API_PREFIX}/mentors/search`, searchRequest);
  }
}
