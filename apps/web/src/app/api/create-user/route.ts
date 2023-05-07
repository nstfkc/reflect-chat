import { addDays } from "date-fns";
import { prisma } from "db";
import { hex } from "generate-random-color";

export async function POST(request: Request) {
  const { username } = await request.json();
  try {
    const user = await prisma.user.create({
      data: {
        username,
        profileColor: hex(),
      },
    });

    const date = new Date();

    const newDate = addDays(date, 1);

    return new Response(JSON.stringify(user), {
      status: 200,
      headers: {
        "Set-Cookie": `userid=${
          user.id
        };Expires=${newDate.toUTCString()};Path=/`,
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    console.log(err);
  }
}
