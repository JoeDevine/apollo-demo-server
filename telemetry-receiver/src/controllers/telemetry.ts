import { Request, Response, NextFunction } from "express";
import fs from "fs";

interface Telemetry {
  id: Number;
  body: String;
}

// let telemetry: [Telemetry] = result.data;

const getTelemetry = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return res.status(200).json({
    message: "Successfully Queried Telemetry",
  });
};

// adding telemetry
const addTelemetry = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("Body ->", req.body);
  const filename = `./${Date.now()}-telemetry.json`;

  try {
    fs.writeFileSync(filename, JSON.stringify(req.body));
  } catch (err) {
    console.error(err);
  }
  // return response
  return res.status(200).json({
    message: "Successully posted",
    file: filename,
    body: req.body,
  });
};

export default { getTelemetry, addTelemetry };
