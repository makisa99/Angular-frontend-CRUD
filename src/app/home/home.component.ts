import { Component, OnInit } from '@angular/core';
import { AutomobilService } from '../services/automobil.service';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { AutomobilModel } from '../models/automobil.model';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public marka: string;
  public id: string;
  automobili: Observable<AutomobilModel[]>;
  public model: string;
  public godiste: string;
  public gorivo: string;
  public slika: string;


  constructor(private route: ActivatedRoute, private automobilService: AutomobilService, public authService: AuthService) { }

  async ngOnInit(): Promise<void> {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.automobili = await this.automobilService.getOneById(this.id);
    } else {
      this.automobili = await this.automobilService.getAll();
    }
    console.log(this.automobili);
    await this.getAutomobili();
  }

  // tslint:disable-next-line:typedef
  async getAutomobili() {
    this.automobili.pipe(take(1)).subscribe(automobil => {
      console.log('Pipe: ', automobil);
    });
  }
  // tslint:disable-next-line:typedef
  async delete(id) {
    await this.automobilService.delete(id);
  }
  // tslint:disable-next-line:typedef
  async getByMarka() {
    console.log('Marka: ', this.marka);
    this.automobili = this.automobili.pipe(
      // tslint:disable-next-line:no-shadowed-variable
      map(automobili => automobili.filter(automobili => automobili.marka === this.marka))
    );
  }
  // tslint:disable-next-line:typedef
  async edit(id) {
    await this.automobilService.update(this.marka, this.model, this.godiste, this.gorivo, this.slika, id);
  }

}
