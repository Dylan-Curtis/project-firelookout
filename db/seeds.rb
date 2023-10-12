User.destroy_all
Trail.destroy_all
Review.destroy_all


puts "Seeding Users"
5.times do
  member_since = Faker::Date.between(from: 1.year.ago, to: Date.today)  # Generate a random date within the past year
  user = User.create(
    name: Faker::FunnyName.name,
    password: Faker::Internet.password,
    email: Faker::Internet.email,
    member_since: member_since,
    profile_icon: rand(1..6)
  )
end
puts "Seeding Trails"
Trail.create([
   { name: "North Mountain Fire Lookout",
    elevation_gain: 462,
    length: 2.5,
    body: "Check out this 2.5-mile out-and-back trail near Darrington, Washington. Generally considered an easy route, it takes an average of 1 h 12 min to complete. This is a popular trail for hiking, but you can still enjoy some solitude during quieter times of day. The best times to visit this trail are March through October.",
    location: "Northwest Washington",   image: "https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvNDkzNzYzOTAvYjEwNmQ2MTk1N2ZjNzI3MDkyOGEyMWYyMDg5YjcwOTEuanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJqcGVnIiwicmVzaXplIjp7IndpZHRoIjoyMDQ4LCJoZWlnaHQiOjIwNDgsImZpdCI6Imluc2lkZSJ9LCJyb3RhdGUiOm51bGwsImpwZWciOnsidHJlbGxpc1F1YW50aXNhdGlvbiI6dHJ1ZSwib3ZlcnNob290RGVyaW5naW5nIjp0cnVlLCJvcHRpbWlzZVNjYW5zIjp0cnVlLCJxdWFudGlzYXRpb25UYWJsZSI6M319fQ==",
map: "https://static-maps.alltrails.com/production/at-map/72531622/v1-trail-us-washington-north-mountain-fire-lookout-at-map-72531622-1645091057-300w250h-en-US-i-1-style_3.png"}, 
    {
    name: "Granite Mountain Trail" ,
    elevation_gain: 3717,
    length: 7.7,
    body: "Try this 7.7-mile out-and-back trail near Snoqualmie Pass, Washington. Generally considered a challenging route, it takes an average of 6 h 8 min to complete. This is a very popular area for hiking, so you'll likely encounter other people while exploring. The best times to visit this trail are June through October. Dogs are welcome, but must be on a leash.",
    location: "Western Washington",
    image: "https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvNTIzODQxMjYvNDRjNTA2NjBhZDYyZTQwNDI0YzYwMzI5NWU1MmIxNzMuanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJqcGVnIiwicmVzaXplIjp7IndpZHRoIjoyMDQ4LCJoZWlnaHQiOjIwNDgsImZpdCI6Imluc2lkZSJ9LCJyb3RhdGUiOm51bGwsImpwZWciOnsidHJlbGxpc1F1YW50aXNhdGlvbiI6dHJ1ZSwib3ZlcnNob290RGVyaW5naW5nIjp0cnVlLCJvcHRpbWlzZVNjYW5zIjp0cnVlLCJxdWFudGlzYXRpb25UYWJsZSI6M319fQ==",
    map: "https://static-maps.alltrails.com/production/at-map/104454579/v1-trail-us-washington-granite-mountain-trail-at-map-104454579-1664073752-300w250h-en-US-i-1-style_3.png"
    }, 
    {
        name: "Shriner Peak Lookout Trail",
        elevation_gain: 3382,
        length: 8.0,
        body: "Get to know this 8.0-mile out-and-back trail near Paradise Inn, Washington. Generally considered a challenging route, it takes an average of 5 h 51 min to complete. This is a popular trail for camping and hiking, but you can still enjoy some solitude during quieter times of day. The best times to visit this trail are June through September. You'll need to leave pups at home — dogs aren't allowed on this trail.",
        location: "Southwest Washington",
        image: "https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvNTMxNjM2MzYvYzdjMDlmZDU3OTY0YmUwZTUxNWZhZDVkZmM3ZTcyOGMuanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJqcGVnIiwicmVzaXplIjp7IndpZHRoIjoyMDQ4LCJoZWlnaHQiOjIwNDgsImZpdCI6Imluc2lkZSJ9LCJyb3RhdGUiOm51bGwsImpwZWciOnsidHJlbGxpc1F1YW50aXNhdGlvbiI6dHJ1ZSwib3ZlcnNob290RGVyaW5naW5nIjp0cnVlLCJvcHRpbWlzZVNjYW5zIjp0cnVlLCJxdWFudGlzYXRpb25UYWJsZSI6M319fQ==",
        map: "https://static-maps.alltrails.com/production/at-map/126050417/v1-trail-us-washington-shriner-peak-lookout-trail-at-map-126050417-1664459896-300w250h-en-US-i-1-style_3.png"
    },
    {
        name:"Gold Butte Fire Lookout",
        elevation_gain: 734,
        length: 2.5,
        body: "Enjoy this 2.5-mile out-and-back trail near Detroit, Oregon. Generally considered a moderately challenging route, it takes an average of 1 h 28 min to complete. This trail is great for hiking, snowshoeing, and walking, and it's unlikely you'll encounter many other people while exploring. The best times to visit this trail are April through October. Dogs are welcome, but must be on a leash.",
        location: "Northwest Oregon",
        image: "https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvMjg0NTIwNjUvNGNjNjI2ZjNkYTdjMmM2YjQ4Njg2YWU3N2FiZWU4N2IuanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJqcGVnIiwicmVzaXplIjp7IndpZHRoIjoyMDQ4LCJoZWlnaHQiOjIwNDgsImZpdCI6Imluc2lkZSJ9LCJyb3RhdGUiOm51bGwsImpwZWciOnsidHJlbGxpc1F1YW50aXNhdGlvbiI6dHJ1ZSwib3ZlcnNob290RGVyaW5naW5nIjp0cnVlLCJvcHRpbWlzZVNjYW5zIjp0cnVlLCJxdWFudGlzYXRpb25UYWJsZSI6M319fQ==",
        map: "https://static-maps.alltrails.com/production/at-map/22752479/v1-trail-us-oregon-gold-butte-fire-lookout-at-map-22752479-1664117553-300w250h-en-US-i-1-style_3.png"
    },
    {
        name:"Green Peter Fire Lookout",
        elevation_gain: 3431,
        length: 13.3,
        body: "Check out this 13.3-mile out-and-back trail near Lebanon, Oregon. Generally considered a challenging route, it takes an average of 7 h 25 min to complete. This trail is great for hiking, and it's unlikely you'll encounter many other people while exploring.",
        location: "Northwest Oregon",
        image: "https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvMzc2NDM5OTgvMzY0MjRmZDM4YTQxMTlkNTE3MmUwYmMzNTQ3MGMxMTMuanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJqcGVnIiwicmVzaXplIjp7IndpZHRoIjoyMDQ4LCJoZWlnaHQiOjIwNDgsImZpdCI6Imluc2lkZSJ9LCJyb3RhdGUiOm51bGwsImpwZWciOnsidHJlbGxpc1F1YW50aXNhdGlvbiI6dHJ1ZSwib3ZlcnNob290RGVyaW5naW5nIjp0cnVlLCJvcHRpbWlzZVNjYW5zIjp0cnVlLCJxdWFudGlzYXRpb25UYWJsZSI6M319fQ==",
        map: "https://static-maps.alltrails.com/production/at-map/76130430/v1-trail-us-oregon-green-peter-fire-lookout-at-map-76130430-1645165356-300w250h-en-US-i-1-style_3.png"
    },
    {
        name: "Miami Mountain Fire Lookout",
        elevation_gain: 1013,
        length: 4.5,
        body: "Experience this 4.5-mile out-and-back trail near Ahwahnee, California. Generally considered a moderately challenging route, it takes an average of 2 h 21 min to complete. This trail is great for hiking, mountain biking, and running, and it's unlikely you'll encounter many other people while exploring. Dogs are welcome, but must be on a leash.",
        location: "Central California",
        image: "https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvNDg4ODk0MDkvMTEyOTNkNzQ3YWYyNjAxMjI0ODI3YzY0NGM1MDVhMGQuanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJqcGVnIiwicmVzaXplIjp7IndpZHRoIjoyMDQ4LCJoZWlnaHQiOjIwNDgsImZpdCI6Imluc2lkZSJ9LCJyb3RhdGUiOm51bGwsImpwZWciOnsidHJlbGxpc1F1YW50aXNhdGlvbiI6dHJ1ZSwib3ZlcnNob290RGVyaW5naW5nIjp0cnVlLCJvcHRpbWlzZVNjYW5zIjp0cnVlLCJxdWFudGlzYXRpb25UYWJsZSI6M319fQ==",
        map: "https://static-maps.alltrails.com/production/at-map/43280206/v1-trail-us-california-miami-mountain-fire-lookout-at-map-43280206-1652399400-300w250h-en-US-i-1-style_3.png"
    },
    
 {
    name: "Mount Tom Fire Lookout OHV Trail",
    elevation_gain: 1089,
    length: 5.4,
    body: "Get to know this 5.4-mile out-and-back trail near Mono Hot Springs, California. Generally considered a moderately challenging route. This trail is great for off-road driving, and it's unlikely you'll encounter many other people while exploring. The best times to visit this trail are April through October. Dogs are welcome and may be off-leash in some areas.",
    location: "Central California",
    image: "https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvMjYzODU1ODcvNTA5MzQyYzdhYTE4MzE5ODgyMTUwNGJhNmRiNTdkNTguanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJqcGVnIiwicmVzaXplIjp7IndpZHRoIjoyMDQ4LCJoZWlnaHQiOjIwNDgsImZpdCI6Imluc2lkZSJ9LCJyb3RhdGUiOm51bGwsImpwZWciOnsidHJlbGxpc1F1YW50aXNhdGlvbiI6dHJ1ZSwib3ZlcnNob290RGVyaW5naW5nIjp0cnVlLCJvcHRpbWlzZVNjYW5zIjp0cnVlLCJxdWFudGlzYXRpb25UYWJsZSI6M319fQ==",
    map: "https://static-maps.alltrails.com/production/at-map/14347226/v1-trail-us-california-mount-tom-fire-lookout-trail-at-map-14347226-1645042785-300w250h-en-US-i-1-style_3.png"
},
{
    name: "Shadow Mountain Fire Lookout Trail",
    elevation_gain: 1604,
    length: 9.3,
    body: "Check out this 9.3-mile out-and-back trail near Grand Lake, Colorado. Generally considered a moderately challenging route, it takes an average of 4 h 20 min to complete. This is a popular trail for birding, hiking, and horseback riding, but you can still enjoy some solitude during quieter times of day. The best times to visit this trail are May through September. You'll need to leave pups at home — dogs aren't allowed on this trail.",
    location: "Northern Colorado",
    image: "https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvMzAwNTMyMzkvZTQwM2FmNzExMDMwNjQxYjliMDYzYzdjY2FhZGM4ODIuanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJqcGVnIiwicmVzaXplIjp7IndpZHRoIjoyMDQ4LCJoZWlnaHQiOjIwNDgsImZpdCI6Imluc2lkZSJ9LCJyb3RhdGUiOm51bGwsImpwZWciOnsidHJlbGxpc1F1YW50aXNhdGlvbiI6dHJ1ZSwib3ZlcnNob290RGVyaW5naW5nIjp0cnVlLCJvcHRpbWlzZVNjYW5zIjp0cnVlLCJxdWFudGlzYXRpb25UYWJsZSI6M319fQ==",
    map: "https://static-maps.alltrails.com/production/at-map/13527431/v1-trail-us-colorado-shadow-mountain-fire-lookout-trail-at-map-13527431-1645044142-300w250h-en-US-i-1-style_3.png"
},
{
    name: "Lookout Mountain Trail",
    elevation_gain:2562,
    length: 10.4,
    body: "Experience this 10.4-mile out-and-back trail near Bellvue, Colorado. Generally considered a moderately challenging route, it takes an average of 5 h 41 min to complete. This is a popular trail for birding, hiking, and walking, but you can still enjoy some solitude during quieter times of day. The best times to visit this trail are June through November. Dogs are welcome and may be off-leash in some areas.",
    location: "Northern Colorado",
    image: "https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvNTY0MzIzMTEvYjM2NDkzMGNmZTg0N2E5YzI1ZDk4OWY2NWViMzdlMDQuanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJqcGVnIiwicmVzaXplIjp7IndpZHRoIjoyMDQ4LCJoZWlnaHQiOjIwNDgsImZpdCI6Imluc2lkZSJ9LCJyb3RhdGUiOm51bGwsImpwZWciOnsidHJlbGxpc1F1YW50aXNhdGlvbiI6dHJ1ZSwib3ZlcnNob290RGVyaW5naW5nIjp0cnVlLCJvcHRpbWlzZVNjYW5zIjp0cnVlLCJxdWFudGlzYXRpb25UYWJsZSI6M319fQ==",
    map: "https://static-maps.alltrails.com/production/at-map/23586743/v1-trail-us-colorado-lookout-mountain-trail-at-map-23586743-1659248692-300w250h-en-US-i-1-style_3.png"
}


  ]  )
  puts "Seeding reviews "

  20.times do
    user = User.all.sample
    trail = Trail.all.sample
  
    review = Review.create(
      body: Faker::Lorem.paragraph(sentence_count: 2...4),
      condition: ['Good', 'Bad', 'Normal', 'Snowy', 'Washed Out'].sample,
      rating: Faker::Number.between(from: 1, to: 5),
      user: user,
      date: Faker::Date.backward(days: rand(1..365)),
      trail: trail  # Associate the review with a trail using the new trail_id column
    )
  end
  
  puts "All seeded"