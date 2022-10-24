import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { AddressQrcodeComponent } from './components/address-qrcode/address-qrcode.component';
import { BlocksPanelComponent } from './components/blocks-panel/blocks-panel.component';
import { HeaderComponent } from './components/header/header.component';
import { TransactionsPanelComponent } from './components/transactions-panel/transactions-panel.component';
import { AddressDetailsComponent } from './pages/address-details/address-details.component';
import { BlockDetailsComponent } from './pages/block-details/block-details.component';
import { ExplorerHomeComponent } from './pages/explorer-home/explorer-home.component';
import { TransactionDetailsComponent } from './pages/transaction-details/transaction-details.component';
import { WeiToAkaPipe } from './pipes/wei-to-aka.pipe';
import { UnixTimestampToDatePipe } from './pipes/unix-timestamp-to-date.pipe';
import { RoutingModule } from './routing.module';
import { AddressService } from './services/address.service';
import { AkromaService } from './services/akroma.service';
import { BlockService } from './services/block.service';
import { SettingsService } from './services/settings.service';
import { TransactionService } from './services/transaction.service';
import { TokenContactDetailsComponent } from './pages/token-contract-details/token-contract-details.component';
import { ApiService } from './services/api.service';
import { HexToAsciiPipe } from './pipes/hex-to-ascii.pipe copy';
import { HomeNetworkComponent } from './components/home-network/home-network.component';
import { HomePlatformComponent } from './components/home-platform/home-platform.component';
import { HomeEcosystemComponent } from './components/home-ecosystem/home-ecosystem.component';
import { HomeCommunityComponent } from './components/home-community/home-community.component';
import { ContractsComponent } from './pages/contracts/contracts.component';
import { ContractsTableComponent } from './components/contracts-table/contracts-table.component';

@NgModule({
  declarations: [
    AppComponent,
    // pages
    ExplorerHomeComponent,
    AddressDetailsComponent,
    BlockDetailsComponent,
    TransactionDetailsComponent,
    TokenContactDetailsComponent,
    // components
    BlocksPanelComponent,
    AddressQrcodeComponent,
    TransactionsPanelComponent,
    HeaderComponent,
    AddressQrcodeComponent,
    // pipes
    UnixTimestampToDatePipe,
    WeiToAkaPipe,
    HexToAsciiPipe,
    HomeNetworkComponent,
    HomePlatformComponent,
    HomeEcosystemComponent,
    HomeCommunityComponent,
    ContractsComponent,
    ContractsTableComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RoutingModule,
    RouterModule,
    PaginationModule.forRoot(),
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    // NgxQRCodeModule,
    HttpClientModule,
  ],
  providers: [
    BlockService,
    TransactionService,
    AddressService,
    SettingsService,
    AkromaService,
    ApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
