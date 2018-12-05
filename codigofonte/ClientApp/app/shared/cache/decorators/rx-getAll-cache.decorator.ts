import { BasicLRUCache } from "../model";

import { Observable } from "rxjs/Observable";
import { ReplaySubject } from "rxjs/ReplaySubject";
import "rxjs/add/observable/combineLatest";
import "rxjs/add/operator/do";

export function RxGetAllCache({
  cache,
  labelForAll = "__multi__all",
  labelsFromResponse
}: {
  cache: BasicLRUCache;
  labelForAll?: string;
  labelsFromResponse: (...args: any[]) => Array<number | string>;
}) {
  return function _RxGetAllCache(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = function(...args: any[]) {
      let cached: ReplaySubject<any> = cache.get(labelForAll);

      if (cached) {
        return cached;
      } else {
        cached = new ReplaySubject<any>(1);
        cache.set(labelForAll, cached);

        originalMethod.apply(this, args).subscribe((resp: any) => {
          let labels = labelsFromResponse(resp);
          labels.forEach((label, idx) => cache.get(label).next(resp[idx]));
          Observable.combineLatest(
            ...labels.map(label => cache.get(label))
          ).subscribe(arr => cached.next(arr));
        });

        return cached;
      }
    };

    return descriptor.value;
  };
}
