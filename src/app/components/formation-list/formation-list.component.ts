import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Formation } from 'src/app/shared/models/formation.model';

@Component({
  selector: 'app-formation-list',
  templateUrl: './formation-list.component.html',
  styleUrls: ['./formation-list.component.css']
})
export class FormationListComponent implements OnInit {
  dataSource: MatTableDataSource<Formation>;
  displayedColumns: string[] = [
    'title',
    'nbHours',
    'dateStart',
    'dateEnd',
    'nbSubscribers',
    //'trainers',
    //'technologies',
    'action',
  ];
  constructor() { }

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
