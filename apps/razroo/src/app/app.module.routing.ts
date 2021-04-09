import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CustomPreloadingService } from '@razroo/common/services';

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        {
          path: 'product',
          loadChildren: () =>
            import('@razroo/razroo/product').then(
              module => module.RazrooProductModule
            ),
          data: {preload: true}
        },
        {
          path: '',
          pathMatch: 'full',
          redirectTo: 'product',
        },
      ],
      {
        initialNavigation: 'enabled',
        preloadingStrategy: CustomPreloadingService,
        relativeLinkResolution: 'corrected',
      }
    ),
  ],
  exports: [RouterModule]
})
export class RazrooAppRoutingModule {}
