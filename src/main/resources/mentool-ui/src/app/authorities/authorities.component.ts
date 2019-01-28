import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Authority} from "./authority";
import {Router} from "@angular/router";

@Component({
  selector: 'app-authorities',
  templateUrl: './authorities.component.html',
  styleUrls: ['./authorities.component.css']
})
export class AuthoritiesComponent implements OnInit {
  dataSource: Authority[] = [];
  displayedColumns: string[] = ['email', 'role'];
  dataIsAvailable: boolean = false;

  constructor(private http: HttpClient, private router: Router) {
    this.http = http;
    this.router = router;
  }

  ngOnInit() {
    this.http.get("/api/authorities").subscribe(
      (authorities: Authority[]) => {
        console.log(authorities);
        this.dataSource = authorities;
        //authorities.forEach(e => this.dataSource.push(e))
        console.log(this.dataSource);
        console.log(this.displayedColumns);
        this.dataIsAvailable = true;
      }
    );
  }

  navigateToUser() {
    this.router.navigate(['/user'])
  }
}
