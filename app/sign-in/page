"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "@/firebase";
import Foot from "@/components/foot";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setError("");

    try {
      const credential = await signInWithEmailAndPassword(
        getAuth(app),
        email,
        password
      );
      const idToken = await credential.user.getIdToken();

      await fetch("/api/sign-in", {
        headers: {
          Authorization: `Bearer ${idToken}`,
        },
      });

      router.push("/");
    } catch (e) {
      setError((e as Error).message);
    }
  }

  return (
    <main className="relative bg-background">
      <div className="relative flex min-h-dvh shrink-0 justify-center md:px-12 lg:px-0">
        <div className="relative z-10 flex flex-1 flex-col justify-center bg-background/50 px-4 py-10 md:flex-none md:px-24">
          <div className="mx-auto w-full max-w-md sm:px-4 md:w-[400px] md:px-0">
            <div className="mx-auto w-full max-w-md space-y-8 lg:mx-0">
              <div>
                <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Masuk</h2>
                <p className="mt-2 text-sm text-foreground">Masuk dengan akun yang telah Anda daftarkan.</p>
              </div>
              <form 
                onSubmit={handleSubmit}
                action="#"
                className="mt-8 space-y-6">
                <div className="space-y-3 rounded-md shadow-sm">
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-foreground pb-2">Email</label>
                    <div className="flex flex-col items-start">
                      <input
                        className="relative block w-full appearance-none rounded-lg border border-border bg-input px-3 py-2 text-xs text-foreground placeholder-muted-foreground focus:z-10 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary disabled:cursor-not-allowed disabled:opacity-75"
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        id="email"
                        placeholder="Email"
                        required
                      />
                    </div>
                    <span className="text-xs text-destructive"></span>
                  </div>
                  <div>
                    <label htmlFor="password" className="block text-xs font-medium text-foreground pb-2">Kata sandi</label>
                    <div className="relative">
                      <div className="flex flex-col items-start">
                        <input
                          className="relative block w-full appearance-none rounded-lg border border-border bg-input px-3 py-2 text-xs text-foreground placeholder-muted-foreground focus:z-10 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary disabled:cursor-not-allowed disabled:opacity-75"
                          type="password"
                          name="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          id="password"
                          placeholder="Kata Sandi"
                        />
                      </div>
                      <button type="button" className="text-murky-700 absolute right-4 top-0 z-20 h-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                          className="h-4 w-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                          />
                        </svg>
                      </button>
                    </div>
                    <span className="text-xs text-destructive"></span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        className="border-murky-600 bg-murky-700 focus:ring-primary-400 focus:ring-offset-murky-900 h-4 w-4 cursor-pointer rounded text-primary"
                        id="remember-me"
                        name="rememberMe"
                      />
                      <label
                        htmlFor="remember-me"
                        className="block text-xs font-medium text-foreground ml-3 select-none text-sm text-foreground"
                      >
                        Ingat akun ku
                      </label>
                    </div>
                  </div>
                  <div className="text-sm">
                    <Link
                      className="font-medium text-primary hover:text-primary/75"
                      style={{ outline: 'none' }}
                      href="/forgot-password"
                    >
                      Lupa kata sandi mu?
                    </Link>
                  </div>
                </div>
                <div>
                  {error && (
                    <div
                      className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                      role="alert"
                    >
                      <span className="block sm:inline">{error}</span>
                    </div>
                  )}
                  <button
                    className="items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground duration-300 disabled:cursor-not-allowed disabled:opacity-75 group relative flex w-full hover:bg-primary/75"
                    type="submit"
                    
                  >
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-5 w-5 text-primary-foreground transition-colors group-hover:text-primary-foreground"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                        />
                      </svg>
                    </span>
                    Masuk
                  </button>
                </div>
                <div className="relative mt-6">
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 text-foreground">Belum memiliki akun?</span>
                  </div>
                </div>
                <div>
                  <Link
                    className="items-center justify-center rounded-lg px-4 py-2 text-sm font-medium duration-300 group relative flex w-full bg-muted text-muted-foreground hover:bg-muted/75"
                    style={{ outline: 'none' }}
                    href="/sign-up"
                  >
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-5 w-5 text-background transition-colors group-hover:text-muted-foreground"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                        />
                      </svg>
                    </span>
                    Daftar
                  </Link>
                </div>

              </form>
              
            </div>
          </div>
        </div>
      </div>
      <Foot />
    </main>
  );
}