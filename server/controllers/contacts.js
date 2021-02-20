import Contact from "../models/Contact.js";
import asyncHandler from "express-async-handler";

// @desc    Get all Contacts
// @route   GET /api/a1/contacts
// @access  Private
export const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find({ user: req.user._id }).sort({
    date: -1,
  });
  if (!contacts || contacts.length === 0) {
    throw new Error("Du hast leider keine Kontakte!");
  }
  res.status(200).json({ success: true, data: contacts });
});

// @desc    create a Contact
// @route   POST /api/a1/contacts
// @access  Private
export const createContact = asyncHandler(async (req, res) => {
  const { name, email, phone, type } = req.body;
  console.log(req.user);
  const user = req.user._id;

  const newContact = await Contact.create({ user, name, email, phone, type });
  if (!newContact) {
    throw new Error("Es gab ein Fehler beim Erstellen!");
  }
  const contact = await newContact.save();

  res.status(200).json({ success: true, data: contact });
});

// @desc    update a Contact
// @route   PUT /api/a1/contacts:/id
// @access  Private
export const updateContact = asyncHandler(async (req, res) => {
  let contact = await Contact.findById(req.params.id);
  if (!contact) {
    throw new Error("Diesen Kontakt gibt es nicht");
  }
  contact = await Contact.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        type: req.body.type,
      },
    },
    { new: true }
  );
  res.status(200).json({ success: true, data: contact });
});

// @desc    delete a Contact
// @route   DELETE /api/a1/contacts:/id
// @access  Private
export const deleteContact = asyncHandler(async (req, res) => {
  let contact = await Contact.findById(req.params.id);
  if (!contact) {
    throw new Error("Diesen Kontakt gibt es nicht");
  }
  // make sure user owns contact
  if (contact.user.toString() !== req.user.id) {
    throw new Error("Das ist nicht dein Kontakt!");
  }
  await Contact.findByIdAndRemove(req.params.id);
  res.status(200).json({ success: true, data: {} });
});
