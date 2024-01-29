{{/*
App name adjusted to be a FQDN valid for Kubernetes.
Truncated at 63 chars to be compliant with Kubernetes DNS service.
*/}}
{{- define "maz-formlandings-front.name" -}}
{{- .Values.devops.app.name | trunc 63 | trimSuffix "-" }}
{{- end }}