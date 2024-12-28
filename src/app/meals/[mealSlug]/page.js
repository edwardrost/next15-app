export default async function MealDetailsPage({params}) {
    const {mealSlug} = await params;
    return (
        <main>
            <h1 style={{ color: 'white', textAlign: 'center' }}>
                Meals Slug Page
            </h1>
            <p>This is the meal slug page.</p>
            <p>{mealSlug}</p>
        </main>
    );
}