import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  btnStyle: string = "btn btn-primary";//should show up as blue which is primary
  students: any[] = [];
  studentCollection: any[] = [
    {name: "Tonya", favNumber: 743747, favColor: "orange"},
    {name: "Kali", favNumber: 347743747, favColor: "blue"},
    {name: "Hung", favNumber: 45743747, favColor: "black"},
    {name: "Christian", favNumber: 99945743747, favColor: "blue"},
    {name: "Mark", favNumber: 1245743747, favColor: "black"},
    {name: "Jackson", favNumber: 77, favColor: "red"},
    {name: "Jonathan", favNumber: 11245743747, favColor: "teal"},
    {name: "Manami", favNumber: 6, favColor: "purple"},
    {name: "Tracy", favNumber: 6, favColor: "green"},
    {name: "Marc", favNumber: 17, favColor: "white"},
    {name: "Elena", favNumber: 7, favColor: "pink"}
  ];

  title = 'student-list';

  changeColor(): void {
    this.btnStyle = "btn btn-danger";//makes the button red
  }
  getStudents(): void {
    //copy(assign) studentCollection array into the students array
    //simulating calling our backend while rendering our data on the page
    //the backend will fill our page last - this is an asynchronous call
    this.students = this.studentCollection;
  }
}
