# Tech People DevOps Chart

Este repositorio contiene un [Helm Chart](https://helm.sh) que sirve como base de todos los despliegues automáticos con CI/CD a la infraestructura del equipo en K8s.

## Utilización

1. Añadir el sub-módulo:

   ```bash
   # git submodule add --name [module-name] -- [repository] [path]
   git submodule add --name devops-chart https://ab-inbev@dev.azure.com/ab-inbev-maz/MAZ_People_Squad/_git/devops-chart ci/charts/devops
   ```

1. Editar `.gitmodules` cambiando la `url` a un path relativo y reemplazar los TABs con 2 espacios (parece generar conflicto con Azure DevOps).

   ```ini
   [submodule "devops-chart"]
     path = ci/charts/devops
     url = ../devops-chart
   ```

1. Iniciar/actualizar el sub-módulo:

   ```bash
   git submodule update --init
   ```

1. Crear el Helm chart del despliegue para la aplicación en la carpeta `ci` utilizando como sub-chart este repo. Todos los valores del sub-chart existen bajo la llave `devops:` en el archivo `values.yaml`.

1. Para hacer pruebas se puede correr (con Helm instalado) desde el directorio `ci`:

   ```bash
   # Generar templates
   helm template --debug .
   # Simular instalación (dry-run). Es necesario tener conexión al cluster de K8s.
   helm install --dry-run --set devops.app.name=app-name --set devops.app.env=prod  app-name .
   ```

## General

| Nombre          | Descripción                                                                      | Requerido | Valor por defecto                                                  |
| --------------- | -------------------------------------------------------------------------------- | --------- | ------------------------------------------------------------------ |
| `app.env`       | Ambiente a desplegar. Generado automáticamente por el branch.                    | X         | `develop` -> `dev` <br> `stage` -> `stage` <br> `master` -> `prod` |
| `app.name`      | Nombre de la aplicación utilizado en el despliegue. Ej. `beer-ambassador-front`. | X         |                                                                    |
| `app.component` | `label` para filtrar por componente. Ej. `back`, `front`, `api`.                 |           |                                                                    |
| `app.partOf`    | `label` para filtrar por aplicación (global). Ej. `beer-ambassador`.             |           |                                                                    |
| `app.team`      | `label` para anotar el equipo. Ej. `la-tribu-ex`.                                |           |                                                                    |
| `app.version`   | `label` para anotar la versión [SemVer](https://semver.org). Ej. `1.2.1`.        |           |                                                                    |

&nbsp;

## Imagen y Registro

| Nombre             | Descripción                                                                                    | Requerido | Valor por defecto         |
| ------------------ | ---------------------------------------------------------------------------------------------- | --------- | ------------------------- |
| `image.registry`   | Registro de contenedores a utilizar. El de la infra actual por defecto                         |           | `crtechpeople.azurecr.io` |
| `image.pullPolicy` | Ver [documentación](https://kubernetes.io/docs/concepts/containers/images/#image-pull-policy). |           | `IfNotPresent`            |
| `image.tag`        | Tag de la imagen a utilizar. Generado por el pipeline (BuildID o SemVer)                       | X         | Auto -> `$(BuildID)`      |

&nbsp;

## Ingress

| Nombre                                       | Descripción                                                                                                | Requerido         | Valor por defecto     |
| -------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ----------------- | --------------------- |
| `ingress.enabled`                            | Habilita el ingress para el servicio/aplicación.                                                           |                   | `false`               |
| `ingress.annotations`                        | Ver [documentación](https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/annotations) |                   | Ver `_helpers.tpl:60` |
| `ingress.domains.$(app.env)`                 | Arreglo de dominios. Se puede tener múltiples dominios para una misma aplicación.                          | `enabled`         |                       |
| `ingress.certificates.$(app.env).automatic`  | Habilita los certificados automáticos configurados con [cert-manager](https://cert-manager.io/)            | `enabled`         |                       |
| `ingress.certificates.$(app.env).secretName` | Secreto existente que contiene el certificado TLS para el ingress.                                         | `automatic=false` |                       |

### Notas Ingress

- `cert-manager`
  - Se añade una anotación al ingress. Ver [documentación](https://cert-manager.io/docs/usage/ingress/) y ver `"devops.ingressAnnotations"` en `_helpers.tpl`.
  - El secreto creado automáticamente tiene el nombre `$(app.name)-tls`. Ej. `beer-ambassador-front-tls`.

### Ejemplos Ingress

```yaml
# Certificados
certificates:
  prod:
    # Con cert-manager
    automatic: true
  stage:
    automatic: true
  dev:
    automatic: false
    secretName: embajadores-ssl
# Dominios
domains:
  prod:
    - planetabeerway.somosmaz.com
    - embajadoresmodelo.somosmaz.com
    - beerpassionperu.somosmaz.com
  stage:
    - planetabeerway-stage.somosmaz.com
    - embajadoresmodelo-stage.somosmaz.com
    - beerpassionperu-stage.somosmaz.com
  dev:
    - planetabeerway-dev.somosmaz.com
    - embajadoresmodelo-dev.somosmaz.com
    - beerpassionperu-dev.somosmaz.com
```

&nbsp;

## Servicio

| Nombre               | Descripción                                                                                              | Requerido | Valor por defecto |
| -------------------- | -------------------------------------------------------------------------------------------------------- | --------- | ----------------- |
| `service.enabled`    | Habilita el servicio para ser consumido por otras aplicaciones.                                          |           | `true`            |
| `service.type`       | Ver [documentación](https://kubernetes.io/docs/concepts/services-networking/service/#defining-a-service) |           | `ClusterIP`       |
| `service.port`       | Puerto externo que el servicio expone.                                                                   |           | `80` (HTTP)       |
| `service.targetPort` | Puerto que expone el contenedor de la aplicación.                                                        |           | `null`            |

### Notas Servicio

- Es posible tener múltiples puertos expuestos en un servicio, sin embargo este Helm Chart no tiene esto en cuenta.

&nbsp;

## Deployment Comunes

| Nombre                                 | Descripción                                                                                         | Requerido                        | Valor por defecto |
| -------------------------------------- | --------------------------------------------------------------------------------------------------- | -------------------------------- | ----------------- |
| `envFromSecret`                        | Configura el env con un secreto de K8s. Debe ser nombrado `$(app.name)-env` en el mismo namespace.  |                                  | `false`           |
| `encryptedMySQLConnection`             | Monta CA cert en el contenedor y pone el path en env var `MYSQL_ATTR_SSL_CA`.                       |                                  | `false`           |
| `encryptedMongoDBConnection`           | Monta CA cert para mongodb y pone el path en en var `DB_CA`.                                        |                                  | `false`           |
| `postStartCommand`                     | Correr un comando una vez arranca el contenedor. (migraciones, init config, ...)                    |                                  | `[]`              |
| `preStopCommand`                       | Correr un comando antes de parar el contenedor. (Graceful shutdown)                                 |                                  | `[]`              |
| `probes.enabled`                       | Habilita los probes para que K8s verifique el servicio. Solo está configurable por HTTP.            |                                  | `false`           |
| `probes.liveness.periodSeconds`        | Cada cuanto se corre el llamado HTTP.                                                               | `enabled=true` y `liveness!={}`  | `60`              |
| `probes.liveness.initialDelaySeconds`  | Cuanto tiempo se espera a que la aplicación esté lista antes de empezar con el probe.               | `enabled=true` y `liveness!={}`  | `30`              |
| `probes.liveness.timeoutSeconds`       | Cuanto tiempo se espera a que la aplicación esté lista antes de empezar con el probe.               | `enabled=true` y `liveness!={}`  | `30`              |
| `probes.liveness.path`                 | Ruta donde el probe debe hacer el llamado HTTP.                                                     | `enabled=true` y `liveness!={}`  | `10`              |
| `probes.readiness.periodSeconds`       | Cada cuanto se corre el llamado HTTP.                                                               | `enabled=true` y `readiness!={}` | `60`              |
| `probes.readiness.initialDelaySeconds` | Cuanto tiempo se espera a que la aplicación esté lista antes de empezar con el probe.               | `enabled=true` y `readiness!={}` | `30`              |
| `probes.readiness.timeoutSeconds`      | Cuanto tiempo se espera a que la aplicación esté lista antes de empezar con el probe.               | `enabled=true` y `readiness!={}` | `30`              |
| `probes.readiness.path`                | Ruta donde el probe debe hacer el llamado HTTP.                                                     | `enabled=true` y `readiness!={}` | `10`              |
| `podSecurityContext.runAsUser`         | Utilizado para definir el id del usuario que corre en el contenedor.                                |                                  | `33` (`www-data`) |
| `podSecurityContext.runAsGroup`        | Utilizado para definir el group id del usuario que corre en el contenedor.                          |                                  | `33` (`www-data`) |
| `resources.requests.cpu`               | CPU solicitada por el contenedor.                                                                   | X                                |                   |
| `resources.requests.memory`            | Memoria RAM solicitada por el contenedor.                                                           | X                                |                   |
| `resources.limits.cpu`                 | Límite de CPU para el contenedor. K8s mata el contenedor si se sobrepasa por un tiempo.             | X                                |                   |
| `resources.limits.memory`              | Límite de Memoria RAM para el contenedor. K8s mata el contenedor si se sobrepasa por un tiempo.     | X                                |                   |
| `volumePaths.mountPath`                | Ruta en la que se va a montar el directorio.                                                        |                                  |                   |
| `volumePaths.dirPath`                  | Directorio a montar. Puede ir vació si la aplicación solo está montando un solo directorio.         |                                  |                   |
| `volumePaths.appPath`                  | Nombre de la aplicación para ser utilizado en la ruta. `beer-ambassador`                            |                                  |                   |
| `additionalVolumes`                    | Raw items de `pod.spec.volumes`. Utilizado normalmente para declarar configuraciones.               |                                  |                   |
| `additionalVolumesMounts`              | Raw items de `pod.spec.containers.volumeMounts`. Utilizado normalmente para montar configuraciones. |                                  |                   |

&nbsp;

## Deployment poco modificadas

| Nombre                         | Descripción                                                                                                      | Requerido | Valor por defecto         |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------- | --------- | ------------------------- |
| `replicaCount`                 | Número de pods deseados en el despliegue. Normalmente se deja en `1` y se configura el auto-escalado horizontal. |           | `1`                       |
| `strategy`                     | Ver [documentación](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#strategy)              |           | `type: RolloutUpdate`     |
| `containerName`                | Para configuración.                                                                                              |           | `server`                  |
| `podAnnotations`               | Para configuración. Valores por defecto de seguridad (AppArmor).                                                 |           | `_helpers.tpl:69`         |
| `securityContext`              | Para configuración. Valores por defecto de seguridad (`privileged: false` y `allowPrivilegeEscalation: false`).  |           |                           |
| `nodeSelector`                 | Selecciona Linux como nodo.                                                                                      |           | `kubernetes.io/os: linux` |
| `tolerations`                  | Ver [documentación](https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/)               |           |                           |
| `affinity`                     | Ver [documentación](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/)                    |           |                           |
| `automountServiceAccountToken` | Configuración de seguridad.                                                                                      |           | `false`                   |

&nbsp;
&nbsp;

## Horizontal Pod Autoscaler

| Nombre                                           | Descripción                                     | Requerido      | Valor por defecto |
| ------------------------------------------------ | ----------------------------------------------- | -------------- | ----------------- |
| `autoscaling.enabled`                            | Habilita el auto-escalado horizontal en `prod`. |                | `false`           |
| `autoscaling.minReplicas`                        | Mínimo de pods para el despliegue.              | `enabled=true` | `2`               |
| `autoscaling.maxReplicas`                        | Máximo de pods para el despliegue.              | `enabled=true` | `5`               |
| `autoscaling.targetCPUUtilizationPercentage`     | Target de utilización de CPU en porcentaje.     | `enabled=true` | `85`              |
| `autoscaling.targetMemoryUUtilizationPercentage` | Target de utilización de RAM en porcentaje.     | `enabled=true` | `85`              |

&nbsp;

## CronJob

| Nombre                              | Descripción                                                                                     | Requerido      | Valor por defecto |
| ----------------------------------- | ----------------------------------------------------------------------------------------------- | -------------- | ----------------- |
| `cronjob.prod`                      | Habilita el el CronJob en `prod`.                                                               |                | `false`           |
| `cronjob.stage`                     | Habilita el el CronJob en `stage`.                                                              |                | `false`           |
| `cronjob.dev`                       | Habilita el el CronJob en `dev`.                                                                |                | `false`           |
| `cronjob.schedule`                  | Configurado con cronjob.                                                                        | `enabled=true` |                   |
| `cronjob.command`                   | Comando a ejecutar por el CronJob. Ej. `php artisan schedule:run`                               |                |                   |
| `cronjob.concurrencyPolicy`         | Configura si es permitido correr CronJobs al mismo tiempo.                                      |                | `Forbid`          |
| `cronjob.resources.requests.cpu`    | CPU solicitada por el contenedor.                                                               | `enabled=true` |                   |
| `cronjob.resources.requests.memory` | Memoria RAM solicitada por el contenedor.                                                       | `enabled=true` |                   |
| `cronjob.resources.limits.cpu`      | Límite de CPU para el contenedor. K8s mata el contenedor si se sobrepasa por un tiempo.         | `enabled=true` |                   |
| `cronjob.resources.limits.memory`   | Límite de Memoria RAM para el contenedor. K8s mata el contenedor si se sobrepasa por un tiempo. | `enabled=true` |                   |

&nbsp;

## Worker

El worker es un deployment adicional que normalmente se utiliza en Laravel para diferir trabajo.

| Nombre                             | Descripción                                                                                     | Requerido      | Valor por defecto |
| ---------------------------------- | ----------------------------------------------------------------------------------------------- | -------------- | ----------------- |
| `worker.enabled`                   | Habilita el worker.                                                                             |                | `false`           |
| `worker.resources.requests.cpu`    | CPU solicitada por el contenedor.                                                               | `enabled=true` |                   |
| `worker.resources.requests.memory` | Memoria RAM solicitada por el contenedor.                                                       | `enabled=true` |                   |
| `worker.resources.limits.cpu`      | Límite de CPU para el contenedor. K8s mata el contenedor si se sobrepasa por un tiempo.         | `enabled=true` |                   |
| `worker.resources.limits.memory`   | Límite de Memoria RAM para el contenedor. K8s mata el contenedor si se sobrepasa por un tiempo. | `enabled=true` |                   |
| `worker.postStartCommand`          | Correr un comando una vez arranca el contenedor (migraciones, init config, etc...).             |                | `[]`              |
| `worker.preStopCommand`            | Correr un comando antes de parar el contenedor (Graceful shutdown).                             |                | `[]`              |

&nbsp;

## Cache

Cache es un despliegue de una instancia sencilla de Redis. Para se utilizada por Laravel con driver de cache.

| Nombre                            | Descripción                                                                                     | Requerido      | Valor por defecto |
| --------------------------------- | ----------------------------------------------------------------------------------------------- | -------------- | ----------------- |
| `cache.enabled`                   | Habilita el cache.                                                                              |                | `false`           |
| `cache.resources.requests.cpu`    | CPU solicitada por el contenedor.                                                               | `enabled=true` |                   |
| `cache.resources.requests.memory` | Memoria RAM solicitada por el contenedor.                                                       | `enabled=true` |                   |
| `cache.resources.limits.cpu`      | Límite de CPU para el contenedor. K8s mata el contenedor si se sobrepasa por un tiempo.         | `enabled=true` |                   |
| `cache.resources.limits.memory`   | Límite de Memoria RAM para el contenedor. K8s mata el contenedor si se sobrepasa por un tiempo. | `enabled=true` |                   |
