import express from "express";
import {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
} from "../controllers/orderControler.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").post(protect, addOrderItems);
// make sure that this /:id rote is always below the "/" rote bcz if it is on upper side it consider id as nothing and run itself
router.route("/:id").get(protect, getOrderById);

router.route("/:id/pay").put(protect, updateOrderToPaid);

export default router;
