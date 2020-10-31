import React, { createContext, useContext, useEffect, useState } from 'react'
import api from '../services/api';

interface AuthContextData {
  signed: boolean
  user: object | null
  loading: boolean
  signIn(email: string, password: string): Promise<void>
  singOut(): void
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC = ({children})  => {
  const [user, setUser] = useState<object | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadStorageData() {
      const storageUser = localStorage.getItem('@RNAuth:user')
      if (storageUser) {
        setUser(JSON.parse(storageUser))
      }
    }
    setLoading(false)
    loadStorageData()
  }, [])

  async function signIn(email: string, password: string) {

    const response = await api.post(`list-users/`, { email, password })

    // console.log(response.data);

    setTimeout(function() {
      setUser(response.data)
      localStorage.setItem('@RNAuth:user',JSON.stringify(response.data))

    }, 10)


  }

  function singOut() {
    localStorage.clear()
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, loading, signIn, singOut }}>
      {children}
    </AuthContext.Provider>
  )
} 
  
export function useAuth() {
  const context = useContext(AuthContext)
  return context
}