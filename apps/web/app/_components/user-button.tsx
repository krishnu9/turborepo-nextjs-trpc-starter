import { getServerAuthSession } from "@repo/auth";

export default async function UserButton() {
    const session = await getServerAuthSession();
    if (!session?.user) return <SignIn />;
}