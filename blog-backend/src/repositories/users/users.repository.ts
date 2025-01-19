import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { models } from 'express-cassandra'; // Importing express-cassandra models

@Injectable()
export class UserRepository {
  constructor(
    @Inject('CASSANDRA_CLIENT')
    private readonly cassandraClient: typeof models,
  ) {}

  // Create a new user
  async createUser(
    email: string,
    password: string,
    name: string,
  ): Promise<any> {
    const now = new Date();
    const existingUser = await this.findOneByEmail(email);
    if (existingUser) {
      throw new BadRequestException('users already exists');
    }
    const user = new this.cassandraClient.instance.users({
      id: uuidv4(), // Generate UUID
      email,
      password,
      name,
      created_at: now, // Timestamps are auto-managed but can be set initially
      updated_at: now,
    });

    await user.saveAsync(); // Save the user
    return { user, existingUser: false };
  }

  // Find user by email
  async findOneByEmail(email: string): Promise<any> {
    try {
      const users = await this.cassandraClient.instance.users.findAsync(
        {
          email,
        },
        { allow_filtering: true },
      );
      return users.length > 0 ? users[0] : null;
    } catch (error) {
      throw new Error('Error finding user by email');
    }
  }

  // Find user by ID
  async findOneById(userId: string): Promise<any> {
    const users = await this.cassandraClient.instance.users.findAsync({
      id: userId,
    });
    return users.length > 0 ? users[0] : null;
  }

}
