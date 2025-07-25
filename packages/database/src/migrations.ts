export interface Migration {
  id: string;
  name: string;
  up: () => Promise<void>;
  down: () => Promise<void>;
  timestamp: Date;
}

export class MigrationManager {
  private migrations: Migration[] = [];

  addMigration(migration: Migration): void {
    this.migrations.push(migration);
  }

  async runMigrations(): Promise<void> {
    console.log('Running migrations...');
    for (const migration of this.migrations) {
      console.log(`Running migration: ${migration.name}`);
      await migration.up();
    }
    console.log('All migrations completed');
  }

  async rollbackMigrations(count: number = 1): Promise<void> {
    console.log(`Rolling back ${count} migrations...`);
    const migrationsToRollback = this.migrations.slice(-count);
    
    for (const migration of migrationsToRollback.reverse()) {
      console.log(`Rolling back migration: ${migration.name}`);
      await migration.down();
    }
    console.log('Rollback completed');
  }

  getMigrationHistory(): Migration[] {
    return [...this.migrations];
  }
} 