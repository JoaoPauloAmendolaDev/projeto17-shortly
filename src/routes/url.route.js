import Router from "express";
import {
  urlTransform,
  getUrlList,
  goToSite,
} from "../controllers/url.controller.js";
import {
  urlSchemmaValidation,
  authenticationVerify,
  verifyId,
  updateCount,
  verifyUrl,
} from "../middlewares/url.middleware.js";

const router = Router();

router.post(
  "/urls/shorten",
  authenticationVerify,
  urlSchemmaValidation,
  urlTransform
);

router.get("/urls/:id", verifyId, getUrlList);
router.get("/urls/open/:shortUrl", verifyUrl, updateCount, goToSite);

export default router;
