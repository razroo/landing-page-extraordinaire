import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { EMPTY, Observable, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { OnDemandPreloadOptions, OnDemandPreloadService } from './on-demand-preload.service';
export declare var navigator;

@Injectable({ providedIn: 'root', deps: [OnDemandPreloadService] })
export class CustomPreloadingService implements PreloadingStrategy {
  private preloadOnDemand$: Observable<OnDemandPreloadOptions>;

  constructor(private preloadOnDemandService: OnDemandPreloadService) {
    this.preloadOnDemand$ = this.preloadOnDemandService.state;
  }

  preload(route: Route, load: () => Observable<any>): Observable<any> {
    return this.preloadOnDemand$.pipe(
      mergeMap(preloadOptions => {
        const shouldPreload = this.preloadCheck(route, preloadOptions);
        const hasGoodConnection = this.hasGoodConnection();
        if(shouldPreload && hasGoodConnection) {
          return load();
        }
        else {
          return EMPTY;
        }
      })
    );
  }

  private preloadCheck(route: Route, preloadOptions: OnDemandPreloadOptions) {
    return (
      route.data &&
      route.data['preload'] &&
      [route.path, '*'].includes(preloadOptions.routePath) &&
      preloadOptions.preload
    );
  }

  private hasGoodConnection(): boolean {
    const conn = navigator.connection;
    if (conn) {
      if (conn.saveData) {
        return false; // save data mode is enabled, so dont preload
      }
      const avoidTheseConnections = ['slow-2g', '2g'];
      // 'slow-2g', '2g', '3g', or '4g'
      const effectiveType = conn.effectiveType || '';
      if (avoidTheseConnections.includes(effectiveType)) {
        return false;
      }
    }
    return true;
  }
}
