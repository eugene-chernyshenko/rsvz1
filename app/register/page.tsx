import { AuthForm } from "@/components/auth-form"

export const metadata = {
  title: "Регистрация — RosVuz",
  description: "Создайте аккаунт на образовательном портале RosVuz.",
}

export default function RegisterPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-secondary px-4 py-12">
      <AuthForm mode="register" />
    </main>
  )
}
