import {Injectable} from '@angular/core';
import axios from 'axios';
import {AutomobilModel} from '../models/automobil.model';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AutomobilService {
  constructor() {

  }

  // tslint:disable-next-line:typedef
  async getAll(): Promise<Observable<AutomobilModel[]>> {
    const url = 'https://it255-3599.glitch.me/automobili';
    try {
      const res = await axios.get(url, {});
      const data = res.data;
      return of(data);
      // console.log('Phones: ', data);
      // return data;
    } catch (e) {
      console.log('Error: ', e);
    }
  }

  // tslint:disable-next-line:typedef
  async getOneById(id): Promise<Observable<AutomobilModel[]>> {
    const url = 'https://it255-3599.glitch.me/automobili/';
    try {
      const res = await axios.get(url + id,
      );
      const data = [res.data];
      console.log('Automobili: ', data);
      return of(data);
    } catch (e) {
      console.log('Error: ', e);
    }
  }

  // tslint:disable-next-line:typedef
  async create(marka, model, godiste, gorivo, slika) {
    const url = 'https://it255-3599.glitch.me/automobili';
    try {
      const res = await axios.post(url, {
        marka, model, godiste, gorivo, slika
      });
      const data = res.data;
      console.log('Added: ', data);
      return data;
    } catch (e) {
      console.log('Error: ', e);
    }
  }

  // tslint:disable-next-line:typedef
  async update(marka, model, godiste, gorivo, slika, id) {
    const url = 'https://it255-3599.glitch.me/automobili/' + id;
    try {
      const res = await axios.put(url, {
        marka, model, godiste, gorivo, slika
      });
      const data = res.data;
      console.log('Updated: ', data);
      return data;
    } catch (e) {
      console.log('Error: ', e);
    }
  }

  // tslint:disable-next-line:typedef
  async delete(id) {
    const url = 'https://it255-3599.glitch.me/automobili/' + id;
    try {
      const res = await axios.delete(url, {data: {id}});
      const data = res.data;
      console.log('Automobili: ', data);
      return data;
    } catch (e) {
      console.log('Error: ', e);
    }
  }
}

