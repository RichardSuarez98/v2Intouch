import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CasaService } from '../casa.service';

@Component({
  selector: 'app-listar-casa',
  templateUrl: './listar-casa.component.html',
  styleUrls: ['./listar-casa.component.css']
})
export class ListarCasaComponent implements OnInit {

  displayedColumns: string[] = ['houseId', 'urbanizationId','userId','mz','villa','phoneNumber','notes','fullAddress','accion'];
datasource:any

@ViewChild(MatPaginator) paginator!: MatPaginator;

listFactura:any []=[];/*
var FechadeEmision;
const NumerodeFactura;
var Cajero;
var Cliente;
var Cedula;
const TotalFactura;*/



  constructor(private _casaService:CasaService,
              public dialog : MatDialog) { }

  ngOnInit(): void {
    this.get();
  }

  get(){
    this._casaService.get().subscribe(venta =>{
     console.log(venta);
      this.listFactura=venta;
      this.datasource=new MatTableDataSource(this.listFactura);
     // this.paginator=this.idFactura
      this.datasource.paginator=this.paginator;
      console.log(venta);

    })
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.datasource.filter = filterValue.trim().toLowerCase();
  }
  
  agregar(){
   
  }
  

  openDialog(/*fac:IFactura*/) {
 
   /* const dialogo=this.dialog.open(DialogVComponent,{
      width:'700px',
     data:fac
    })
    dialogo.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     // this.animal = result;
    });
  
     }*/
  
}

}
