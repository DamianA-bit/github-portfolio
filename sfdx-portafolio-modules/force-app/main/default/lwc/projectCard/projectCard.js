import { LightningElement, api } from 'lwc';

export default class ProjectCard extends LightningElement {
    @api projectTitle = 'Integración Salesforce LWC & REST API';
    @api projectDescription = 'Módulo dinámico para sincronización de datos y consulta de registros en tiempo real.';
    @api technologies = 'LWC, REST API, Apex, JavaScript ES6';

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