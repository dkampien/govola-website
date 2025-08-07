import Link from 'next/link'
import { Container } from './container'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { href: '/about', label: 'About' },
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms & Conditions' },
    { href: '/#contact', label: 'Contact' },
  ]

  return (
    <footer className="bg-gray-50/50 border-t border-gray-200">
      <Container>
        <div className="py-16">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex flex-col items-center md:items-start space-y-2">
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold bg-gradient-to-r from-vola-blue to-vola-blue-dark bg-clip-text text-transparent">Vola</span>
                <span className="text-sm text-gray-500 font-medium">Content Engine</span>
              </div>
              <p className="text-sm text-gray-500">
                Built by the Vola.ro team in Bucharest, Romania
              </p>
            </div>

            <nav className="flex flex-wrap justify-center gap-8">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200/50">
            <p className="text-center text-sm text-gray-400">
              © {currentYear} Vola.ro. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}