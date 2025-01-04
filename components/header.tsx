'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Menu, X, Search, User, LogIn, Trophy } from 'lucide-react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [userPoints, setUserPoints] = useState(0)

  useEffect(() => {
    const storedPoints = localStorage.getItem('userPoints')
    if (storedPoints) {
      setUserPoints(parseInt(storedPoints))
    }
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement search functionality here
    console.log('Searching for:', searchQuery)
    setIsSearchOpen(false)
    setSearchQuery('')
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-80 backdrop-blur-sm py-2">
      <nav className="container mx-auto px-2 sm:px-4 lg:px-6" aria-label="Top">
        <div className="flex items-center justify-between h-12 relative">
          <div className="flex items-center justify-start w-1/3">
            <div className="relative">
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="text-gray-300 hover:text-white p-2 rounded-md transition-transform duration-200 ease-in-out transform hover:scale-110 bg-black"
              >
                <Search className="h-5 w-5" />
              </button>
              {isSearchOpen && (
                <form onSubmit={handleSearch} className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2">
                  <Input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-64"
                  />
                </form>
              )}
            </div>
            <div className="hidden md:flex items-center space-x-2 ml-2">
              <Link href="/shop" className="text-gray-300 hover:text-white px-2 py-1 rounded-md text-sm font-medium bg-black">
                Shop
              </Link>
              <Link href="/questionnaire" className="text-gray-300 hover:text-white px-2 py-1 rounded-md text-sm font-medium bg-black">
                Quizzes
              </Link>
              <Link href="/rewards" className="text-gray-300 hover:text-white px-2 py-1 rounded-md text-sm font-medium bg-black">
                Rewards
              </Link>
            </div>
          </div>

          <Link href="/" className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
            <span className="text-2xl font-bold text-center gradient-text">SPINNECO</span>
          </Link>

          <div className="flex items-center justify-end w-1/3">
            <div className="hidden md:flex items-center space-x-4">
              {localStorage.getItem('token') ? (
                <Link href="/profile" className="text-gray-300 hover:text-white px-2 py-1 rounded-md text-sm font-medium bg-black">
                  <User className="h-5 w-5" />
                </Link>
              ) : (
                <Link href="/login" className="text-gray-300 hover:text-white px-2 py-1 rounded-md text-sm font-medium bg-black">
                  <LogIn className="h-5 w-5" />
                </Link>
              )}
            </div>
            <div className="md:hidden">
              <Button variant="ghost" onClick={() => setIsMenuOpen(!isMenuOpen)} className="bg-black text-white hover:bg-gray-800">
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <X className="block h-6 w-6 text-white" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6 text-white" aria-hidden="true" />
                )}
              </Button>
            </div>
            <div className="flex items-center space-x-1 ml-2">
              <Trophy className="h-4 w-4 text-yellow-400" />
              <span className="text-xs font-medium">{userPoints}</span>
            </div>
          </div>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black bg-opacity-80 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/shop" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Shop
            </Link>
            <Link href="/questionnaire" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Quizzes
            </Link>
            <Link href="/rewards" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Rewards
            </Link>
            <Link href="/login" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Log In
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

