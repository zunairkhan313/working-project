import connectMongoDB from "../../../lib/mongodb";
import Topic from "../../../models/topic";
import { NextResponse } from "next/server";
const express = require("express")
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json( { limit : "10mb"}))

export async function POST(request) {

  const image = new Topic({
    image : request.body.img
  })
  await image.save();
  await connectMongoDB();
  return NextResponse.json({ message: "Image Uploaded" , success : true }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const topics = await Topic.find();
  return NextResponse.json({ topics });
}

