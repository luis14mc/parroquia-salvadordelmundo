export type CatequesisProgramaSlug = "adultos" | "primera-comunion" | "confirmacion";

export interface CatequesisPrograma {
  slug: CatequesisProgramaSlug;
  nombre: string;
  subtitulo: string;
  descripcion: string;
  imagen: string;
  requisitos: string[];
  edadMinima: number;
  colorClase: string;
}

export const catequesisProgramas: CatequesisPrograma[] = [
  {
    slug: "adultos",
    nombre: "Catequesis Iniciación Cristiana para Adultos",
    subtitulo: "Iniciación cristiana para mayores de 18 años",
    descripcion:
      "Proceso de formación para personas mayores de 18 años que no han recibido los sacramentos de iniciación cristiana y desean prepararse para recibirlos en la Vigilia Pascual 2027.",
    imagen: "/img/institucionales/bautismo.webp",
    requisitos: [
      "Ser mayor de 18 años.",
      "Inscribirse mediante este formulario.",
      "Presentar partida de nacimiento.",
      "Presentar copia de identidad y constancia de Confirmación del padrino o madrina.",
      "Prepararse con diligencia y participar en los encuentros formativos.",
    ],
    edadMinima: 18,
    colorClase: "bg-primary",
  },
  {
    slug: "primera-comunion",
    nombre: "Catequesis de Primera Comunión",
    subtitulo: "Formación para niños y niñas desde los 9 años",
    descripcion:
      "Proceso de preparación catequética para niños y niñas que desean recibir por primera vez el sacramento de la Eucaristía.",
    imagen: "/img/institucionales/primera-comunion.webp",
    requisitos: [
      "Tener 9 años o más.",
      "Presentar partida de nacimiento.",
      "Presentar fe de bautismo, si cuenta con ella.",
      "Si no ha recibido el Bautismo, indicarlo en el formulario.",
    ],
    edadMinima: 9,
    colorClase: "bg-secondary",
  },
  {
    slug: "confirmacion",
    nombre: "Catequesis de Confirmación",
    subtitulo: "Formación para jóvenes mayores de 15 años",
    descripcion:
      "Proceso de formación para jóvenes que desean fortalecer su vida de fe y prepararse para recibir el sacramento de la Confirmación.",
    imagen: "/img/institucionales/confirmacion.webp",
    requisitos: [
      "Tener 15 años o más.",
      "Presentar partida de nacimiento.",
      "Presentar fe de bautismo, si cuenta con ella.",
      "Presentar constancia de Primera Comunión, si cuenta con ella.",
      "Si no ha recibido Bautismo o Primera Comunión, indicarlo en el formulario.",
    ],
    edadMinima: 15,
    colorClase: "bg-tertiary",
  },
];

export function getCatequesisPrograma(slug?: string): CatequesisPrograma | undefined {
  return catequesisProgramas.find((programa) => programa.slug === slug);
}
