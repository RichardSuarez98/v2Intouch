import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UrbanizacionService } from '../../urbanization/service/urbanizacion.service';

@Component({
  selector: 'app-crud-casa',
  templateUrl: './crud-casa.component.html',
  styleUrls: ['./crud-casa.component.css']
})
export class CrudCasaComponent implements OnInit {
  form: FormGroup;
 
  constructor(private cdr: ChangeDetectorRef,private fb: FormBuilder,
    private _urbanizacionService: UrbanizacionService) {
    this.form=this.fb.group({
      urbanization:['',Validators.required],
      contactNumber:['',Validators.required],
      contactEmail:['',Validators.required],
      contactName:['',Validators.required],
    //  active:[''],
      activeDesde:['',Validators.required],
      activeHasta:['',Validators.required],
      ruc:['',Validators.required],
      city:[''],
      country:['',Validators.required],
   //   Image:[''],
      
     })

     
  }





  ngOnInit(): void {}

  saveSettings() {
    /*this.isLoading$.next(true);
    setTimeout(() => {
      this.isLoading$.next(false);
      this.cdr.detectChanges();
    }, 1500);*/
    const persona: any={
      urbanization: this.form.get('urbanization')?.value,
      contactNumber: this.form.get('contactNumber')?.value,
      contactEmail: this.form.get('contactEmail')?.value,
      contactName: this.form.get('contactName')?.value,
      activeDesde: this.form.get('activeDesde')?.value,
      activeHasta: this.form.get('activeHasta')?.value,
      ruc: this.form.get('ruc')?.value,
      city: this.form.get('city')?.value,
      country: this.form.get('country')?.value,

    }
    this._urbanizacionService.add(persona).subscribe(data => {
      console.log(data);
     // this.obtenerPersona();
      this.form.reset();
    },error => {
      console.log(error);
    })
  }

 
}

  