import {Component, OnInit, ViewChild} from '@angular/core';
import {CurrentUserService} from "../login/current-user.service";
import {SkillService} from "../skill/skill.service";
import {Skill} from "../skill/skill";
import {MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {TrainingSearchResult} from "../training/training-search-result";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  username: string;
  skills: Array<Skill>;
  dataSource: MatTableDataSource<Skill>;
  displayedColumns: string[] = ['skillName'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private currentUserService: CurrentUserService, private skillsService: SkillService) {
  }

  ngOnInit() {
    this.username = this.currentUserService.getCurrentUser().username;
    this.skillsService.getSkills().subscribe(data => {
      this.skills = data;
      this.dataSource = new MatTableDataSource(this.skills);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
