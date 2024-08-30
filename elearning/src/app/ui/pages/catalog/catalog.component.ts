import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { ProgressCardComponent } from "../../components/progresscard/progresscard.component";

@Component({
  selector: 'CatalogPage',
  standalone: true,
  imports: [HeaderComponent, ProgressCardComponent],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss'
})
export class CatalogPage {

}
