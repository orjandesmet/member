import { DocumentChangeAction } from '@angular/fire/firestore';

export function parseChangeActionDocument<T>(changeAction: DocumentChangeAction<T>): T {
  return Object.assign({id : changeAction.payload.doc.id}, changeAction.payload.doc.data());
}
