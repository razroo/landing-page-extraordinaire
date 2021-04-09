import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { CommonUiRocketShipModule } from '@razroo/common/ui/rocket-ship';
import { CommonUiFactoryModule } from '@razroo/common/ui/factory';
import { CommonUiBgModule } from '@razroo/common/ui/bg';
import { CommonUiLaunchPadModule } from '@razroo/common/ui/launch-pad';
import { CommonUiStarFieldModule } from '@razroo/common/ui/star-field';
import { CommonUiMountainsModule } from '@razroo/common/ui/mountains';
import { CommonUiLakeModule } from '@razroo/common/ui/lake';
import { CommonUiSubmarineModule } from '@razroo/common/ui/submarine';
import { CommonUiStreetLightModule } from '@razroo/common/ui/street-light';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: ProductComponent}
    ]),
    CommonUiRocketShipModule,
    CommonUiFactoryModule,
    CommonUiBgModule,
    CommonUiLaunchPadModule,
    CommonUiStarFieldModule,
    CommonUiMountainsModule,
    CommonUiLakeModule,
    CommonUiSubmarineModule,
    CommonUiStreetLightModule,
  ],
  declarations: [ProductComponent],
  exports: [ProductComponent]
})
export class RazrooProductModule {}
