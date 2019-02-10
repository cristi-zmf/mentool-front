import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {TrainingSearchResult} from "./training-search-result";
import {TrainingService} from "./training.service";
import {TrainingSearchRequest} from "./training-search-request";
import {Skill} from "../skill/skill";

export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}

/** Constants used to fill up our data base. */
const COLORS: string[] = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
  'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
const NAMES: string[] = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];

/**
 * @title Data table with sorting, pagination, and filtering.
 */



@Component({
  selector: 'app-training',
  templateUrl: './training-search.component.html',
  styleUrls: ['./training-search.component.css']
})
export class TrainingSearchComponent implements OnInit {

  displayedColumns: string[] = ['firstName', 'lastName', 'skillName', 'yearsOfExperience'];
  dataSource: MatTableDataSource<TrainingSearchResult>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  private selectedSkillName: string = null;
  private selectedStartDate: string = null;
  private selectedEndDate: string = null;
  constructor(private trainingService: TrainingService) {
    trainingService.searchTrainings(
      new TrainingSearchRequest(this.selectedSkillName, this.selectedStartDate, this.selectedEndDate)).subscribe(
      (results: Array<TrainingSearchResult>) => {
        this.dataSource = new MatTableDataSource(results);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    });
  }

  ngOnInit() {
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  doSearch(skillSelected: Skill) {
    this.selectedSkillName = !skillSelected ? null : skillSelected.skillName;
    this.callSearchService()
  }

  performSearchWithStartDate(startDateFromPicker: D) {
    this.selectedStartDate = this.getUpdatedDateInISOFormat(startDateFromPicker);
    this.callSearchService();
  }


  performSearchWithEndDate(endDateFromPicker: D) {
    this.selectedEndDate = this.getUpdatedDateInISOFormat(endDateFromPicker);
    this.callSearchService();
  }

  private getUpdatedDateInISOFormat(date: D): string {
    console.log(new Date(date).toISOString());
    return !date ? null : new Date(date).toISOString().replace('Z', '');
  }

  private callSearchService() {
    this.trainingService.searchTrainings(
      new TrainingSearchRequest(this.selectedSkillName, this.selectedStartDate, this.selectedEndDate)
    ).subscribe(
      (results: Array<TrainingSearchResult>) => this.updateTable(results)
    )
  }
  private updateTable(results: Array<TrainingSearchResult>) {
    this.dataSource = new MatTableDataSource(results);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}

