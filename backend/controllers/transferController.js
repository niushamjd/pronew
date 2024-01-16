import Transfer from "../models/Transfer.js";

// Create Transfer
export const createTransfer = async (req, res) => {
  const newTransfer = new Transfer(req.body);
  try {
    const savedTransfer = await newTransfer.save();
    res.status(200).json({ success: true, message: "Successfully created a new transfer", data: savedTransfer });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to create a new transfer", data: error });
  }
};

// Update Transfer
export const updateTransfer = async (req, res) => {
    const id = req.params.id;
    try {
      const updatedTransfer = await Transfer.findByIdAndUpdate(
        id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json({
        success: true,
        message: "Succesfully updated",
        data: updatedTransfer,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Failed to update",
      });
    }
};

// Delete Transfer
export const deleteTransfer = async (req, res) => {
    const id = req.params.id;
    try {
      await Transfer.findByIdAndDelete(id);
      res.status(200).json({
        success: true,
        message: "Succesfully deleted",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Failed to delete",
      });
    }};

// Get Single Transfer
export const getSingleTransfer = async (req, res) => {
    const id = req.params.id;
    try {
      const transfer = await Transfer.findById(id);
      res.status(200).json({
        success: true,
        message: "Succesful",
        data: transfer,
      });
    } catch (error) {
      res.status(404).json({
        success: false,
        message: "not found",
      });
    }};

// Get All Transfers
export const getAllTransfer = async (req, res) => {
    const page = parseInt(req.query.page);

    try {
      const transfers = await Transfer.find({})
        .skip(page * 8)
        .limit(8);
      res.status(200).json({
        success: true,
        count: transfers.length,
        message: "Succesfull",
        data: transfers,
      });
    } catch (error) {
      res.status(404).json({
        success: false,
        message: "not found",
      });
    }};

// get tour by search
export const getTransferBySearch = async (req, res) => {
    const origin = new RegExp(req.query.origin, "i"); // here i is for case insensitive
  
    try {
      //gte means greater than equal
      const transfers = await Transfer.find({
        origin,
      });
      res.status(200).json({
        success: true,
        message: "Succesfull",
        data: transfers,
      });
    } catch (error) {
      res.status(404).json({
        success: false,
        message: "not found",
      });
    }
  };
  
  // get featured tours
  export const getFeaturedTransfer = async (req, res) => {
    try {
      const transfers = await Transfer.find({ featured: true })
        .limit(8);
      res.status(200).json({
        success: true,
        message: "Succesfull",
        data: transfers,
      });
    } catch (error) {
      res.status(404).json({
        success: false,
        message: "not found",
      });
    }
  };
  
  // get tour counts
  export const getTransferCount = async (req, res) => {
    try {
      const transferCount = await Transfer.estimatedDocumentCount();
  
      res.status(200).json({
        success: true,
        data: transferCount,
      });
    } catch (error) {
      res.status(404).json({
        success: false,
        message: "failed to fetch",
      });
    }
  };
  
export default {
  createTransfer,
  updateTransfer,
  deleteTransfer,
  getSingleTransfer,
  getAllTransfer,
  getTransferBySearch,
  getTransferCount,
  getFeaturedTransfer
};
