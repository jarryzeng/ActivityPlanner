import { Component } from '@angular/core';

@Component({
  selector: 'app-activity-list',
  standalone: true,
  imports: [],
  templateUrl: './activity-list.component.html',
  styleUrl: './activity-list.component.css'
})
export class ActivityListComponent {
  activity_list = [
    {time: "09:00 AM", organizer: "Welcome Speech", describet: "Introduction and welcome  essage from the host"},
    {time: "10:00 AM", organizer: "Workshop 1", describet: "Interactive workshop on team building"},
    {time: "11:30 AM", organizer: "Break", describet: "Refreshments and networking"},
    {time: "12:00 PM", organizer: "Keynote Speaker", describet: "Inspiring talk by our special guest"},
    {time: "01:30 PM", organizer: "Lunch", describet: "Buffet lunch served in the main hall"},
    {time: "03:00 PM", organizer: "Workshop 2", describet: "Hands-on session on project management"},
    {time: "04:30 PM", organizer: "Closing Remarks", describet: "Summary of the day's events and closing message"}
  ];

  get activity(){
    return this.activity_list;
  }
}
