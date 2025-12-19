export const sacramentosData = {
  'bautismo': {
    nombre: 'Bautismo',
    color: 'blue',
    gradientFrom: 'from-blue-600',
    gradientTo: 'to-blue-800',
    descripcion: 'Primer sacramento de iniciación cristiana que nos hace hijos de Dios y miembros de la Iglesia',
    queEs: 'El Bautismo es el fundamento de toda la vida cristiana, el pórtico de la vida en el espíritu y la puerta que abre el acceso a los otros sacramentos. Por el Bautismo somos liberados del pecado y regenerados como hijos de Dios, llegamos a ser miembros de Cristo y somos incorporados a la Iglesia y hechos partícipes de su misión.',
    requisitos: [
      'Acta de nacimiento original del niño/a',
      'Identificación de los padres (original y copia)',
      'Certificado de matrimonio católico de los padres (si aplica)',
      'Constancia de los padrinos (deben ser católicos confirmados)',
      'Asistir a la plática pre-bautismal',
    ],
    horarios: [
      { dia: 'Sábados', hora: '3:00 PM' },
      { dia: 'Domingos', hora: '11:00 AM' },
    ]
  },
  'primera-comunion': {
    nombre: 'Primera Comunión',
    color: 'yellow',
    gradientFrom: 'from-accent',
    gradientTo: 'to-yellow-600',
    descripcion: 'Sacramento de la Eucaristía donde recibimos por primera vez el Cuerpo de Cristo',
    queEs: 'La Primera Comunión es el momento en que el niño recibe por primera vez el sacramento de la Eucaristía. Es un momento muy especial en la vida de los católicos, donde nos unimos íntimamente con Jesús al recibir su Cuerpo y Sangre.',
    requisitos: [
      'Certificado de Bautismo católico',
      'Tener mínimo 8 años de edad',
      'Haber cursado dos años de catequesis',
      'Asistencia regular a las clases de preparación',
      'Participación activa en las misas',
      'Acta de nacimiento (copia)',
    ],
    horarios: [
      { dia: 'Preparación', hora: 'Miércoles 4:00 PM' },
      { dia: 'Celebración', hora: 'Según calendario litúrgico' },
    ]
  },
  'confirmacion': {
    nombre: 'Confirmación',
    color: 'red',
    gradientFrom: 'from-red-600',
    gradientTo: 'to-red-800',
    descripcion: 'Sacramento que fortalece los dones del Espíritu Santo recibidos en el Bautismo',
    queEs: 'La Confirmación perfecciona la gracia bautismal; es el sacramento que da el Espíritu Santo para enraizarnos más profundamente en la filiación divina, incorporarnos más firmemente a Cristo, hacer más sólido nuestro vínculo con la Iglesia, asociarnos todavía más a su misión y ayudarnos a dar testimonio de la fe cristiana por la palabra acompañada de las obras.',
    requisitos: [
      'Tener mínimo 14 años',
      'Certificado de Bautismo y Primera Comunión',
      'Dos años de catequesis confirmacional',
      'Carta de intención escrita por el confirmando',
      'Participación activa en la vida parroquial',
      'Padrino/madrina confirmado(a)',
    ],
    horarios: [
      { dia: 'Preparación', hora: 'Sábados 4:00 PM' },
      { dia: 'Celebración', hora: 'Según visita episcopal' },
    ]
  },
  'matrimonio': {
    nombre: 'Matrimonio',
    color: 'pink',
    gradientFrom: 'from-pink-600',
    gradientTo: 'to-pink-800',
    descripcion: 'Sacramento que une a un hombre y una mujer en una alianza de amor fiel',
    queEs: 'El matrimonio es un sacramento por el cual un hombre y una mujer constituyen entre sí una alianza de toda la vida, ordenada por su misma índole natural al bien de los cónyuges y a la generación y educación de la prole.',
    requisitos: [
      'Certificados de Bautismo y Confirmación de ambos contrayentes',
      'Actas de nacimiento (originales)',
      'Identificaciones oficiales',
      'Curso prematrimonial completo (mínimo 3 meses)',
      'Constancia de padrinos católicos confirmados',
      'Certificado de soltería o documentos de matrimonio anterior (si aplica)',
    ],
    horarios: [
      { dia: 'Curso Prematrimonial', hora: 'Consultar en oficina' },
      { dia: 'Celebraciones', hora: 'Sábados según disponibilidad' },
    ]
  },
  'reconciliacion': {
    nombre: 'Reconciliación (Confesión)',
    color: 'purple',
    gradientFrom: 'from-purple-600',
    gradientTo: 'to-purple-800',
    descripcion: 'Sacramento del perdón donde recibimos la misericordia de Dios',
    queEs: 'El sacramento de la Penitencia o Reconciliación es el medio instituido por Cristo para perdonar los pecados cometidos después del Bautismo. A través de este sacramento, el penitente obtiene de la misericordia de Dios el perdón de las ofensas contra Él y se reconcilia con la Iglesia.',
    requisitos: [
      'Examen de conciencia previo',
      'Contrición sincera de los pecados',
      'Propósito de enmienda',
      'Confesión de los pecados al sacerdote',
      'Estar dispuesto a cumplir la penitencia',
    ],
    horarios: [
      { dia: 'Sábados', hora: '4:00 PM - 5:30 PM' },
      { dia: 'Domingos', hora: '9:00 AM - 9:45 AM' },
      { dia: 'También', hora: 'Con cita previa' },
    ]
  },
  'uncion-enfermos': {
    nombre: 'Unción de Enfermos',
    color: 'green',
    gradientFrom: 'from-green-600',
    gradientTo: 'to-green-800',
    descripcion: 'Sacramento de sanación espiritual y fortaleza para los enfermos',
    queEs: 'La Unción de los enfermos tiene por fin conferir una gracia especial al cristiano que experimenta las dificultades inherentes al estado de enfermedad grave o de vejez. El tiempo oportuno para recibirla es cuando el fiel comienza a estar en peligro de muerte por enfermedad o vejez.',
    requisitos: [
      'Estar bautizado católico',
      'Encontrarse en estado de enfermedad grave o vejez',
      'Estar consciente (preferentemente)',
      'Solicitud de familiares o del enfermo',
      'Informar condición del enfermo al sacerdote',
    ],
    horarios: [
      { dia: 'Servicio a domicilio', hora: 'Disponible 24/7' },
      { dia: 'Hospitales', hora: 'Coordinar con la parroquia' },
      { dia: 'Emergencias', hora: 'Llamar al +504 2222-3333' },
    ]
  },
}
