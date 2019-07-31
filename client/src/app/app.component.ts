import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get("http://localhost:3000/api/greatest-albums")
      .subscribe(albums => {
        console.log(albums);
      });
  }
}
