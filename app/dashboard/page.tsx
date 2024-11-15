import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { redirect } from "next/navigation"
import MaxWidthWrapper from "@/components/common/MaxWidthWrapper"
import prisma from "@/lib/prisma"
import Dashboard from "@/components/Dashboard"

const Page = async () => {

    const { getUser } = getKindeServerSession()
    const user = await getUser()

    if (!user) {
        redirect("/")
    }

    const userData = await prisma.user.findFirst({
        where: {
            id: user?.id
        }
    });

    if (!userData) {
        redirect("/")
    }
  return (
    <MaxWidthWrapper>
        <Dashboard/>
    </MaxWidthWrapper>
  )
}

export default Page