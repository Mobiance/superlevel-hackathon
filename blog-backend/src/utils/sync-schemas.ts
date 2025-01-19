export async function syncSchemas(models: any) {
  const schemas = ['users', 'blogs'];

  for (const schema of schemas) {
    await new Promise((resolve, reject) => {
      models.instance[schema].syncDB((err: any) => {
        if (err) {
          console.error(`Error syncing ${schema} model schema:`, err);
          return reject(err);
        }
        console.log(
          `${schema.charAt(0).toUpperCase() + schema.slice(1)} model schema synchronized successfully.`,
        );
        resolve(true);
      });
    });
  }
}
