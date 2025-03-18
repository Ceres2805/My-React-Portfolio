import { Disclosure, DisclosureButton, DisclosurePanel} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import '../css/Navbar.css';

const navigation = [
  { name: 'About', href: '#about'},
  { name: 'Projects', href: '#projects'},
  { name: 'Skills', href: '#skills'},
  { name: 'Contact', href: '#contact'},
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-[#007bff2b] backdrop-blur-md fixed top-0 z-10 left-0 w-full shadow-lg">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center p-2 text-[#007bff] hover:bg-[#007bff] hover:text-white' focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>
          <div className="flex-1 items-center justify-center sm:items-stretch sm:justify-center hidden sm:ml-6 sm:block">
            <div className="flex space-x-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  aria-current={'page'}
                  className={classNames('text-[#007bff] hover:bg-[#007bff] hover:text-white', 'px-3 py-2 text-md font-medium')}>
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={'page'}
              className={classNames('text-[#007bff] hover:bg-[#007bff] hover:text-white', 'block px-3 py-2 text-sm font-medium')}>
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
