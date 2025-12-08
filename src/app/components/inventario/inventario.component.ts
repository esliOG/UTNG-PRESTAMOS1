import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InventarioService, Material } from '../../services/inventario.service';

@Component({
  selector: 'app-inventario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.scss']
})

export class InventarioComponent implements OnInit {
  materiales: Material[] = [];
  loading: boolean = false;
  error: string = '';
  showModal: boolean = false;
  isEditMode: boolean = false;
  
  // Modelo para el formulario
  materialForm: Material = {
    nombre: '',
    clasificacion: '',
    cantidad: 0
  };

  constructor(private inventarioService: InventarioService) {}

  ngOnInit(): void {
    this.loadMateriales();
  }

  // Obtener fecha actual
  getCurrentDate(): string {
    return new Date().toLocaleDateString('es-MX', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  // Cargar todos los materiales
  loadMateriales(): void {
    this.loading = true;
    this.error = '';
    
    this.inventarioService.getAllMateriales().subscribe({
      next: (response) => {
        if (response.success && Array.isArray(response.data)) {
          this.materiales = response.data;
        }
        this.loading = false;
      },
      error: (err) => {
        console.error('Error al cargar materiales:', err);
        this.error = 'Error al cargar los materiales. Verifica que el servidor esté corriendo.';
        this.loading = false;
      }
    });
  }

  // Abrir modal para crear
  openCreateModal(): void {
    this.isEditMode = false;
    this.materialForm = {
      nombre: '',
      clasificacion: '',
      cantidad: 0
    };
    this.showModal = true;
  }

  // Abrir modal para editar
  openEditModal(material: Material): void {
    this.isEditMode = true;
    this.materialForm = { ...material };
    this.showModal = true;
  }

  // Cerrar modal
  closeModal(): void {
    this.showModal = false;
    this.materialForm = {
      nombre: '',
      clasificacion: '',
      cantidad: 0
    };
  }

  // Guardar (crear o actualizar)
  saveMaterial(): void {
    if (!this.materialForm.nombre || !this.materialForm.clasificacion) {
      alert('Por favor completa todos los campos');
      return;
    }

    this.loading = true;

    if (this.isEditMode && this.materialForm.id) {
      // Actualizar
      this.inventarioService.updateMaterial(this.materialForm.id, this.materialForm).subscribe({
        next: (response) => {
          if (response.success) {
            alert('Material actualizado exitosamente');
            this.loadMateriales();
            this.closeModal();
          }
        },
        error: (err) => {
          console.error('Error al actualizar:', err);
          alert('Error al actualizar el material');
          this.loading = false;
        }
      });
    } else {
      // Crear
      this.inventarioService.createMaterial(this.materialForm).subscribe({
        next: (response) => {
          if (response.success) {
            alert('Material creado exitosamente');
            this.loadMateriales();
            this.closeModal();
          }
        },
        error: (err) => {
          console.error('Error al crear:', err);
          alert('Error al crear el material');
          this.loading = false;
        }
      });
    }
  }

  // Eliminar material
  deleteMaterial(id: number | undefined): void {
    if (!id) return;
    
    if (confirm('¿Estás seguro de eliminar este material?')) {
      this.loading = true;
      
      this.inventarioService.deleteMaterial(id).subscribe({
        next: (response) => {
          if (response.success) {
            alert('Material eliminado exitosamente');
            this.loadMateriales();
          }
        },
        error: (err) => {
          console.error('Error al eliminar:', err);
          alert('Error al eliminar el material');
          this.loading = false;
        }
      });
    }
  }
}