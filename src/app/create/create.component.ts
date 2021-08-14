import {Component, OnInit} from '@angular/core';
import {AutomobilService} from '../services/automobil.service';
import {AutomobilModel} from '../models/automobil.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  public marka: string;
  public model: string;
  public godiste: number;
  public gorivo: string;
  public slika: string;

  constructor(public automobilService: AutomobilService) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  async create() {
    await this.automobilService.create(this.marka, this.model, this.godiste, this.gorivo, this.slika);
  }

}
