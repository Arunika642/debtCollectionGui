import { Component,OnInit } from '@angular/core';
import { Details } from 'src/app/details';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-pull-list',
  templateUrl: './pull-list.component.html',
  styleUrls: ['./pull-list.component.css']
})
export class PullListComponent implements OnInit{

  track: Details[] = [];
  month: string = "";
  year: string ="";
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
      // this.getTrack();
  }
  getTrack(){
    console.log(this.month);
    this.dataService.getList(this.month,this.year).subscribe(data => {
      this.track = data;
    });
  }
  updateStatus(details: Details) {
    // Update the status for the corresponding 'details' object
    console.log(details.paymentTrackId);
    this.dataService.update(details.paymentTrackId).subscribe(data => {
      console.log(data);
  });
  this.dataService.getList(this.month,this.year).subscribe(data => {
    this.track = data;
  });
}
}


