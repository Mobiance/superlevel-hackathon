import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as Cassandra from 'express-cassandra';
import * as path from 'path';
import { BlogModel } from 'src/model/blog.model';
import { UserModel } from 'src/model/user.model';
import { syncSchemas } from 'src/utils/sync-schemas';

@Module({
  imports: [ConfigModule],
  providers: [
    {
      provide: 'CASSANDRA_CLIENT',
      useFactory: async (configService: ConfigService) => {
        const secureConnectBundle = configService.get<string>(
          'ASTRA_DB_SECURE_CONNECT_BUNDLE',
        );
        const keyspace = configService.get<string>('ASTRA_DB_KEYSPACE');
        const username = configService.get<string>('ASTRA_DB_CLIENT_ID');
        const password = configService.get<string>('ASTRA_DB_CLIENT_SECRET');
        
        if (!secureConnectBundle || !keyspace || !username || !password) {
          throw new Error('Cassandra DB configuration is missing');
        }
        
        const secureConnectBundlePath = path.resolve(secureConnectBundle);
        const clientOptions = {
          clientOptions: {
            cloud: {
              secureConnectBundle: secureConnectBundlePath,
            },
            credentials: {
              username: username,
              password: password,
            },
            keyspace: keyspace,
          },
          ormOptions: {
            defaultReplicationStrategy: {
              class: 'SimpleStrategy',
              replication_factor: 1,
            },
            migration: 'alter',
            createKeyspace: false,
          },
        };
        
        const models = Cassandra.createClient(clientOptions);
        
        // Load the schema after UDT definition
        models.loadSchema('users', UserModel);
        models.loadSchema('blogs', BlogModel);
        
        // await syncSchemas(models);
        return models;
      },
      inject: [ConfigService],
    },
  ],
  exports: ['CASSANDRA_CLIENT'],
})
export class DatabaseModule {}
