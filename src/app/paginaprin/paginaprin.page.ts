import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paginaprin',
  templateUrl: './paginaprin.page.html',
  styleUrls: ['./paginaprin.page.scss'],
})
export class PaginaprinPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  godenuevo(){
    this.router.navigate(['/pagina2']);
  }
}
