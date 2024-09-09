import { localStorageService } from 'services/LocalStorageService';

export function logout() {
  localStorageService.removeAuthToken();
}
