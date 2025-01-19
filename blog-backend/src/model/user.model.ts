
export const UserModel = {
  fields: {
    id: 'text', // Unique identifier for the user
    name: 'text', // Full name of the user
    email: 'text', // Email address (unique)
    password: 'text', // Hashed password
    blogs: {
      type: 'list',
      typeDef: '<text>', // List of blog IDs created by the user
    },
  },
  key: ['id'], // Primary key
  options: {
    timestamps: {
      created_at: 'createdAt',
      updated_at: 'updatedAt',
    },
  },
};
