# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Trail.destroy_all
Review.destroy_all


puts "Seeding Users"
5.times {User.create(name: Faker::FunnyName.name,
    password: Faker::Internet.password,
    email: Faker::Internet.email)}
puts "Seeding Trails"
Trail.create([
   { name: "North Mountain Fire Lookout",
    elevation_gain: 462,
    length: 2.5,
    body: "Check out this 2.5-mile out-and-back trail near Darrington, Washington. Generally considered an easy route, it takes an average of 1 h 12 min to complete. This is a popular trail for hiking, but you can still enjoy some solitude during quieter times of day. The best times to visit this trail are March through October.",
    location: "Northwest Washington"}, 
    {
    name: "Granite Mountain Trail" ,
    elevation_gain: 3717,
    length: 7.7,
    body: "Try this 7.7-mile out-and-back trail near Snoqualmie Pass, Washington. Generally considered a challenging route, it takes an average of 6 h 8 min to complete. This is a very popular area for hiking, so you'll likely encounter other people while exploring. The best times to visit this trail are June through October. Dogs are welcome, but must be on a leash.",
    location: "Western Washington"
    }, 
    {
        name: "Shriner Peak Lookout Trail",
        elevation_gain: 3382,
        length: 8.0,
        body: "Get to know this 8.0-mile out-and-back trail near Paradise Inn, Washington. Generally considered a challenging route, it takes an average of 5 h 51 min to complete. This is a popular trail for camping and hiking, but you can still enjoy some solitude during quieter times of day. The best times to visit this trail are June through September. You'll need to leave pups at home — dogs aren't allowed on this trail.",
        location: "Southwest Washington"
    },
    {
        name:"Gold Butte Fire Lookout",
        elevation_gain: 734,
        length: 2.5,
        body: "Enjoy this 2.5-mile out-and-back trail near Detroit, Oregon. Generally considered a moderately challenging route, it takes an average of 1 h 28 min to complete. This trail is great for hiking, snowshoeing, and walking, and it's unlikely you'll encounter many other people while exploring. The best times to visit this trail are April through October. Dogs are welcome, but must be on a leash.",
        location: "Northwest Oregon"
    },
    {
        name:"Green Peter Fire Lookout",
        elevation_gain: 3431,
        length: 13.3,
        body: "Check out this 13.3-mile out-and-back trail near Lebanon, Oregon. Generally considered a challenging route, it takes an average of 7 h 25 min to complete. This trail is great for hiking, and it's unlikely you'll encounter many other people while exploring.",
        location: "Northwest Oregon"
    },
    {
        name: "Miami Mountain Fire Lookout",
        elevation_gain: 1013,
        length: 4.5,
        body: "Experience this 4.5-mile out-and-back trail near Ahwahnee, California. Generally considered a moderately challenging route, it takes an average of 2 h 21 min to complete. This trail is great for hiking, mountain biking, and running, and it's unlikely you'll encounter many other people while exploring. Dogs are welcome, but must be on a leash.",
        location: "Central California"
    },
    
 {
    name: "Mount Tom Fire Lookout OHV Trail",
    elevation_gain: 1089,
    length: 5.4,
    body: "Get to know this 5.4-mile out-and-back trail near Mono Hot Springs, California. Generally considered a moderately challenging route. This trail is great for off-road driving, and it's unlikely you'll encounter many other people while exploring. The best times to visit this trail are April through October. Dogs are welcome and may be off-leash in some areas.",
    location: "Central California"
},
{
    name: "Shadow Mountain Fire Lookout Trail",
    elevation_gain: 1604,
    length: 9.3,
    body: "Check out this 9.3-mile out-and-back trail near Grand Lake, Colorado. Generally considered a moderately challenging route, it takes an average of 4 h 20 min to complete. This is a popular trail for birding, hiking, and horseback riding, but you can still enjoy some solitude during quieter times of day. The best times to visit this trail are May through September. You'll need to leave pups at home — dogs aren't allowed on this trail.",
    location: "Northern Colorado"
},
{
    name: "Lookout Mountain Trail",
    elevation_gain:2562,
    length: 10.4,
    body: "Experience this 10.4-mile out-and-back trail near Bellvue, Colorado. Generally considered a moderately challenging route, it takes an average of 5 h 41 min to complete. This is a popular trail for birding, hiking, and walking, but you can still enjoy some solitude during quieter times of day. The best times to visit this trail are June through November. Dogs are welcome and may be off-leash in some areas.",
    location: "Northern Colorado"
}


  ]  )

puts "seeding reviews"
20.times {Review.create(body: Faker::Lorem.paragraph(sentence_count: 2...4),
   condition: (['Good', 'Bad', 'Normal', 'Snowy', 'Washed Out'].sample),
   photo: Faker::LoremFlickr.image,
   rating: Faker::Number.between(from: 1, to: 5),
   trail: Trail.all.sample,
   user: User.all.sample)}


puts "all seeded"