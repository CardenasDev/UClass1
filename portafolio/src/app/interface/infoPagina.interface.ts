export interface InfoPaginainterface {   
  nombre?: string;
  titulo?: string;
  descripcion?: string;
  company?: string;
  habilidades?: string[];
  contacto?: {
    email?: string;
  };
  redesSociales?: {
    linkedin?: string;
    github?: string;
  };
  equipoTrabajo?: {
    nombre?: string;
    rol?: string;
  }[];
}