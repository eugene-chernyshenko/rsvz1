import Link from "next/link"
import { GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"

type AuthFormProps = {
  mode: "login" | "register"
}

export function AuthForm({ mode }: AuthFormProps) {
  const isLogin = mode === "login"

  return (
    <div className="w-full max-w-md">
      <Link href="/" className="flex items-center justify-center gap-2">
        <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
          <GraduationCap className="h-5 w-5" />
        </span>
        <span className="text-xl font-bold tracking-tight text-foreground">
          Ros<span className="text-primary">Vuz</span>
        </span>
      </Link>

      <div className="mt-8 rounded-xl border border-border bg-card p-6 sm:p-8">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">
          {isLogin ? "Вход в личный кабинет" : "Регистрация"}
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          {isLogin
            ? "Войдите, чтобы сохранять учреждения и оставлять отзывы."
            : "Создайте аккаунт, чтобы пользоваться всеми возможностями портала."}
        </p>

        <form className="mt-6 flex flex-col gap-4">
          {!isLogin && (
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-sm font-medium text-foreground">
                Имя
              </label>
              <input
                id="name"
                type="text"
                placeholder="Иван Иванов"
                className="h-11 rounded-lg border border-input bg-secondary px-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/30"
              />
            </div>
          )}

          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-sm font-medium text-foreground">
              Электронная почта
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="h-11 rounded-lg border border-input bg-secondary px-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/30"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="password" className="text-sm font-medium text-foreground">
              Пароль
            </label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              className="h-11 rounded-lg border border-input bg-secondary px-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/30"
            />
          </div>

          <Button type="submit" size="lg" className="mt-2 w-full">
            {isLogin ? "Войти" : "Создать аккаунт"}
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          {isLogin ? (
            <>
              Нет аккаунта?{" "}
              <Link href="/register" className="font-medium text-primary hover:underline">
                Зарегистрироваться
              </Link>
            </>
          ) : (
            <>
              Уже есть аккаунт?{" "}
              <Link href="/login" className="font-medium text-primary hover:underline">
                Войти
              </Link>
            </>
          )}
        </p>
      </div>
    </div>
  )
}
