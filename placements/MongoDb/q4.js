db.employees.find({department: "IT"})
db.employees.find({department:{$eq: "IT"}})

db.employees.find({salary:{$gte: 3000}}) //gt->greater than gte->greater than or equal to
// lt lte gt gte eq ne
db.employees.find({salary:{$ne: 3000}})

db.employees.find({salary:{$ne: 3000}, department:{$eq: "IT"}},{_id:0,name:1})

db.employees.find({salary:{$ne: 3000}, department:{$eq: "IT"}},{_id:0,name:1}).limit(1)

db.employees.find().sort({salary: -1}).limit(2); //display top 2 highest salary employee

db.employees.find({$and:[{salary:{$gt: 3000}, department:{$eq: "IT"}}]})

db.employees.find({$or:[{salary:{$gt: 3000}}, {department:{$eq: "IT"}}]})