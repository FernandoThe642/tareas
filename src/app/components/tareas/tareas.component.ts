import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TareaService } from '../../services/tarea.service';
import { DetalleTareaComponent } from '../detalle-tarea/detalle-tarea.component';

@Component({
  selector: 'app-tareas',
  standalone: true,
  imports: [FormsModule, CommonModule, DetalleTareaComponent],
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss']
})
export class TareasComponent implements OnInit {

  nombreTarea: string = '';
  descripcionTarea: string = '';
  tareas: any[] = [];
  idTareaSeleccionada: number | null = null;

  constructor(private tareasService: TareaService) {}

  ngOnInit(): void {
    this.cargarTareas();
  }

  cargarTareas() {
    this.tareasService.obtenerTareas().subscribe(tareas => {
      this.tareas = tareas;
    });
  }

  agregarTarea() {
    if (this.validarFormulario()) {
      const tarea = {
        nombreTarea: this.nombreTarea,
        descripcionTarea: this.descripcionTarea,
      };
      this.tareasService.guardarTarea(tarea).then(() => {
        this.limpiarFormulario();
      });
    }
  }

  eliminarTarea(id: string) {
    this.tareasService.eliminarTarea(id);
  }

  toggleDetalles(id: number) {
    this.idTareaSeleccionada = this.idTareaSeleccionada === id ? null : id;
  }

  validarFormulario(): boolean {
    return this.nombreTarea !== '' && this.descripcionTarea !== '';
  }

  limpiarFormulario() {
    this.nombreTarea = '';
    this.descripcionTarea = '';
  }
}
