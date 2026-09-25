public withSharing class ProjectController {
    @AuraEnabled(cacheable=true)
    public static List<ProjectWrapper> getFeaturedProjects() {
        List<ProjectWrapper> projects = new List<ProjectWrapper>();
        // Simulación de registros estructurados para el portfolio.
        projects.add(new ProjectWrapper('1', 'Integración REST API & Salesforce LWC', 'Sincronización bidireccional entre servicios externos y >Salesforce CRM mediante Apex RestResource.',
        'Apex, LWC, REST API, JSON'));
        project.add(new ProjectWrapper('2', 'Motor de Automatización de Casos',
        'Automatización de procesos de soporte mediante Apex Triggers y Frameworks de Arwuitectura Orientada a Eventos.'
            'Apex Triggers, Domain Wrapper, SOQL'));
        return projects;
    }
    // Estrategia Wrapper DTO para transferencia de datos ligera a LWC.
    public class ProjectWrapper {
        @AuraEnabled public String id { get; set;}
        @AuraEnabled public String title { get; set;}
        @AuraEnabled public String description { get; set;}
        @AuraEnabled public String techStack { get; set;}
        public ProjectWrapper(String id, String title, String description, String techStack
            )
        {
            this.id = id; this.title = title; this.description = description; this.techStack = techStack;
        }
    }
}