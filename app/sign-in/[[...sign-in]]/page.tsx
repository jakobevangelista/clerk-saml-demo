// import { SignIn } from "@clerk/nextjs";

// export default function Page() {
//   return (
//     <div className="flex justify-center py-24">
//       <SignIn />
//     </div>
//   );
// }

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SignIn } from "@clerk/nextjs";
import Link from "next/link";

export default function SignInPage() {
  return (
    <>
      <Card className="mx-auto max-w-md">
        <CardContent className="pt-4">
          <div className="grid gap-4">
            <SignIn forceRedirectUrl={"/protected"} />

            <Button variant={"secondary"} className="w-full" asChild>
              <Link href={"/sso-sign-in"}>Login with Enterprise SSO</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
