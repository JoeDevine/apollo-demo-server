import { Request, Response, NextFunction } from "express";

interface Telemetry {
  userId: Number;
  id: Number;
  title: String;
  body: String;
}

// let telemetry: [Telemetry] = result.data;

// getting all posts
const getTelemetry = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return res.status(200).json({
    message: "Successfully Queried Posts",
  });
};

// adding telemetry
const addTelemetry = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("Body ->", req.body);
  // return response
  return res.status(200).json({
    message: "Successully posted",
    body: req.body,
  });
};

export default { getTelemetry, addTelemetry };
