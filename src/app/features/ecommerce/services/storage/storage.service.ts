import { Injectable } from '@angular/core';
import { Role } from '@core/enums';

@Injectable()
export class StorageService {
  set(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  get(key: string): string {
    return localStorage.getItem(key) as string;
  }

  remove(key: string): void {
    localStorage.removeItem(key);
  }

  clear(): void {
    localStorage.clear();
  }

  get token(): string {
    return this.get('token');
  }

  get connected(): string {
    return this.get('connected');
  }

  get role(): string {
    return this.get('role');
  }

  get simpleUserConnected(): boolean {
    return !!this.token && !!this.connected;
  }

  get adminUserConnected(): boolean {
    return this.simpleUserConnected && this.role === Role.ADMIN;
  }

  get isConnected(): boolean {
    return this.simpleUserConnected || this.adminUserConnected;
  }
}
