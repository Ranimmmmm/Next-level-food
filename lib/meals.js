import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';
import fs from 'fs'

const db = sql('meals.db');

export async function getMeals() {
  try {
    await new Promise((resolve) => setTimeout(resolve, 5000)); 
    return db.prepare('SELECT * FROM meals').all();
  } catch (error) {
    console.error("Database error in getMeals:", error.message);
    return []; 
  }
}

export function getMeal(slug) {
  try {
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
  } catch (error) {
    console.error("Database error in getMeal:", error.message);
    return null; 
  }
}

export async function saveMeal ( ){
  meal.slug = slugify(meal.title);
  meal.instruction = xss (meal.instruction);

  const extenstion = meal.image.name.split('.').pop();
  const fileName = fs.createWriteStream(`public/image/${fileName}`);
  const bufferImg = await meal.image.arrayBuffer();

  stream.write(Buffer.from(bufferImg) , (error) => {
    if(error) {
      throw new Error('Saving image failed')
    }
  })
  meal.image = `/image/${fileName}`

  db.prepare(`
    INSERT INTO meals 
     (title, summary , instructions , creator , creator_email , image , slug)
    VALUES (
       @title, @summary , @instructions , @creator , @creator_email , @image , @slug
      )
    `).run(meal);
} 

