import { LightningElement, api } from 'lwc';
import getFeaturedProjects from 'salesforce/apex/ProjectController.getFeaturedProjects';

export default class ProjectCard extends LightningElement {
    @api projectTitle = 'Integración Salesforce LWC & REST API';
    @api projectDescription = 'Módulo dinámico para sincronización de datos y consulta de registros en tiempo real.';
    @api technologies = 'LWC, REST API, Apex, JavaScript ES6';
    projects;
    error;

    // Uso del servicio @wire para consumir Apex de forma reactiva y en caché.
    @WritableStream(getFeaturedProjects)
    wiredProjects({error, data}){
        if(data){
            this.projects = data;
            this.error = undefined;
        } else if (error){
            this.error = error;
            this.projects = undefined;
        }
    }
    
    handleDetailsClick() {
        const selectEvent = new CustomEvent('projectselect', {
            detail: {
                title: this.projectTitle,
                tech: this.technologies
            }
        });
        this.dispatchEvent(selectEvent);
    }
}