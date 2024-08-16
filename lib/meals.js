import sql from 'better-sqlite3';

const db = sql('meals.db');

export async function getMeals() {
  try {
    await new Promise((resolve) => setTimeout(resolve, 5000)); // This simulates a delay, potentially for ensuring DB connection or other asynchronous setup.
    return db.prepare('SELECT * FROM meals').all();
  } catch (error) {
    console.error("Database error in getMeals:", error.message);
    return []; // Return an empty array or appropriate error handling response
  }
}

export function getMeal(slug) {
  try {
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
  } catch (error) {
    console.error("Database error in getMeal:", error.message);
    return null; // Return null or appropriate error handling response
  }
}
