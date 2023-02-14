# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Users.destroy_all
Trails.destroy_all
Reviews.destroy_all


puts "Seeding Users"
5.times {User.create(name: Faker::FunnyName.name,
    password: Faker::Internet.password,
    email: Faker::Internet.email}
puts "Seeding Trails"
Trail.create(
   { name: "North Mountain Fire Lookout"
    elevation_gain:
    length:}
    )

puts "seeding reviews"

puts "all seeded"