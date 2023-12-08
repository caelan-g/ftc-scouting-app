import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET(request: Request) {
  try {
    const result = await sql`CREATE TABLE RobotData (
      teamID INTEGER,
      name VARCHAR(255), 
      climb BOOLEAN,
      drone BOOLEAN,
      cycles INTEGER,
      autonomousPosition VARCHAR(255),
      notes VARCHAR(255)
    );`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

/* data types 
  team-number
  team-name
  qualification-number
  cycles
  autonomous-position
  drone
  climb
  notes
  */

//http://localhost:3000/api/create-table-basic
