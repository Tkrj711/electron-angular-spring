import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../service/http-client.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name'];
  dataSource ;

  constructor(private httpClientService: HttpClientService) { }

  ngOnInit(): void {
  }
  click(): void {

    this.httpClientService.getItems()
      .then(
        (response) => {
          this.dataSource = response;
          console.log(response);
        }
      )
      .catch(
        (error) => this.dataSource = error
      );
  }
}
