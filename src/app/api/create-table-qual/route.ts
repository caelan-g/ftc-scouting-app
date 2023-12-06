import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const result = await sql`CREATE TABLE QualData ( 
      ,
      name VARCHAR(255), 
      climb-success DECIMAL(3,2)
      drone-avg DECIMAL(2,2)
      cycle-avg DECIMAL(2,2)
      autonomous-position VARCHAR(255),
      team-ID int INTEGER PRIMARY KEY
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
