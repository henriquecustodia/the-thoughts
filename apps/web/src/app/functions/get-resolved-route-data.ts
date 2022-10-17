import { inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

export function getResolvedRouteData<T>(resolvedDataKey: string): T {
    return inject(ActivatedRoute).snapshot.data[resolvedDataKey];
}