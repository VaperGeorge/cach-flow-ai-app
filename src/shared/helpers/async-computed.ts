import { Signal, signal, effect } from '@angular/core';
import { Observable, isObservable, firstValueFrom } from 'rxjs';

export function asyncComputed<T>(
  computation: () => Observable<T> | Promise<T> | T | undefined | null
): Signal<T> {
  // @ts-ignore
  const resultSignal = signal<T>(null);

  effect(
    async () => {
      const result = computation();
      const unwrappedResult = await (isObservable(result)
        ? firstValueFrom(result as Observable<T>, { defaultValue: null })
        : result);

      // @ts-ignore
      resultSignal.set(unwrappedResult);
    },
    { allowSignalWrites: true }
  );

  return resultSignal.asReadonly();
}
