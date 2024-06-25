// Import access to database tables
const tables = require("../../database/tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res) => {
  const categoriesFromDB = await tables.category.readAll();
  res.json(categoriesFromDB);
};

// The R of BREAD - Read operation
// const read = async (req, res, next) => {
//   try {
//     // Fetch a specific category from the database based on the provided ID
//     const category = await tables.category.read(req.params.id);

//     // If the category is not found, respond with HTTP 404 (Not Found)
//     // Otherwise, respond with the category in JSON format
//     if (category == null) {
//       res.sendStatus(404);
//     } else {
//       res.json(category);
//     }
//   } catch (err) {
//     // Pass any errors to the error-handling middleware
//     next(err);
//   }
// };

// // The E of BREAD - Edit (Update) operation
// // This operation is not yet implemented

// // The A of BREAD - Add (Create) operation
// const add = async (req, res, next) => {
//   // Extract the category data from the request body
//   const category = req.body;

//   try {
//     // Insert the category into the database
//     const insertId = await tables.category.create(category);

//     // Respond with HTTP 201 (Created) and the ID of the newly inserted category
//     res.status(201).json({ insertId });
//   } catch (err) {
//     // Pass any errors to the error-handling middleware
//     next(err);
//   }
// };

// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented

// Ready to export the controller functions
module.exports = {
  browse,
  // read,
  // edit,
  // add,
  // destroy,
};
