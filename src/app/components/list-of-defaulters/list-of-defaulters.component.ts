import { Component } from '@angular/core';
import { Details } from 'src/app/details';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-list-of-defaulters',
  templateUrl: './list-of-defaulters.component.html',
  styleUrls: ['./list-of-defaulters.component.css']
})
export class ListOfDefaultersComponent {

  track: Details[] = [];
  month: string = "";
  year: string ="";
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
      // this.getTrack();
  }
  getTrackList(){
    console.log(this.month);
    this.dataService.getList(this.month,this.year).subscribe(data => {
      this.track = data;
    });
  }
//   updateStatus(details: Details) {
//     // Update the status for the corresponding 'details' object
//     console.log(details.paymentTrackId);
//     this.dataService.update(details.paymentTrackId).subscribe(data => {
//       console.log(data);
//   });
//   this.dataService.getList(this.month,this.year).subscribe(data => {
//     this.track = data;
//   });
// }
}