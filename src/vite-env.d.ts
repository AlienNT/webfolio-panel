type Id = string

interface DefaultInterface {
  _id: Id
}

interface NavigationLink extends DefaultInterface {
  path: string,
  title: string
  label?: string,
}

interface LanguageLocales {
  ru: string,
  ua: string,
  en: string
}

interface FirstName extends LanguageLocales {
}

interface LastName extends LanguageLocales {
}

interface Profile extends DefaultInterface {
  firstName: FirstName
  lastName: LastName
}

interface Skill extends DefaultInterface {
  title: string
  active?: string
  image: string
}

interface Work extends DefaultInterface {
  image?: string,
  path: string,
  codePath: string,
  chips?: string
}

interface Contact extends DefaultInterface {
  title: string,
  type: 'social' | 'email' | 'phone',
  value: string | number,
}
interface ImportMeta {
  env: {
    VITE_API_URL?: string
  }
}