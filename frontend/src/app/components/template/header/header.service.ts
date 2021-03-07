import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HeaderData } from '../footer/header.data.model';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private_headerData = new BehaviorSubject<HeaderData>({
    title: 'Inicio',
    icon: 'home',
    routeUrl: ''
  })

  constructor() { }

  get headerData(): HeaderData {
    return this.private_headerData.value
  }

  set headerData(headerData: HeaderData){
    this.private_headerData.next(headerData)
  }
}
