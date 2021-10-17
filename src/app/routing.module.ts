import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressDetailsComponent } from './pages/address-details/address-details.component';
import { BlockDetailsComponent } from './pages/block-details/block-details.component';
import { ExplorerHomeComponent } from './pages/explorer-home/explorer-home.component';
import { TransactionDetailsComponent } from './pages/transaction-details/transaction-details.component';


const routes: Routes = [
  { path: '', component: ExplorerHomeComponent },
  { path: 'block/:blockId', component: BlockDetailsComponent },
  { path: 'transaction/:transactionHash', component: TransactionDetailsComponent },
  { path: 'address/:addressHash', component: AddressDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule { }
