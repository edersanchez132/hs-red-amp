export interface RediMensajeError {
    titulo: string;
    codigo: string;
    mensaje: string;
};

export const HostRediError = {
    ERRORSERVIDOR: {
        titulo: 'ERROR SERVIDOR',
        codigo: 'MF-IMFR500',
        mensaje: 'Error en el servidor.'
    },
    NOENCONTRADO: {
        titulo: 'NO ENCONTRADO',
        codigo: 'MF-IMFR404',
        mensaje: 'No se encontró el recurso solicitado.'
    },
    DESCONOCIDO: {
        titulo: 'ERROR DESCONOCIDO',
        codigo: 'MF-IMFR000',
        mensaje: 'Verifique la url del MF, imposible cargar MF.'
    },
    MODULOEXPUESTO: {
        titulo: 'MÓDULO EXPUESTO',
        codigo: 'MF-IMFR001',
        mensaje: 'El nombre del módulo expuesto no existe.'
    },
    COMPONENTEEXPUESTO: {
        titulo: 'COMPONENTE EXPUESTO',
        codigo: 'MF-IMFR002',
        mensaje: 'El nombre del componente expuesto no existe.'
    },
    MODULODESCONOCIDO: {
        titulo: 'MÓDULO DESCONOCIDO',
        codigo: 'MF-IMFR003',
        mensaje: 'El módulo especificado es incorrecto.'
    },
    COMPONENTEDESCONOCIDO: {
        titulo: 'COMPONENTE DESCONOCIDO',
        codigo: 'MF-IMFR004',
        mensaje: 'El componente especificado es incorrecto.'
    }
};