"use client";
import { useState } from "react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { LayoutDashboard, Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="border-b p-2 flex items-center justify-between relative">
      <Link href="/">
        <Image
          src="/logo.png"
          alt="Sensai Logo"
          width={100}
          height={20}
          className="h-10 w-auto object-contain"
        />
      </Link>

      <nav className="container  hidden md:flex flex-1 justify-center items-center space-x-20">
        <SignedIn>
          <Link href="/dashboard">
            <Button className="flex items-center space-x-2">
              <LayoutDashboard className="h-4 w-4" />
              <span>Industry Insights</span>
            </Button>
          </Link>
          <Link href="/dashboard">
            <Button className="flex items-center space-x-2">
              <LayoutDashboard className="h-4 w-4" />
              <span>Dashboard</span>
            </Button>
          </Link>
          <Link href="/dashboard">
            <Button className="flex items-center space-x-2">
              <LayoutDashboard className="h-4 w-4" />
              <span>Dashboard</span>
            </Button>
          </Link>
        </SignedIn>
      </nav>

      <div className="flex items-center space-x-2">
        <SignedOut>
          <SignInButton>
            <Button className="bg-emerald-500 font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
              Sign In
            </Button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>

        <button
          className="md:hidden ml-2 p-2 rounded-md hover:bg-gray-200"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full shadow-md z-50">
          <SignedIn>
            <Link
              href="/dashboard"
              className="block px-4 py-3 border-b"
              onClick={() => setMobileMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link
              href="/about"
              className="block px-4 py-3 border-b"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block px-4 py-3 border-b"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </SignedIn>
        </div>
      )}
    </header>
  );
}
