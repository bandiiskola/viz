import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hiba-bevitel',
  standalone: true,
  imports: [],
  templateUrl: './hiba-bevitel.component.html',
  styleUrl: './hiba-bevitel.component.css'
})
export class HibaBevitelComponent implements OnInit{
  constructor(private apiService: ApiServiceService, private route: ActivatedRoute){}
  id:string|null=null;
  adatok:any[] =[];
  selectek:any[]=[];
  currentid:any;

  ngOnInit(): void {
    const url=`https://berenandor.moriczcloud.hu/viz`;
      this.apiService.apiHivas(url).subscribe(
      response =>{
        console.log('Api válasz: ',response);
        this.selectek=response;
      },
      error =>{
        console.error('Hiba az API hívás során:')
      }
    );
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.currentid = params.get('ownerid');
    });
    if(this.id!=null)
    {
      const url=`https://berenandor.moriczcloud.hu/viz/lekerdez/${this.id}`;
      this.apiService.apiHivas(url).subscribe(
      response =>{
        console.log('Api válasz: ',response);
        this.adatok=Object.values(response);
        (document.getElementById('nev') as HTMLInputElement).value=this.adatok[1];
        (document.getElementById('cim') as HTMLInputElement).value=this.adatok[2];
        (document.getElementById('leiras') as HTMLInputElement).value=this.adatok[3];
      },
      error =>{
        console.error('Hiba az API hívás során:')
      }
    );
    }
  }

  callAPI(){
    let nev = (document.getElementById('nev') as HTMLInputElement).value;
    let cim = (document.getElementById('cim') as HTMLInputElement).value;
    let leiras = (document.getElementById('leiras') as HTMLSelectElement).value;
    if(this.id==null)
    {
      const url=`https://berenandor.moriczcloud.hu/viz/feltolt/${nev}/${cim}/${leiras}`;
    this.apiService.apiHivas(url).subscribe(
      response =>{
        console.log('Api válasz: ',response);
      },
      error =>{
        console.error('Hiba az API hívás során:')
      }
    )
    }
    else
    {
      const url=`https://berenandor.moriczcloud.hu/vehicles/update/${this.id}/${nev}/${cim}/${leiras}`;
    this.apiService.apiHivas(url).subscribe(
      response =>{
        console.log('Api válasz: ',response);
      },
      error =>{
        console.error('Hiba az API hívás során:')
      }
    )
    }
    
  }
}
