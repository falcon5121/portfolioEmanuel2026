import { pgTable, serial, text} from "drizzle-orm/pg-core";

export const works = pgTable('works', {
    id: serial("id").primaryKey(),

    title: text("title").notNull(),
    description: text("description"),
    image: text("image"),
})

export const jobs = pgTable('jobs', {
    id: serial("id").primaryKey(),

    title: text("title").notNull()
});