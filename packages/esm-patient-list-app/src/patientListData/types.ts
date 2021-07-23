export enum PatientListType {
  SYSTEM,
  USER,
}

export interface PatientList {
  id: string;
  display: string;
  description: string;
  type: PatientListType;
  memberCount: number;
  isStarred: boolean;
  options?: Array<PatientListOption>;
}

export interface PatientListUpdate {
  isStarred: boolean;
}

export interface PatientListFilter {
  isStarred?: boolean;
  name?: string;
  type?: PatientListType;
}

export interface PatientListOption {
  type: string;
  name: string;
  value: any;
}

/**
 * identifier -> uuid
 * age
 * gender
 * date of birth
 * last visit -> last visit/encounter date
 */
export interface PatientListMember {
  patientUuid: string;
  properties: Array<PatientListMemberProperty>;
}

export interface PatientListMemberProperty {
  type: string;
  value: string | number;
}

export interface PatientListMemberFilter {
  // ??
}

export interface LoadingState {
  loading: true;
  data: undefined;
  error: undefined;
}

export interface DataState<T> {
  loading: false;
  data: T;
  error: undefined;
}

export interface ErrorState {
  loading: false;
  data: undefined;
  error: Error;
}

export type FetchState<T> = LoadingState | DataState<T> | ErrorState;
