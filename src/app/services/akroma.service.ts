import { Injectable } from '@angular/core';
import { TypeSafeWeb3 } from 'typesafe-web3';
import Web3 from 'web3';
import { SettingsService } from './settings.service';
@Injectable()
export class AkromaService {
    constructor(private settingsService: SettingsService) {
    }

    public connect(): TypeSafeWeb3 {
        return new TypeSafeWeb3(this.settingsService.getConnectionUrl());
    }

    public getWeb3(): Web3 {
        return new Web3(this.settingsService.getConnectionUrl());
    }
}
