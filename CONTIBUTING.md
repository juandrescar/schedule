# Contributing

En este proyecto se sigue los siguientes estándares:

- Se sigue el formato de [SemVer](https://semver.org/spec/v2.0.0.html) v2.0.0 para el versionamiento de la aplicación

# Trabajamos con Gitlab

  Usamos gitlab para alojar el código, realizar un seguimiento de errores y nuevas funcionalidades, así como aceptar solicitudes de merge requets.

## Usamos Gitlab Flow

  Todos los cambios ocurren por solicitudes de ```Merge Request```
  
  Se trabaja con la rama remota ```master``` donde se integra los cambios que se desarrollan durante una iteración por medio de ```Merge Request```, es decir, se debe crear una rama específica para un cambio y solicitar la integración con esta rama.
  
  Al final de una iteración, se añade un tag al último commit.

## Reporta los problemas usando los issues de Gitlab
  
  Usamos Gitlab issues para rastrear bugFixes y features.

## Escriba los informes de errores con detalles, antecedentes y código de muestra

Para reportar un bugFix debe crear un nuevo issue, seleccionar la pantilla [bugFix](https://gitlab.com/Juancab/scheduler/blob/master/.gitlab/issue_templates/bug_fix.md) que contiene lo siguiente:

* Resumen/Descripción
* Pasos para reproducir el error
* Cómo se comporta actualemte
* Cómo debería comportarse
* Logs y/o screenshots relevantes del Bug

Por favor asegúrese de completar la plantilla. De esta manera facilita a miembros del equipo replicar la incidencia.

# Workflow o flujo de trabajo

Las solicitudes de fusión (merge requests) le permiten intercambiar los cambios realizados en el código fuente y colaborar con otras personas en el mismo proyecto.

Tenga en cuenta que tenemos un código de conducta, por favor, sígalo en todas sus interacciones con el proyecto.

- Instala la aplicación siguiendo las instrucciones del README.md del proyecto

- Escoge un issue del board `To Do` del repositorio.

- En local crear una nueva rama para desarrollar los cambios de la historia, basada en ```master``` que se encuentra en el repositorio remoto, ejecutando ```git fetch origin``` y luego ```git checkout -b nombre-rama origin/master```. La rama se nombra con la identificación de la historia a realizar (hu o fix y el número).

- Desarrolla los cambios y pruebas que lo soporten en una rama de git y haz commit. En el mensaje agrega la palabra Close seguido del número de issue creado para la historia. Ejemplo ```git commit -m "HU01 crear perfil de usuario. Close #1"```. De esta manera el commit se relaciona con el issue y se cerrará automaticamente cuando esté aprobado.

- Envia la rama con el commit a Gitlab con ```git push origin nombre-rama```.

- Abre un ```Merge Request``` para solicitar la integración de los cambios desarrollados.

Cada iteración se lista un conjunto de historias a desarrollar. Para integrar los cambios solo se realiza a través de merge request para realizar revisión de código antes de integrar. Todo desarrollador debe estar al tanto de cada integración.

# Subida de cambios sin tener listo el commit
En caso de querer compartir el código que se está desarrollando para plantear dudas o mostrar avances se puede: hacer commit del avance, subir la rama y crear el merge-request del issue como se explicó anteriormente pero agregando adicionalmente al inicio del título del ```Merge Request``` la palabra ```WIP``` para indicar que no se debe integrar la rama pues se encuentra aún en desarrollo.
