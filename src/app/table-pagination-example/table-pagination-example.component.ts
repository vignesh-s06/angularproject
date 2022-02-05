import { AnimationBuilder } from '@angular/animations';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { DataServiceService } from '../data-service.service';
import { ResponseData } from '../response-data';



@Component({
  selector: 'app-table-pagination-example',
  templateUrl: './table-pagination-example.component.html',
  styleUrls: ['./table-pagination-example.component.css']
})
export class TablePaginationExampleComponent implements AfterViewInit{

  displayedColumns: string[] = ['web_pages','name','domains','alpha_two_code','country'];
  
  dataSource: any;

  datas : any;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  constructor(private dataService: DataServiceService){
  }

  

  ngAfterViewInit() {

    this.dataService.getData().subscribe(res => {
      this.dataSource = new MatTableDataSource<ResponseData>(res);
      // this.dataSource = res;
      this.dataSource.paginator = this.paginator;
    });

    

    // this.dataSource.paginator = this.paginator;
  }
  getStates(){
      this.dataService.fetchstate().subscribe(data  => {
        console.log("responce recived ",data)
        for(let states in data){
          if(data[states]['state-province'] !== null)
          console.log(data[states]['state-province'])
        }
    })
      
  }

}

