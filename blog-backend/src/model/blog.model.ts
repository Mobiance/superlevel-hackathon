export const BlogModel = {
    fields: {
        id: 'text',
        title: 'text',
        content: 'text',
        author_id: 'text',
        language: 'text',
        categories: { type: 'list', typeDef: '<text>' },
        tags: { type: 'list', typeDef: '<text>' },
        published_at: 'timestamp',
        status: 'text', // e.g., "draft", "published"
    },
    key: ['id'],
    options: {
        timestamps: {
            created_at: 'createdAt',
            updated_at: 'updatedAt',
        },
    },
};
