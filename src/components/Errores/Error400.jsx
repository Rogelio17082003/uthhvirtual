// src/components/ErrorChecker.js

import React, { useEffect } from 'react';

const ErrorChecker = () => {
  useEffect(() => {
    const checkUrlForErrors = () => {
      // Obtener la URL actual
      const currentUrl = window.location.href;

      // Verificar si la URL contiene "%%"
      if (currentUrl.includes('%%')) {
        // Manejar el caso de error 400 específicamente
        console.error('Error 400: La URL contiene caracteres especiales "%%".');
        // Puedes realizar otras acciones según tus necesidades
      }
    };

    // Llamar a la función de verificación al cargar la aplicación
    checkUrlForErrors();

    // Agregar un event listener para el cambio de la URL
    const handleUrlChange = () => {
      checkUrlForErrors();
    };

    // Suscribirse al evento popstate para manejar cambios en la barra de direcciones
    window.addEventListener('popstate', handleUrlChange);

    // Limpieza del event listener al desmontar el componente
    return () => {
      window.removeEventListener('popstate', handleUrlChange);
    };
  }, []);

  return null;
};

export default ErrorChecker;
