import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

// Interfaz para el Material
export interface Material {
  id?: number;
  nombre: string;
  clasificacion: string;
  cantidad: number;
  fecha_creacion?: string;
  fecha_actualizacion?: string;
}

// Interfaz para la respuesta de la API
export interface ApiResponse {
  success: boolean;
  data?: Material | Material[];
  message?: string;
  error?: string;
}

@Injectable({
  providedIn: 'root'
})
export class InventarioService {
  private apiUrl = `${environment.apiUrl}/materiales`;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  // Obtener todos los materiales
  getAllMateriales(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.apiUrl);
  }

  // Obtener material por ID
  getMaterialById(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.apiUrl}/${id}`);
  }

  // Crear nuevo material (ALTA)
  createMaterial(material: Material): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.apiUrl, material, this.httpOptions);
  }

  // Actualizar material (MODIFICAR)
  updateMaterial(id: number, material: Material): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(`${this.apiUrl}/${id}`, material, this.httpOptions);
  }

  // Eliminar material (BAJA)
  deleteMaterial(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(`${this.apiUrl}/${id}`);
  }
}
