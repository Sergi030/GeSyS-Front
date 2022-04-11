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
  Est: string;
  Descuento: string;
  Cupones: string; 
  Fecha_ini: string; 
  Fecha_fin: string; 
}

export interface EstacionRowProps {
  Est: string,
  Dir: string,
  KWH: number,
  MaxKWH: number,
  Ocupacion: number,
  MaxOcupacion: number,
  m2: number,
  enc: string,
}
export interface SoporteRowProps {
  Name: string;
  Problema: string;
  Date: string; 
}
export interface AveriaRowProps {
  Est: string;
  Dir: string;
  Date: string; 
  State: string; 
  Desc: string; 
}

export type Rol = "Boss" | "Administrador" | "Trabajador";

export interface TrabajadorRowProps {
  id: number;
  Name: string;
  Rol: Rol;
  Last_access: Date; 
  Foto: string;
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