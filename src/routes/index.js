import { Router } from "express";
import { buildPDF } from "../lib/pdfkit.js";

const router = Router();

router.get("/invoice", (req, res) => {
  const stream = res.writeHead(200, {
    "Content-Type": "application/pdf",
    "Content-Disposition": "attachment; filename-invoice.pdf",
  });

  buildPDF((data) => {
    stream.write(data);
  });
  res.send("invoice");
});

export default router;
