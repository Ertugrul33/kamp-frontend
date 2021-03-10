import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = "northwind";
  user: string = "Engin Demirog"
  
}

//Datayi yönettiğimiz yerdir.
//Veri tipini vermeye gerek yok.
//Noktalı virgül koymaya gerek yok.
//any, her veri türü olabilir demektir.
//Angular'da {} obje demektir.