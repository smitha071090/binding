import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'binding';
  defval= "Smitha";
  txtdis=false;
  col="blue";
  inputval = '';
  uname='';

  dataenter(eventdata:any)
  {
    console.log(eventdata.target.value);
    this.inputval = eventdata.target.value;
  }
  changecolor()
  {
    this.col="red";
  }


}


