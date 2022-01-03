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
import { HexToAsciiPipe } from './pipes/hex-to-ascii.pipe';
import { UnixTimestampToDatePipe } from './pipes/unix-timestamp-to-date.pipe';
import { RoutingModule } from './routing.module';
import { AddressService } from './services/address.service';
import { AkromaService } from './services/akroma.service';
import { BlockService } from './services/block.service';
import { SettingsService } from './services/settings.service';
import { TransactionService } from './services/transaction.service';
import { TokenContactDetailsComponent } from './pages/token-contract-details/token-contract-details.component';

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
    HexToAsciiPipe,
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
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
