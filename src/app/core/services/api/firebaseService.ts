import { user } from './../../../../../../../Week4/Day1/DI-Bootcamp-daily/src/app/types/index';
import { environment } from 'src/environments/environment';
import { Injectable } from "@angular/core";
import { initializeApp } from "firebase/app";
import { Firestore, doc, setDoc,getFirestore, query, collection, where, QuerySnapshot, getDocs } from "firebase/firestore";
import { User } from '../../interfaces/user';

const app = initializeApp(environment.firebaseConfig);
const db = getFirestore(app);

@Injectable({
  providedIn : 'root'
})
export class FirebaseService {
  collection  = "users";

  constructor() {

  }

  async addUser(user : User) {
    return await setDoc(doc(db,this.collection,user.id),{
      ...user ,
    } );
  }

  async connectUser(loginPayload : {email :string , password :string}) {
    const request  = query(collection(db, this.collection),where("email", "==", loginPayload.email));
    const querySnapshot = await getDocs(request);
    return querySnapshot?.docs[0]?.data();
  }

  async listUser() {
    let users  : User[] = [];
    const request = query(collection(db, this.collection));
    const QuerySnapshot = await getDocs(request);
     QuerySnapshot.docs.forEach((doc)=>{
       const data = doc.data();
        users.push({
           username : data["username"],
           password : data["password"],
           email    : data["email"]
        })
     });
    return users;
  }
}
