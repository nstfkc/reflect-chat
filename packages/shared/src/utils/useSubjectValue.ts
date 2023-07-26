import { useSyncExternalStore } from "react";
import { Subject } from "./Subject";

export function useSubjectValue<T>(subject: Subject<T>) {
  return useSyncExternalStore(subject.subscribe, subject.getValue);
}
