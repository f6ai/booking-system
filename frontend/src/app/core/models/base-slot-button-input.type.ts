/*
 * Copyright (c) 2000 - 2019 by Raiffeisen Software GmbH.
 * All rights reserved.
 */
import { Observable } from 'rxjs';

export interface BaseSlotButtonInputType {
  text: string;
  callback: () => void;
  primary?: boolean;
  disabled?: (() => boolean) | boolean | Observable<boolean>;
  type?: string;
}
