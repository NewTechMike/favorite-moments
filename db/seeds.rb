# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

sora = User.create(username: "Sora", password_digest: "sora")

#mike = User.find_by(params[1])

#Moment.create(category: "movie", title: "aladdin", moment: "A whole new world")
#Moment.create(category: "movie", title: "hercules", moment: "zero to hero")
sora.moments.create(category: "book", title: "wizards first rule", moment: "When Richard sarcastically calls the wind")