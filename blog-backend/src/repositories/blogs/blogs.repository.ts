import { Injectable } from '@nestjs/common';
import { Inject } from '@nestjs/common';
import { Client } from 'express-cassandra';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class BlogsRepository {
    constructor(@Inject('CASSANDRA_CLIENT') private readonly cassandraClient: Client) { }

    async saveBlog(
        title: string,
        content: string,
        authorId: string,
        language: string,
        categories: string[],
        tags: string[],
        status: string,
    ): Promise<any> {
        const blogId = uuidv4(); // Generate a unique ID for the blog post
        const publishedAt = new Date(); // Current date-time for published_at

        try {
            // Saving the blog post to Cassandra
            const result = new this.cassandraClient.instance.blogs({
                id: blogId,
                title,
                content,
                author_id: authorId,
                language,
                categories,
                tags,
                published_at: publishedAt,
                status,
            });

            await result.saveAsync(); // Successfully saved blog post
            return { result}
        } catch (error) {
            console.error('Error saving blog:', error);
            throw new Error('Error saving blog');
        }
    }

    async getBlogs(): Promise<any> {
        try {
            // Fetch all blog posts from Cassandra
            const blogs = await this.cassandraClient.instance.blogs.findAsync({}, { raw: true });

            return blogs; // Return all blog posts
        } catch (error) {
            console.error('Error fetching blogs:', error);
            throw new Error('Error fetching blogs');
        }
    }

    async getBlogById(blogId: string): Promise<any> {
        try {
            // Fetch blog post by ID from Cassandra
            const blog = await this.cassandraClient.instance.blogs.findOneAsync({ id: blogId }, { raw: true });

            return blog; // Return the blog post
        } catch (error) {
            console.error('Error fetching blog by ID:', error);
            throw new Error('Error fetching blog by ID');
        }
    }
}
