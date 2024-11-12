import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, deleteDoc, doc, getDocs, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  constructor(private firestore: Firestore) {}

  // Guardar una nueva tarea en Firestore
  guardarTarea(tarea: any) {
    const tareasCollection = collection(this.firestore, 'tareas');
    return addDoc(tareasCollection, tarea);
  }

  // Eliminar una tarea por su ID en Firestore
  eliminarTarea(id: string) {
    const tareaDoc = doc(this.firestore, `tareas/${id}`);
    return deleteDoc(tareaDoc);
  }

  // Obtener todas las tareas desde Firestore
  obtenerTareas(): Observable<any[]> {
    const tareasCollection = collection(this.firestore, 'tareas');
    return collectionData(tareasCollection, { idField: 'id' }) as Observable<any[]>;
  }
}
