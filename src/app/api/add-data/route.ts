import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const teamID = searchParams.get("team-number");
  const teamName = searchParams.get("team-name");
  const qualificationNumber = searchParams.get("qualification-number");
  const cycles = searchParams.get("cycles");
  const autonomousPosition = searchParams.get("autonomous-position");
  const drone = searchParams.get("drone");
  const climb = searchParams.get("climb");
  const notes = searchParams.get("notes");

  try {
    if (
      !teamID ||
      !teamName ||
      !qualificationNumber ||
      !climb ||
      !drone ||
      !cycles ||
      !autonomousPosition ||
      !notes
    )
      throw new Error("Fill out all fields!");
    await sql`INSERT INTO RobotData (teamID, name, qualificationNumber, climb, drone, cycles, autonomousPosition, notes) VALUES 
        (${teamID}, ${teamName}, ${qualificationNumber}, ${climb}, ${drone}, ${cycles},
        ${autonomousPosition}, ${notes});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const data = await sql`SELECT * FROM RobotData;`;
  return NextResponse.json({ data }, { status: 200 });
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
