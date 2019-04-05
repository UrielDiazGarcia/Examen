import { Component } from '@angular/core';
//import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFirestore } from 'angularfire2/firestore';
import { HttpClient } from '@angular/common/http';

//@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  Repositorio1: string ="";
  Descripcion: string = "";

  dataSend: DatosX ={
    Repositorio1: "MySql",
    Descripcion: "Manejo de Base de datos"
  }

  constructor(
    //public navCtrl: NavController,
    //public navParams: NavParams,
    private fire: AngularFirestore,
    private http: HttpClient) {
      this.fire.collection<DatosX>("/Repositorios/")
          .valueChanges()
          .subscribe((data)=>{
            this.Repositorio1 = data[0].Repositorio1;
            this.Descripcion = data[0].Descripcion;
          });
        }
        save(){
          let idDoc =this.fire.createId();
          this.fire.doc("/Repositorios/" + idDoc)
          .set(this.dataSend);

        }
        consulta(){
          this.http.
          get("https://jsonplaceholder.typicode.com/users").subscribe((data)=>{
    console.log("Users: ", data);
  });
}

}

interface DatosX {
Repositorio1?: string;
Descripcion?: string;
}
