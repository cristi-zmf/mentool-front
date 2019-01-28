import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Authority} from "./authority";

@Component({
  selector: 'app-authorities',
  templateUrl: './authorities.component.html',
  styleUrls: ['./authorities.component.css']
})
export class AuthoritiesComponent implements OnInit {
  dataSource: Authority[];
  displayedColumns: string[];

  constructor(private http: HttpClient) {
    this.http = http;
  }

  ngOnInit() {
    this.http.get("/api/authorities").subscribe(
      (authorities: Authority[]) => {
        authorities.forEach(e => this.dataSource.push(e))
        this.displayedColumns = ['email', 'role'];
      }
    );
  }

}
