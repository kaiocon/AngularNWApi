import { Component, Inject } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { last } from '@angular/router/src/utils/collection';

@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  public employees: Employee[];

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get('http://localhost:5003/api/employee').subscribe(result => {
      this.employees = result as Employee[];
    }, error => console.error(error));
  }


  deleteEmployee(id) {
    this.http.delete('http://localhost:5003/api/employee/' + id).subscribe(s => { console.log(s); }, error => console.error(error));
    alert(id);

  }

  addEmployee(input1:string, input2:string) {
    
   
   var employee = {
     "employeeID": 0,
     "lastName": "",
      "firstName": "",
      "title": "Sales Representative",
      "titleOfCourtesy": "Ms.",
      "birthDate": "1948-12-08T00:00:00",
      "hireDate": "1992-05-01T00:00:00",
      "postalCode": "98122",
      "country": "USA",
      "homePhone": "(206) 555-9857",
      "extension": "5467",
      "notes": "Education includes a BA in psychology from Colorado State University in 1970.  She also completed \"The Art of the Cold Call.\"  Nancy is a member of Toastmasters International. fudd"
    };

    employee.lastName = input1;
    employee.firstName = input1;
    alert(employee.lastName);
    alert(input2);
    return this.http.post('http://localhost:5003/api/employee/', employee).subscribe(s => { console.log(s); }, error => console.error(error));
    
 
  }

  updateEmployee(id, notes) {
    var employee = this.http.get('http://localhost:5003/api/employee/' + id).subscribe(s => { console.log(s); }, error => console.error(error));
    //employee.notes = notes;
    this.http.put('http://localhost:5003/api/employee/' + id, employee).subscribe(s => { console.log(s); }, error => console.error(error));
    alert(id);

  }



}


interface Employee {
  EmployeeID: string;
  firstName: string;
  lastName: string;
  title: string;
  titleofCourtesy: string;
  birthDate: string;
  hireDate: string;
  postalCode: string;
  country: string;
  homePhone: string;
  extension: string;
  notes: string;
}
