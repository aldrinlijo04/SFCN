import { Button } from "@/components/ui/button"
import { LoginButton } from "@/components/auth/login-button"
import { ArrowRight, Building2, Users, Briefcase } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <Building2 className="h-6 w-6" />
              <span className="font-bold">StartupHub</span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-2">
            <LoginButton />
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
          <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
            <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
              Connect Startups, Investors & Talent
            </h1>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              The platform where innovative startups meet strategic investors and exceptional talent. Build, invest, and
              grow together.
            </p>
            <div className="space-x-4">
              <LoginButton asChild>
                <Button size="lg">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </LoginButton>
            </div>
          </div>
        </section>
        <section className="container space-y-6 py-8 md:py-12 lg:py-24">
          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-3">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                <Building2 className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold">For Startups</h3>
              <p className="text-muted-foreground">
                Showcase your project, connect with investors, and find top talent to help you grow.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                <Users className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold">For Investors</h3>
              <p className="text-muted-foreground">
                Discover promising startups, make informed investments, and track your portfolio growth.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                <Briefcase className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold">For Freelancers</h3>
              <p className="text-muted-foreground">
                Find exciting projects, showcase your skills, and build your reputation in the startup ecosystem.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

