import { Component, Input, OnInit } from '@angular/core';
import { fadeToBottom } from './ngx-material-cookie-compliance.animations';

const TEXT_EN = 'This website uses cookies to improve user experience. By continuing to use the website, you are granting your consent.';
const TEXT_DE = 'Wir verwenden Cookies, um Ihnen eine bessere Nutzerfreundlichkeit zu bieten. Durch die Nutzung dieser Website stimmen Sie dem zu.';
const TEXT_FR = 'Ce site Web utilise des cookies pour améliorer la convivialité. En continuant à utiliser le site Web, vous y consentez.';
const TEXT_ES = 'Este sitio web utiliza cookies para mejorar la facilidad de uso. Al continuar usando el sitio web, usted da su consentimiento para ello.';
const TEXT_IT = 'Questo sito web utilizza i cookie per migliorare la facilità d\'uso. Continuando a utilizzare il sito web, l\'utente acconsente a questo.';

const BTN_TEXT_EN = 'Cookie policy';
const BTN_TEXT_DE = 'Cookie-Richtlinie';
const BTN_TEXT_FR = 'Politique des cookies';
const BTN_TEXT_ES = 'Política sobre cookies';
const BTN_TEXT_IT = 'Politica dei cookie';

const BTN_CLOSE_EN = 'Ok';
const BTN_CLOSE_DE = 'Ok';
const BTN_CLOSE_FR = 'D\'accord';
const BTN_CLOSE_ES = 'Vale';
const BTN_CLOSE_IT = 'Chiudere';

const LOCAL_STORAGE_KEY = 'NgxMaterialCookieComplianceAgreed';

@Component({
    selector: 'ngx-material-cookie-compliance',
    templateUrl: 'ngx-material-cookie-compliance.component.html',
    styleUrls: ['ngx-material-cookie-compliance.component.scss'],
    animations: [fadeToBottom]
})
export class NgxMaterialCookieComplianceComponent implements OnInit {

    @Input() language = 'en';
    @Input() text: string;
    @Input() buttonText: string;
    @Input() buttonCloseText: string;
    @Input() targetURL = 'https://google.com';
    @Input() embedCookieCompliance = true;
    @Input() delay = 3000;
    showCC: boolean;

    constructor() {
        if (!!localStorage.getItem(LOCAL_STORAGE_KEY)) {
            this.embedCookieCompliance = false;
        } else {
            this.triggerTimeout();
        }
    }

    ngOnInit() {
    }

    discard() {
        localStorage.setItem(LOCAL_STORAGE_KEY, new Date().toISOString());
        this.showCC = false;
        setTimeout(() => {
            this.embedCookieCompliance = false;
        }, 1000);
    }


    getText(): string {
        if (!!this.text) {
            return this.text;
        }

        switch (this.language) {
            case 'de':
                return TEXT_DE;
            case 'fr':
                return TEXT_FR;
            case 'es':
                return TEXT_ES;
            case 'it':
                return TEXT_IT;
            default:
                return TEXT_EN;
        }
    }

    openLink() {
        window.open(this.targetURL, '_blank');
    }

    getButtonText(): string {
        if (!!this.buttonText) {
            return this.buttonText;
        }

        switch (this.language) {
            case 'de':
                return BTN_TEXT_DE;
            case 'fr':
                return BTN_TEXT_FR;
            case 'es':
                return BTN_TEXT_ES;
            case 'it':
                return BTN_TEXT_IT;
            default:
                return BTN_TEXT_EN;
        }
    }


    getCloseText(): string {
        if (!!this.buttonCloseText) {
            return this.buttonCloseText;
        }

        switch (this.language) {
            case 'de':
                return BTN_CLOSE_DE;
            case 'fr':
                return BTN_CLOSE_FR;
            case 'es':
                return BTN_CLOSE_ES;
            case 'it':
                return BTN_CLOSE_IT;
            default:
                return BTN_CLOSE_EN;
        }
    }

    private triggerTimeout() {
        setTimeout(() => {
            this.showCC = true;
        }, this.delay);
    }
}
