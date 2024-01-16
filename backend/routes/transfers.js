import express from "express";
import {
  createTransfer,
  updateTransfer,
  deleteTransfer,
  getSingleTransfer,
  getAllTransfer,
   getTransferBySearch, getFeaturedTransfer, getTransferCount
} from "./../controllers/transferController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// Create new transfer
router.post("/", verifyAdmin, createTransfer);
// Update transfer
router.put("/:id", verifyAdmin, updateTransfer);
// Delete transfer
router.delete("/:id", verifyAdmin, deleteTransfer);
// Get single transfer
router.get("/:id", getSingleTransfer);
// Get all transfers
router.get("/", getAllTransfer);

 router.get("/search/getTransferBySearch", getTransferBySearch);
 router.get("/search/getFeaturedTransfers", getFeaturedTransfer);
 router.get("/search/getTransferCount", getTransferCount);

export default router;
