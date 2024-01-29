{{/*
App name adjusted to be a FQDN valid for Kubernetes.
Truncated at 63 chars to be compliant with Kubernetes DNS service.
*/}}
{{- define "devops.name" -}}
{{- .Values.app.name | trunc 63 | trimSuffix "-" }}
{{- end }}

{{/*
Common labels
*/}}
{{- define "devops.labels" -}}
{{ include "devops.selectorLabels" . }}
{{- if .Values.app.version }}
app.kubernetes.io/version: {{ .Values.app.version | quote }}
{{- end }}
app.kubernetes.io/managed-by: {{ .Release.Service }}
app.kubernetes.io/team: {{ .Values.app.team }}
helm.sh/chart: {{ include "devops.name" . }}
{{- end }}

{{/*
Selector labels
*/}}
{{- define "devops.selectorLabels" -}}
app: {{ include "devops.name" . }}
{{- if .Values.app.component }}
component: {{ .Values.app.component }}
{{- end }}
{{- if .Values.app.partOf }}
part-of: {{ .Values.app.partOf }}
{{- end }}
app.kubernetes.io/name: {{ include "devops.name" . }}
{{- if .Values.app.component }}
app.kubernetes.io/component: {{ .Values.app.component }}
{{- end }}
{{- if .Values.app.partOf }}
app.kubernetes.io/part-of: {{ .Values.app.partOf }}
{{- end }}
{{- end }}

{{/*
Complete Docker images path, with registry, repository and tag
*/}}
{{- define "devops.completeImage" -}}
{{- printf "%s/apps/%s-%s:%s" .Values.image.registry .Values.app.name .Values.app.env (.Values.image.tag | toString | default "latest") -}}
{{- end -}}
{{- define "devops.completeWorkerImage" -}}
{{- printf "%s/apps/%s-worker-%s:%s" .Values.image.registry .Values.app.name .Values.app.env (.Values.image.tag | toString | default "latest") -}}
{{- end -}}

{{/*
Default Ingress Annotations
*/}}
{{- define "devops.ingressAnnotations" -}}
{{- $autoCert := ( index .Values.ingress.certificates .Values.app.env ).automatic -}}
{{- if $autoCert -}}
cert-manager.io/cluster-issuer: letsencrypt-prod
{{ end -}}
kubernetes.io/ingress.allow-http: "false"
nginx.ingress.kubernetes.io/configuration-snippet: |
  more_clear_headers "Server";
nginx.ingress.kubernetes.io/ssl-redirect: "true"
{{- end -}}

{{/*
Deployment Pod Annotations
*/}}
{{- define "devops.podAnnotations" -}}
apparmor.security.beta.kubernetes.io/pod: runtime/default
container.apparmor.security.beta.kubernetes.io/{{ .Values.containerName }}: runtime/default
{{- end -}}

{{/*
Pod Security Context
*/}}
{{- define "devops.podSecurityContext" -}}
runAsNonRoot: true
{{- end -}}
{{/*
Container Security Context
*/}}
{{- define "devops.securityContext" -}}
allowPrivilegeEscalation: false
privileged: false
{{- end -}}