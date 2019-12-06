const joi = require('@hapi/joi')

const movieIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/)
const movieTitleSchema = joi.string().max(80)
const movieYearSchema = joi.number().min(1888).max(2077)
const movieCoverSchema = joi.string().uri()
const movieDesciptrionSchema = joi.string().max(300)
const movieDuratioSchema = joi.number().min(1).max(300)
const movieContentRatingSchema = joi.string().max(5)
const movieSourceSchema = joi.string().uri()
const movieTagsSchema = joi.array().items(joi.string().max(50))

const createMovieSchema = joi.object({
    title: movieTitleSchema.required(),
    year: movieYearSchema.required(),
    cover: movieCoverSchema.required(),
    description: movieDesciptrionSchema.required(),
    duration: movieDuratioSchema.required(),
    contentRating: movieContentRatingSchema.required(),
    source: movieSourceSchema.required(),
    tags: movieTagsSchema
})

const updateMovieSchema = joi.object({
    title: movieTitleSchema,
    year: movieYearSchema,
    cover: movieCoverSchema,
    description: movieDesciptrionSchema,
    duration: movieDuratioSchema,
    contentRating: movieContentRatingSchema,
    source: movieSourceSchema,
    tags: movieTagsSchema
})

module.exports = {
    movieIdSchema,
    createMovieSchema,
    updateMovieSchema
}