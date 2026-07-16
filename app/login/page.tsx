import { AuthForm } from "@/components/auth-form"

export const metadata = {
  title: "Вход — RosVuz",
  description: "Войдите в личный кабинет RosVuz.",
}

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-secondary px-4 py-12">
      <AuthForm mode="login" />
    </main>
  )
}
