import { Injectable } from '@angular/core';
@Injectable()
export class SettingsService {
    constructor() {}

    public getConnectionUrl(): string {
        const url = localStorage.getItem('connection_url');
        if (url !== null) {
            return url;
        }
        return 'https://boot2.akroma.org';
    }

    public setConnectionUrl(url: string): string {
        // TODO: validation.
        localStorage.setItem('connection_url', url);
        return url;
    }
}
