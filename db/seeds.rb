# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
user = User.create email: 'hexflo@yahoo.com', password: 'Strong19!', password_confirmation: 'Strong19!'
apartments = [
{
    street:'1326 26th',
    city:'',
    state:'CA',
    manager: 'YC',
    email:'email',
    price:'3000',
    bedrooms:8,
    bathrooms:6,
    pets:'yes',
    user_id:user.id,
},
{
    street:"349 horrilbe st",
    city:'Seattle',
    state:'Washington',
    manager:'NC',
    email:'email',
    price:'400',
    bedrooms:2,
    bathrooms:1,
    pets:'yes',
    user_id:user.id,
}
]
apartments.each do |value|
    Apartment.create value
    puts "creating apartment: #{value}"
end