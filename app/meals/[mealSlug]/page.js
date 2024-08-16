import { getMeal } from "@/lib/meals";
import Image from "next/image";
import classes from "./meal.module.css";

export default function MealDetailPage({ params }) {
    const meal = getMeal(params.mealSlug);

    // Check if meal is not null
    if (!meal) {
        return <div>Meal not found</div>;  // Or render any other error message or component
    }

    meal.instructions = meal.instructions.replace(/\n/g, '<br />');

    return (
        <>
            <header className={classes.header}>
                <div className={classes.image}>
                    <Image src={meal.image} alt={meal.title} fill />
                </div>
                <div className={classes.headerText}>
                    <h1>{meal.title}</h1>
                    <p className={classes.creator}>
                        by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
                        <p className={classes.summary}>{meal.summary}</p>
                    </p>
                </div>
            </header>
            <main>
                <p className={classes.instructions} dangerouslySetInnerHTML={{
                    __html: meal.instructions
                }}>
                </p>
            </main>
        </>
    );
}
