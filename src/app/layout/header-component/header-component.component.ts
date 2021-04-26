import { HeaderService } from './header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.scss']
})
export class HeaderComponentComponent implements OnInit {

  queryStr = "";

  constructor(private service: HeaderService) { }

  ngOnInit(): void {
  }

  onSearchQueryChanged(): void{
    this.service.setQueryString(this.queryStr);
  }

}
