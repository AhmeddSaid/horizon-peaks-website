import { auth } from "@/app/_lib/auth";

export const metadata = {
  title: "Guest area",
};

export default async function page() {
  const session = await auth();

  console.log(session);

  const firstName = session.user.name.split(" ").at(0);

  return (
    <h2 className="text-2xl font-semibold capitalize text-accent-400 mb-7">
      Welcome, {firstName}
    </h2>
  );
}
