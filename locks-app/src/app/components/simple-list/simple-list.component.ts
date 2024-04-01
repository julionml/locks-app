import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/interfaces/pokemon.interface';

@Component({
  selector: 'app-simple-list',
  templateUrl: './simple-list.component.html',
  styleUrls: ['./simple-list.component.scss']
})
export class SimpleListComponent implements OnInit {
@Input() list!: Pokemon[];

ngOnInit() {
  console.log(this.list ?? []);
}

}
