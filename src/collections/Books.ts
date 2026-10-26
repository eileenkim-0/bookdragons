import { CollectionConfig, slugField } from 'payload';

export const Books:CollectionConfig = {
    slug: "books",
    fields: [
        {
            name: "title",
            label: "Tittelen på boken",
            type: "text",
            required: true,
        },
        slugField(),
        {
            name: "summary",
            type: "richText",
            label: "Sammendrag for boken",
            required: true
        },
        {
            name: "price",
            type: "number",
            label: "Prisen for boken",
            required: true
        }

    ]
}