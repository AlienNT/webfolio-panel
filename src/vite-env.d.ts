type Id = string
type Token = string
type Method = 'GET' | 'POST' | 'PATCH' | 'DELETE'

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
  active?: boolean
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

interface ImportMetaEnvCustom extends Readonly<Record<string, string>> {
  VITE_API_URL?: string
}

interface ImportMeta extends import('vite/types/importMeta').ImportMeta {
  readonly env: ImportMetaEnvCustom & import('vite/types/importMeta').ImportMetaEnv
}

interface IsLoadDelay {
  isLoadDelay?: number
}

interface AuthForm {
  password: string,
  email: string
}

interface ApiRequest {
  data?: T,
  status: number,
  errors?: any
  accessToken?: Token
}

interface RefreshTokenResponse {
  accessToken: string
}