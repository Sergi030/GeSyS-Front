export interface PowerDataProps {
  maxPower: number;
  powerBeingUsed: number;
}

export interface StationDataProps {
  workingStations: number;
  damagedStations: number;
  deactivatedStations: number;
}

export interface PromoRowProps {
  id: number;
  estacion: string;
  descuento: number;
  usos
  usosMax: number; 
  fechaInicio: Date; 
  fechaFin: Date; 
}

export interface EstacionRowProps {
  id: number;
  nombre: string;
  direccion: string;
  KWH: number;
  maxKWH: number;
  ocupacion: number;
  maxOcupacion: number;
  superficie: number;
  encargado: string;
}

export interface SoporteRowProps {
  nombre: string;
  problema: string;
  fecha: string; 
}

export type EstadoAveria = 'En proceso' | 'Resuelto';

export interface AveriaRowProps {
  id: number;
  estacion: string;
  fecha: Date;
  estado: EstadoAveria;
  descripcion: string;
}

export type RolWorker = 'Boss' | 'Administrador' | 'Trabajador';

export interface TrabajadorRowProps {
  id: number;
  nombre: string;
  rol: RolWorker;
  ultimoAcceso: Date; 
  foto: string;
}

export interface NavbarItemProps {
  label: string;
  href: string;
}

export interface IncidenciaElement {
  planta: string;
  plaza: string;
  texto: string;
}

export interface PerfilData {
  nombre: string;
  apellido: string;
  telefono: string;
  email: string;
  dni: string;
  cargo: string;
  foto: string;
}

export interface ErrorAPI {
  message: string;
}