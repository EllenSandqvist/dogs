import express from "express";
import { Router } from "express";
import fs from "fs";

const router = Router();

const dogs = JSON.parse(fs.readFileSync("./data/dogs.json"));

router.get("/", (req, res) => {
  res.status(200).render("home", { dogs: dogs });
});

export default router;
