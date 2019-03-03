import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {TrainingService} from "../../training/training.service";
import {CurrentUserService} from "../../login/current-user.service";
import {MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {AuthentifiedUser} from "../../login/authentified-user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-booked-trainings',
  templateUrl: './booked-trainings.component.html',
  styleUrls: ['./booked-trainings.component.css']
})
export class BookedTrainingsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @Output() rowClickedEmitter: EventEmitter<any> = new EventEmitter<any>();

  displayedColumns: string[] = ['skillName', 'mentorName', 'facilitiesDesc', 'fee', 'startDate', 'endDate'];
  dataSource: MatTableDataSource<any>;
  currentUser: AuthentifiedUser;
  constructor(
    private trainingService: TrainingService, private currentUserService: CurrentUserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.currentUser = this.currentUserService.getCurrentUser();
    this.trainingService.getTrainingsBookedByUser(this.currentUser.username).subscribe(
      data => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }



  goToTrainingDetails(row: any) {
    this.rowClickedEmitter.emit(true);
    this.router.navigate([`trainings/view/${row.trainingId}`]);
  }
}
