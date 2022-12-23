import Router from "express";
import {
  urlTransform,
  getUrlList,
  goToSite,
  deleteLink,
} from "../controllers/url.controller.js";
import {
  urlSchemmaValidation,
  authenticationVerify,
  verifyId,
  updateCount,
  verifyUrl,
  linkDeleteVerify,
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

router.delete(
  "/urls/:id",
  authenticationVerify,
  verifyUrl,
  linkDeleteVerify,
  deleteLink
);

export default router;
